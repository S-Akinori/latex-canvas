// Standard mathematical notation, grouped for lookup. Examples are executable TeX.
const referenceGroups = [];
function addGroup(name, entries) { referenceGroups.push({ name, entries }); }
function commands(names, suffix = '') {
  return names.split(' ').map(name => [name, '\\' + name + suffix]);
}
addGroup('計算・添字・空白', [
  ['加算', '+'], ['減算', '-'], ...commands('pm mp times ast div cdots'),
  ['分数', '\\frac{a}{b}'], ['指数', 'x^{n}'], ['添字', 'a_{k}'],
  ['上に注記', '\\stackrel{a}{\\sim}'], ['下に注記', '\\underset{b}{\\sim}'],
  ...commands('infty'), ['斜線', '/'], ...commands('backslash'), ['番号記号', '\\#'],
  ['空白', 'a\\ b'], ['改行しない空白', 'a~b'], ['1em空白', 'a\\quad b'],
  ['2em空白', 'a\\qquad b'], ['行を分ける（Enterでも可）', '\\begin{aligned}a\\\\b\\end{aligned}'],
  ['平方根', '\\sqrt{x}'], ['累乗根', '\\sqrt[n]{x}']
]);
addGroup('文字の書体', commands('mathnormal boldsymbol mathrm mathbf mathsf mathbb mathtt mathcal mathscr mathfrak', '{ABCxyz123}'));
addGroup('ギリシャ文字・文字記号', [
  ...commands('alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega'),
  ...commands('Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega'),
  ['ラテン字と同形の大文字', 'A B E Z H I K M N O P T X'],
  ...commands('varepsilon vartheta varpi varrho varsigma varphi aleph beth daleth gimel complement ell eth hbar hslash mho partial wp Re Im')
]);
addGroup('関数', [
  ...commands('max min sup inf lim limsup liminf gcd Pr exp log ln lg arg dim ker deg det hom sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot'),
  ['最小公倍数', '\\operatorname{lcm}(a,b)'],
  ['最大値を与える点', '\\operatorname*{arg\\,max}_{x\\in A}f(x)'],
  ['最小値を与える点', '\\operatorname*{arg\\,min}_{x\\in A}f(x)']
]);
addGroup('等号・大小・順序', [
  ['等しい', '='], ['大きい', '>'], ['小さい', '<'],
  ...commands('ne neq fallingdotseq sim simeq approx equiv ge geq geqq le leq leqq gg ll ggg lll succ prec succeq preceq succcurlyeq preccurlyeq triangleq'),
  ['合同の否定', '\\not\\equiv'], ['定義による等号', '\\stackrel{\\mathrm{def}}{=}']
]);
addGroup('集合', [
  ...commands('in ni notin subset supset subsetneq supsetneq subsetneqq supsetneqq subseteq supseteq subseteqq supseteqq nsubseteq nsupseteq nsubseteqq nsupseteqq cap cup emptyset varnothing'),
  ['包含の否定', '\\not\\subset'], ['逆包含の否定', '\\not\\supset'], ['所属の逆関係の否定', '\\not\\ni'],
  ...'NZQRC'.split('').map(letter => [letter + ' の数集合', '\\mathbb{' + letter + '}']),
  ['アレフの添字', '\\aleph_0'], ['ベスの添字', '\\beth_0']
]);
addGroup('論理・量化', [
  ...commands('neg lnot land wedge lor vee veebar cdot oplus parallel top bot forall exists nexists'),
  ['アンパサンド', '\\&'], ['唯一の存在', '\\exists!'], ['加法による論理和', '+']
]);
addGroup('矢印・写像', [
  ...commands('to rightarrow gets leftarrow leftrightarrow longrightarrow longleftarrow longleftrightarrow Rightarrow Leftarrow Leftrightarrow Longrightarrow implies Longleftarrow impliedby Longleftrightarrow iff mapsto longmapsto hookrightarrow hookleftarrow rightarrowtail leftarrowtail twoheadrightarrow twoheadleftarrow rightharpoonup leftharpoonup rightharpoondown leftharpoondown rightleftharpoons leftrightharpoons nrightarrow nleftarrow nleftrightarrow nRightarrow nLeftarrow nLeftrightarrow uparrow downarrow updownarrow Uparrow Downarrow Updownarrow'),
  ...commands('xrightarrow xleftarrow', '[b]{a}')
]);
addGroup('上線・アクセント', [
  ...commands('dot ddot overrightarrow overleftarrow overleftrightarrow overline underline widetilde widehat grave acute breve vec bar tilde hat check', '{x}'),
  ['微分の印', "x'"], ['プライム', 'x^{\\prime}'], ['逆プライム', 'x^{\\backprime}'],
  ['上側のまとめ', '\\overbrace{a+b+c}^{n}'], ['下側のまとめ', '\\underbrace{a+b+c}_{n}'],
  ['下側の波線', '\\underset{\\sim}{x}']
]);
addGroup('括弧・大きさ', [
  ['丸括弧', '(x)'], ['角括弧', '\\lbrack x\\rbrack'], ['波括弧', '\\lbrace x\\rbrace'],
  ['絶対値', '\\lvert x\\rvert'], ['ノルム', '\\lVert x\\rVert'],
  ['床', '\\lfloor x\\rfloor'], ['天井', '\\lceil x\\rceil'], ['山括弧', '\\langle x\\rangle'],
  ['上の角', '\\ulcorner x\\urcorner'], ['下の角', '\\llcorner x\\lrcorner'],
  ['自動サイズ', '\\left(\\frac{a}{b}\\right)'],
  ...['big', 'Big', 'bigg', 'Bigg'].map(size => [size, '\\' + size + 'l( x \\' + size + 'r)'])
]);
addGroup('行列・場合分け', [
  ...['matrix', 'pmatrix', 'vmatrix', 'bmatrix', 'Bmatrix', 'Vmatrix', 'smallmatrix'].map(env => [env, '\\begin{' + env + '}\na & b \\\\\nc & d\n\\end{' + env + '}']),
  ['場合分け', '\\begin{cases}x & x\\geq0\\\\-x & x<0\\end{cases}']
]);
addGroup('総和・積・積分', [
  ...commands('sum prod coprod bigcap bigcup bigsqcup bigwedge bigvee', '_{k=1}^{n} A_k'),
  ['定積分', '\\int_0^1 f(x)\\,dx'], ['面上の積分', '\\iint_S f(x,y)\\,dx\\,dy'],
  ['体積積分', '\\iiint_V f(x,y,z)\\,dx\\,dy\\,dz'], ['閉曲線', '\\oint_C f(z)\\,dz'],
  ...commands('bigodot bigotimes bigoplus biguplus')
]);
addGroup('表示スタイル', commands('displaystyle textstyle scriptstyle scriptscriptstyle', ' \\sum_{k=1}^n k=\\frac{n(n+1)}{2}'));
addGroup('色・背景', [
  ['全体の色', '\\color{red}{a+b}'], ['一部分の色', 'a+\\textcolor{red}{b}'],
  ['背景', '\\colorbox{cyan}{ABC}'], ['枠と背景', '\\fcolorbox{red}{cyan}{ABC}'],
  ['16進数', '\\color[HTML]{E56845}{ABC}'],
  ...'red green blue magenta cyan yellow purple orange pink teal olive brown black gray darkgray lightgray white'.split(' ').map(color => [color, '\\color{' + color + '}{ABC}'])
]);

