const input = document.querySelector('#latexInput');
const preview = document.querySelector('#mathPreview');
const stage = document.querySelector('#previewStage');
const errorMessage = document.querySelector('#errorMessage');
const charCount = document.querySelector('#charCount');
const pngButton = document.querySelector('#pngButton');
const svgButton = document.querySelector('#svgButton');
const sampleButton = document.querySelector('#sampleButton');
const scaleSelect = document.querySelector('#scaleSelect');
const transparentToggle = document.querySelector('#transparentToggle');
const copyStatus = document.querySelector('#copyStatus');
const alignButton = document.querySelector('#alignButton');
const alignButtonLabel = document.querySelector('#alignButtonLabel');
const sample = String.raw`E = mc^2
F = ma
e^{i\pi} + 1 = 0`;

let renderTimer;
let renderedSvg = null;
let alignEquals = true;

function prepareLatex(source) {
  // Explicit LaTeX environments remain untouched for advanced users.
  if (/\\begin\s*\{/.test(source) || !source.includes('\n')) return source;

  const lines = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      // Align multiline formulas at the first equals sign by default.
      // An explicit alignment marker always takes precedence.
      if (line.includes('&')) return line;
      // With equals alignment disabled, use the start of every line as the
      // alignment point so multiline formulas are consistently left-aligned.
      if (!alignEquals) return `&${line}`;
      const equalsIndex = line.indexOf('=');
      return equalsIndex < 0
        ? line
        : `${line.slice(0, equalsIndex)}&${line.slice(equalsIndex)}`;
    });

  if (lines.length <= 1) return lines[0] || '';
  return String.raw`\begin{aligned}${lines.join(String.raw` \\ `)}\end{aligned}`;
}

function setDownloadState(enabled) {
  pngButton.disabled = !enabled;
  svgButton.disabled = !enabled;
}

async function renderMath() {
  clearTimeout(renderTimer);
  const source = input.value.trim();
  charCount.textContent = `${input.value.length}文字`;
  errorMessage.classList.remove('visible');
  if (!source) {
    preview.innerHTML = '<span class="loading-line" aria-label="LaTeXを入力するとここに表示されます"></span>';
    renderedSvg = null;
    setDownloadState(false);
    return;
  }

  stage.classList.add('is-updating');
  try {
    await window.MathJax.startup.promise;
    const node = await window.MathJax.tex2svgPromise(prepareLatex(source), { display: true });
    // MathJax may include a visual SVG and hidden assistive MathML in the same node.
    // Keep only one rendered container even if a browser exposes the assistive tree.
    node.querySelectorAll('mjx-assistive-mml').forEach((element) => {
      element.setAttribute('aria-hidden', 'true');
    });
    preview.replaceChildren(node);
    renderedSvg = preview.querySelector('svg');
    setDownloadState(Boolean(renderedSvg));
  } catch (error) {
    renderedSvg = null;
    setDownloadState(false);
    errorMessage.textContent = `LaTeXを確認してください：${String(error.message || error).replace(/^.*?: /, '')}`;
    errorMessage.classList.add('visible');
  } finally {
    stage.classList.remove('is-updating');
  }
}

function scheduleRender() {
  clearTimeout(renderTimer);
  stage.classList.add('is-updating');
  renderTimer = setTimeout(renderMath, 180);
}

function getExportSvg() {
  if (!renderedSvg) return null;
  const clone = renderedSvg.cloneNode(true);
  const viewBox = clone.getAttribute('viewBox')?.split(/\s+/).map(Number);
  if (!viewBox || viewBox.length !== 4) return null;
  const naturalWidth = Math.max(1, parseFloat(clone.getAttribute('width')) || viewBox[2] / 1000) * 16;
  const naturalHeight = Math.max(1, parseFloat(clone.getAttribute('height')) || viewBox[3] / 1000) * 16;
  const padding = 24;
  const paddingX = viewBox[2] * (padding / naturalWidth);
  const paddingY = viewBox[3] * (padding / naturalHeight);
  clone.setAttribute('viewBox', `${viewBox[0] - paddingX} ${viewBox[1] - paddingY} ${viewBox[2] + paddingX * 2} ${viewBox[3] + paddingY * 2}`);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.removeAttribute('style');
  clone.setAttribute('width', Math.ceil(naturalWidth + padding * 2));
  clone.setAttribute('height', Math.ceil(naturalHeight + padding * 2));
  if (!transparentToggle.checked) {
    const background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    background.setAttribute('x', viewBox[0] - paddingX);
    background.setAttribute('y', viewBox[1] - paddingY);
    background.setAttribute('width', viewBox[2] + paddingX * 2);
    background.setAttribute('height', viewBox[3] + paddingY * 2);
    background.setAttribute('fill', '#ffffff');
    clone.insertBefore(background, clone.firstChild);
  }
  return clone;
}

function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function saveSvg() {
  const svg = getExportSvg();
  if (!svg) return;
  const markup = new XMLSerializer().serializeToString(svg);
  download(new Blob([markup], { type: 'image/svg+xml;charset=utf-8' }), 'latex-formula.svg');
}

function savePng() {
  const svg = getExportSvg();
  if (!svg) return;
  const scale = Number(scaleSelect.value);
  const width = Number(svg.getAttribute('width'));
  const height = Number(svg.getAttribute('height'));
  const markup = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([markup], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(width * scale);
    canvas.height = Math.ceil(height * scale);
    const context = canvas.getContext('2d');
    context.scale(scale, scale);
    context.drawImage(image, 0, 0, width, height);
    URL.revokeObjectURL(url);
    canvas.toBlob((png) => png && download(png, 'latex-formula.png'), 'image/png');
  };
  image.onerror = () => {
    URL.revokeObjectURL(url);
    errorMessage.textContent = 'PNGの生成に失敗しました。SVGでの保存をお試しください。';
    errorMessage.classList.add('visible');
  };
  image.src = url;
}

input.addEventListener('input', scheduleRender);
sampleButton.addEventListener('click', () => { input.value = sample; renderMath(); input.focus(); });
alignButton.addEventListener('click', () => {
  alignEquals = !alignEquals;
  alignButton.setAttribute('aria-pressed', String(alignEquals));
  alignButtonLabel.textContent = alignEquals ? '＝揃え ON' : '＝揃え OFF';
  alignButton.title = alignEquals
    ? '等号揃えを解除する'
    : '複数行の数式を最初の等号で揃える';
  renderMath();
});
svgButton.addEventListener('click', saveSvg);
pngButton.addEventListener('click', savePng);
document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
    event.preventDefault();
    savePng();
  }
});

async function copyLatex(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const helper = document.createElement('textarea');
  helper.value = text;
  helper.setAttribute('readonly', '');
  helper.className = 'copy-helper';
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand('copy');
  helper.remove();
  if (!copied) throw new Error('Copy failed');
}

document.querySelector('.syntax-groups')?.addEventListener('click', async (event) => {
  const row = event.target.closest('[data-latex]');
  if (!row) return;
  const latex = row.dataset.latex;
  try {
    await copyLatex(latex);
    copyStatus.textContent = `コピーしました：${latex.replace(/\n/g, ' / ')}`;
  } catch {
    copyStatus.textContent = 'コピーできませんでした。コードを長押しして選択してください。';
  }
  clearTimeout(copyStatus.hideTimer);
  copyStatus.hideTimer = setTimeout(() => { copyStatus.textContent = ''; }, 2600);
});

window.addEventListener('load', renderMath, { once: true });
