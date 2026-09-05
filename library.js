const storageKey = 'latexcanvas.formulas.v1';
const nameField = document.querySelector('#formulaName');
const savedSelect = document.querySelector('#savedFormula');
const libraryStatus = document.querySelector('#libraryStatus');
const loadButton = document.querySelector('#loadFormula');
const undoButton = document.querySelector('#undoLoad');
let beforeLoad = null;
function readLibrary() {
  const records = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (!Array.isArray(records) || records.some(r => !r || typeof r.id !== 'string' || typeof r.name !== 'string' || typeof r.tex !== 'string')) throw new Error('Invalid storage');
  return records;
}
function refreshLibrary(records, selected = '') {
  savedSelect.replaceChildren(new Option(records.length ? '数式を選択してください' : '保存した数式はありません', ''));
  for (const record of records) savedSelect.add(new Option(record.name, record.id));
  savedSelect.value = selected;
  loadButton.disabled = !savedSelect.value;
}
function captureFormula() {
  return {
    tex: input.value,
    align: alignEquals,
    transparent: transparentToggle.checked,
    scale: scaleSelect.value,
    name: nameField.value,
    selectionStart: input.selectionStart,
    selectionEnd: input.selectionEnd
  };
}
function restoreFormula(record) {
  input.value = record.tex;
  nameField.value = record.name;
  alignEquals = record.align !== false;
  alignButton.setAttribute('aria-pressed', String(alignEquals));
  alignButtonLabel.textContent = alignEquals ? '＝揃え ON' : '＝揃え OFF';
  alignButton.title = alignEquals ? '等号揃えを解除する' : '複数行の数式を最初の等号で揃える';
  transparentToggle.checked = record.transparent === true;
  scaleSelect.value = ['2', '3', '4'].includes(record.scale) ? record.scale : '3';
  renderMath();
  const start = Number.isInteger(record.selectionStart) ? record.selectionStart : input.value.length;
  const end = Number.isInteger(record.selectionEnd) ? record.selectionEnd : start;
  input.focus();
  input.setSelectionRange(start, end);
}
function insertFormula(record) {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? start;
  input.setRangeText(record.tex, start, end, 'end');
  nameField.value = record.name;
  input.focus();
  renderMath();
}
try { refreshLibrary(readLibrary()); } catch { libraryStatus.textContent = '保存データを読み込めません。ブラウザの保存設定を確認してください。'; }
savedSelect.addEventListener('change', () => { loadButton.disabled = !savedSelect.value; });
document.querySelector('#saveFormula').addEventListener('click', () => {
  if (!input.value.trim()) { libraryStatus.textContent = '保存する数式を入力してください。'; return; }
  if (!nameField.value.trim()) { libraryStatus.textContent = '数式の名前を入力してください。'; nameField.focus(); return; }
  try {
    const records = readLibrary();
    const record = { ...captureFormula(), name: nameField.value.trim(), id: Date.now().toString(36) + Math.random().toString(36).slice(2) };
    records.unshift(record);
    localStorage.setItem(storageKey, JSON.stringify(records));
    refreshLibrary(records, record.id);
    libraryStatus.textContent = '「' + record.name + '」を保存しました。';
  } catch { libraryStatus.textContent = '保存できませんでした。保存容量やブラウザの設定を確認してください。'; }
});
loadButton.addEventListener('click', () => {
  try {
    const record = readLibrary().find(r => r.id === savedSelect.value);
    if (!record) { libraryStatus.textContent = '数式が見つかりません。ページを更新してください。'; return; }
    beforeLoad = captureFormula();
    insertFormula(record);
    undoButton.hidden = false;
    libraryStatus.textContent = '「' + record.name + '」をカーソル位置に挿入しました。';
  } catch { libraryStatus.textContent = '保存データを読み込めませんでした。'; }
});
undoButton.addEventListener('click', () => {
  if (!beforeLoad) return;
  restoreFormula(beforeLoad);
  beforeLoad = null;
  undoButton.hidden = true;
  libraryStatus.textContent = '挿入前の入力に戻しました。';
});