const referenceRoot = document.querySelector('.syntax-groups');
referenceGroups.unshift(...physicsGroups);
referenceRoot.replaceChildren();
referenceRoot.classList.add('reference-groups');
document.querySelector('.cheatsheet-content').classList.add('reference-content');
document.querySelector('.cheatsheet-intro > p:not(.eyebrow)').textContent = 'カテゴリを開くと、コマンドと描画結果を比較できます。コードを押すとコピーできます。';
const referenceSource = document.createElement('a');
referenceSource.href = 'https://www.folklore.place/webtools/latex/previewer/';
referenceSource.textContent = '参考：Folklore の LaTeX チートシート';
document.querySelector('.cheatsheet-intro').append(referenceSource);
const physicsNote = document.createElement('p');
physicsNote.textContent = '高校物理：物理基礎・物理の主要公式と頻出の派生式を収録。発展事項は注記しています。記号は各式の注記に従い、SI単位を基本とします。すべての問題の変形式を列挙したものではありません。';
document.querySelector('.cheatsheet-intro').append(physicsNote);
for (const [title, url] of [
  ['物理の参考：高校物理をあきらめる前に', 'https://www.yukimura-physics.com/fomula'],
  ['物理の参考：わかりやすい高校物理の部屋', 'https://wakariyasui.sakura.ne.jp/a/kousiki.html']
]) {
  const link = document.createElement('a');
  link.href = url;
  link.textContent = title;
  link.style.display = 'block';
  document.querySelector('.cheatsheet-intro').append(link);
}

for (const group of referenceGroups) {
  const details = document.createElement('details');
  details.className = 'reference-category';
  const summary = document.createElement('summary');
  summary.textContent = `${group.name} · ${group.entries.length}`;
  const table = document.createElement('table');
  const head = table.createTHead().insertRow();
  for (const label of ['名前・コマンド（クリックでコピー）', '描画結果']) {
    const th = document.createElement('th');
    th.scope = 'col';
    th.textContent = label;
    head.append(th);
  }
  const body = table.createTBody();
  for (const [name, tex, note] of group.entries) {
    const row = body.insertRow();
    const cell = row.insertCell();
    const label = document.createElement('span');
    label.textContent = name;
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.latex = tex;
    button.setAttribute('aria-label', name + 'をコピー');
    const code = document.createElement('code');
    code.textContent = tex;
    button.append(code);
    cell.append(label, button);
    if (note) {
      const condition = document.createElement('p');
      condition.className = 'formula-condition';
      condition.textContent = note;
      cell.append(condition);
    }
    const result = row.insertCell();
    result.className = 'reference-math';
    result.dataset.previewTex = tex;
    result.textContent = '読み込み待ち';
  }
  details.append(summary, table);
  let rendered = false;
  details.addEventListener('toggle', async () => {
    if (!details.open || rendered) return;
    rendered = true;
    for (const cell of details.querySelectorAll('[data-preview-tex]')) {
      try {
        await window.MathJax.startup.promise;
        const node = await window.MathJax.tex2svgPromise(cell.dataset.previewTex, { display: true });
        if (node.querySelector('[data-mml-node="merror"]')) throw new Error('Unsupported command');
        cell.replaceChildren(node);
      } catch {
        cell.textContent = 'この環境では描画できません';
        rendered = false;
      }
    }
  });
  referenceRoot.append(details);
}
