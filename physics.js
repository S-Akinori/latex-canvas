// Original examples of standard high-school physics relations.
// Format: name | TeX | applicability and symbol notes.
const physicsGroups = [];
function physics(name, text) {
  physicsGroups.push({ name: '高校物理 / ' + name, entries: text.trim().split('\n').map(line => line.split(' | ')) });
}
physics('運動と力', String.raw`
平均速度 | \bar{v}=\frac{\Delta x}{\Delta t} | Δxは変位、Δtは時間間隔。
平均加速度 | \bar{a}=\frac{\Delta v}{\Delta t} | Δvは速度の変化。
相対速度 | \vec{v}_{B/A}=\vec{v}_B-\vec{v}_A | Aから見たBの速度。
等速直線運動 | x=x_0+vt | vが一定。
等加速度の速度 | v=v_0+at | aが一定。
等加速度の位置 | x=x_0+v_0t+\frac{1}{2}at^2 | aが一定。
時間を消去した関係 | v^2-v_0^2=2a(x-x_0) | aが一定。
自由落下 | v=gt,\quad y=\frac{1}{2}gt^2 | 静かに放す。下向き正、抵抗なし。
鉛直投げ上げ | v=v_0-gt,\quad y=v_0t-\frac{1}{2}gt^2 | 上向き正、出発点を原点。抵抗なし。
水平投射 | x=v_0t,\quad y=\frac{1}{2}gt^2 | 下向き正、出発点を原点。抵抗なし。
斜方投射の位置 | x=v_0\cos\theta\,t,\quad y=v_0\sin\theta\,t-\frac{1}{2}gt^2 | 上向き正、θは水平との角。抵抗なし。
斜方投射の速度 | v_x=v_0\cos\theta,\quad v_y=v_0\sin\theta-gt | 重力一定、抵抗なし。
投射の最高点 | H=\frac{v_0^2\sin^2\theta}{2g} | 出発点からの高さ。
投射の飛行時間・飛距離 | t_f=\frac{2v_0\sin\theta}{g},\quad R=\frac{v_0^2\sin2\theta}{g} | 着地点と出発点の高さが同じ、抵抗なし。
運動方程式 | m\vec{a}=\sum_i\vec{F}_i | 慣性系、質量一定。右辺は合力。
作用と反作用 | \vec{F}_{A\to B}=-\vec{F}_{B\to A} | 異なる物体に働く一対の力。
重力 | F_g=mg | 地表付近でgを一定とみなす。
ばねの復元力 | F=-kx | 自然長からの変位x、弾性限界内。
直列ばね | \frac{1}{k}=\frac{1}{k_1}+\frac{1}{k_2} | ばねの質量を無視。
並列ばね | k=k_1+k_2 | 2本の伸びが等しい。
静止摩擦 | 0\leq f_s\leq\mu_s N | 最大値だけがμs N。Nは垂直抗力。
動摩擦 | f_k=\mu_k N | 滑っている面、向きは相対運動と逆。
斜面上の重力成分 | F_{\parallel}=mg\sin\theta,\quad F_{\perp}=mg\cos\theta | θは斜面と水平の角。
摩擦角 | \tan\theta_c=\mu_s | 重力と面からの力のみ。滑り始める角。
圧力 | p=\frac{F_{\perp}}{S} | 面積Sに垂直に働く力。
静水圧 | p=p_0+\rho gh | 密度一定の静止流体。hは深さ。
浮力 | F_B=\rho V_{\mathrm{displaced}}g | ρは流体密度、Vは排除した体積。
力のモーメント | \tau=rF\sin\theta=Fl | lは支点から作用線までの距離。
剛体のつり合い | \sum_i\vec{F}_i=\vec{0},\quad\sum_i\tau_i=0 | 回転方向の符号を統一。
重心 | x_G=\frac{\sum_i m_ix_i}{\sum_i m_i} | y、z成分も同様。
慣性力 | \vec{F}_{\mathrm{in}}=-m\vec{a}_0 | 加速度a0で並進する座標系。
終端速度 | v_{\mathrm{t}}=\frac{mg}{b} | 下向き落下、抵抗bv、浮力無視。
`);
physics('エネルギー・衝突', String.raw`
一定の力の仕事 | W=Fs\cos\theta | θは力と変位の角。
平均仕事率 | P=\frac{W}{\Delta t} | 単位W（ワット）。
瞬間の仕事率 | P=\vec{F}\cdot\vec{v} | 力と速度の内積。
運動エネルギー | K=\frac{1}{2}mv^2 | 光速に比べ十分遅い運動。
仕事と運動エネルギー | K_2-K_1=W_{\mathrm{net}} | Wnetは合力がした仕事。
重力の位置エネルギー | U=mgh | 地表付近。基準面でU=0。
ばねの位置エネルギー | U=\frac{1}{2}kx^2 | 自然長でU=0。
力学的エネルギー保存 | K_1+U_1=K_2+U_2 | 保存力以外がする仕事が0。
非保存力の仕事 | (K_2+U_2)-(K_1+U_1)=W_{\mathrm{nc}} | 摩擦などの仕事を右辺に置く。
運動量 | \vec{p}=m\vec{v} | ベクトル量。
力積 | \vec{J}=\vec{F}_{\mathrm{avg}}\Delta t=\Delta\vec{p} | 平均合力を用いる。
運動量保存 | m_1\vec{u}_1+m_2\vec{u}_2=m_1\vec{v}_1+m_2\vec{v}_2 | 衝突中の外力の力積を無視。
反発係数 | e=-\frac{v_2-v_1}{u_2-u_1} | 衝突方向の速度成分。uは衝突前、vは後。
完全非弾性衝突 | v=\frac{m_1u_1+m_2u_2}{m_1+m_2} | 衝突後一体化。外力の力積なし。
弾性衝突のエネルギー | \frac{m_1u_1^2}{2}+\frac{m_2u_2^2}{2}=\frac{m_1v_1^2}{2}+\frac{m_2v_2^2}{2} | e=1。
衝突で失う運動エネルギー | \Delta K_{\mathrm{loss}}=\frac{m_1m_2}{2(m_1+m_2)}(1-e^2)(u_1-u_2)^2 | 一次元の孤立した2物体。
`);
physics('円運動・振動・万有引力', String.raw`
角速度と周期 | \omega=\frac{2\pi}{T}=2\pi f | 等速円運動。角度はラジアン。
円運動の速さ | v=r\omega | rは半径。
向心加速度 | a=\frac{v^2}{r}=r\omega^2 | 向きは円の中心。
向心力 | F=\frac{mv^2}{r}=mr\omega^2 | 中心向きの合力。
遠心力 | F_{\mathrm{cf}}=mr\omega^2 | 一緒に回転する系で外向き。
単振動の変位 | x=A\sin(\omega t+\phi) | 平衡位置を原点。
単振動の速度 | v=A\omega\cos(\omega t+\phi) | Aは振幅、φは初期位相。
単振動の加速度 | a=-\omega^2x | 復元力が変位に比例。
ばね振り子の周期 | T=2\pi\sqrt{\frac{m}{k}} | ばねの質量・抵抗無視。
単振り子の周期 | T=2\pi\sqrt{\frac{l}{g}} | 小振幅、糸の質量・抵抗無視。
単振動のエネルギー | E=\frac{1}{2}m\omega^2A^2 | 減衰なし、平衡位置基準。
単振動の位置と速さ | v^2=\omega^2(A^2-x^2) | 減衰なし。
万有引力 | F=G\frac{Mm}{r^2} | 質点または球対称天体の外側。
重力加速度 | g=\frac{GM}{r^2} | 天体中心から距離r。
重力の位置エネルギー（宇宙） | U=-\frac{GMm}{r} | 無限遠でU=0。
円軌道の速さ | v=\sqrt{\frac{GM}{r}} | 中心天体の質量が十分大きい。
円軌道の周期 | T=2\pi\sqrt{\frac{r^3}{GM}} | 円軌道。
ケプラー第2法則 | \frac{\Delta S}{\Delta t}=\mathrm{const.} | 中心力による軌道。面積速度一定。
ケプラー第3法則 | \frac{T^2}{a^3}=\frac{4\pi^2}{GM} | aは楕円の長半径、中心天体が十分重い。
脱出速度 | v_{\mathrm{esc}}=\sqrt{\frac{2GM}{r}} | 抵抗なし、無限遠で速さ0。
円軌道の全エネルギー | E=-\frac{GMm}{2r} | 無限遠を位置エネルギーの基準にする。
`);
physics('熱・理想気体', String.raw`
絶対温度 | T=\theta+273.15 | TはK、θは摂氏温度の数値。
熱量と比熱 | Q=mc\Delta T=C\Delta T | 相変化なし。C=mc、吸熱を正。
潜熱 | Q=mL | Lは単位質量当たりの融解熱・蒸発熱。
熱収支 | \sum_i Q_i=0 | 断熱された全体系。
線膨張 | l=l_0(1+\alpha\Delta T) | 温度範囲でα一定の近似。
体積膨張 | V=V_0(1+\beta\Delta T),\quad\beta\simeq3\alpha | 等方的固体、小さな膨張。
状態方程式 | pV=nRT | 理想気体、Tは絶対温度。
粒子数による状態方程式 | pV=Nk_{\mathrm B}T | Nは分子数。
物質量・粒子数 | N=nN_{\mathrm A},\quad k_{\mathrm B}=\frac{R}{N_{\mathrm A}} | NAはアボガドロ定数。
ボイル・シャルル | \frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2} | 気体の物質量一定。
分子運動論の圧力 | p=\frac{Nm\overline{v^2}}{3V} | mは1分子の質量、等方的運動。
分子の平均並進エネルギー | \frac{1}{2}m\overline{v^2}=\frac{3}{2}k_{\mathrm B}T | 理想気体の並進運動。
二乗平均平方根速度 | v_{\mathrm{rms}}=\sqrt{\frac{3k_{\mathrm B}T}{m}}=\sqrt{\frac{3RT}{M}} | Mはkg/mol単位のモル質量。
単原子理想気体の内部エネルギー | U=\frac{3}{2}nRT | 単原子、電子励起を無視。
内部エネルギー変化 | \Delta U=nC_V\Delta T | 理想気体、CV一定。
熱力学第1法則 | \Delta U=Q-W | Qは吸熱、Wは気体が外部にする仕事。
定圧の仕事 | W=p(V_2-V_1) | 準静的、圧力一定。膨張で正。
定積変化 | W=0,\quad Q=nC_V\Delta T | 容積一定。
定圧変化 | Q=nC_P\Delta T | 理想気体。
マイヤーの関係 | C_P-C_V=R | 理想気体のモル比熱。
単原子のモル比熱 | C_V=\frac{3}{2}R,\quad C_P=\frac{5}{2}R | 単原子理想気体。
等温変化 | \Delta U=0,\quad Q=W | 理想気体、温度一定。
断熱変化 | Q=0,\quad\Delta U=-W | 外部との熱交換なし。
ポアソンの関係 | pV^\gamma=\mathrm{const.},\quad TV^{\gamma-1}=\mathrm{const.} | 発展：準静的断熱、理想気体、γ=CP/CV一定。
熱機関の効率 | \eta=\frac{W}{Q_H}=1-\frac{Q_C}{Q_H} | QHは吸熱量、QCは放熱量の正の大きさ。
カルノー効率 | \eta_{\mathrm C}=1-\frac{T_C}{T_H} | 発展：可逆熱機関、温度はK。
`);
physics('波・音', String.raw`
波の基本式 | v=f\lambda,\quad f=\frac{1}{T} | vは伝わる速さ。
正弦進行波 | y=A\sin\left(2\pi\frac{t}{T}-2\pi\frac{x}{\lambda}+\phi\right) | xの正方向へ進行。
角振動数・波数 | \omega=2\pi f,\quad k=\frac{2\pi}{\lambda} | 波数kとばね定数kを区別。
重ね合わせ | y=y_1+y_2 | 線形な波。
定常波 | y=2A\sin(kx)\cos(\omega t) | 同振幅・同振動数の逆向きの波の一例。
定常波の節・腹間隔 | d_{\mathrm{node}}=\frac{\lambda}{2},\quad d_{\mathrm{node,antinode}}=\frac{\lambda}{4} | 隣接する節同士、隣接する節と腹。
同位相波の強め合い | \Delta l=m\lambda | mは整数、波源が同位相。
同位相波の弱め合い | \Delta l=\left(m+\frac{1}{2}\right)\lambda | 波源が同位相、等振幅で完全に打ち消す。
弦の波速 | v=\sqrt{\frac{F_T}{\mu}} | FTは張力、μは線密度（kg/m）。
弦の固有振動 | f_n=\frac{nv}{2L},\quad\lambda_n=\frac{2L}{n} | 両端固定、n=1,2,…。
開管の固有振動 | f_n=\frac{nv}{2L_{\mathrm{eff}}} | 両端開放、開口端補正込みの長さ。
閉管の固有振動 | f_n=\frac{(2n-1)v}{4L_{\mathrm{eff}}} | 一端閉鎖、n=1,2,…、開口端補正込み。
うなり | f_{\mathrm b}=|f_1-f_2| | 近い振動数の音。
ドップラー効果 | f'=\frac{v-v_o}{v-v_s}f | 媒質静止系、音源→観測者を正。両速度はその方向成分。
空気中の音速 | v\simeq331.5+0.6\theta | vはm/s、θは℃。常温付近の近似。
反射の法則 | \theta_i=\theta_r | 角度は境界面の法線から測る。
`);
physics('光・干渉', String.raw`
屈折率 | n=\frac{c}{v} | cは真空光速。
スネルの法則 | n_1\sin\theta_1=n_2\sin\theta_2 | 各角度は法線から。
臨界角 | \sin\theta_c=\frac{n_2}{n_1} | n1>n2、媒質1から2へ。
光路長 | L_{\mathrm{opt}}=nl | 一様な屈折率、lは幾何学的距離。
薄いレンズ | \frac{1}{a}+\frac{1}{b}=\frac{1}{f} | 実物体a>0、実像b>0・虚像b<0、凸f>0・凹f<0。
像の倍率 | M=\left|\frac{b}{a}\right| | 高さの比の絶対値。
球面鏡 | \frac{1}{a}+\frac{1}{b}=\frac{1}{f},\quad f=\frac{R}{2} | 近軸。鏡の前の実像b>0、凹面鏡f,R>0。
ヤングの明線 | x_m=\frac{m\lambda L}{d} | 小角、L≫d。dはスリット間隔。
ヤングの暗線 | x_m=\frac{(m+1/2)\lambda L}{d} | mは整数、同位相の2スリット。
干渉縞の間隔 | \Delta x=\frac{\lambda L}{d} | ヤング実験の小角近似。
回折格子の主極大 | d\sin\theta=m\lambda | 垂直入射、dは格子間隔。
単スリットの暗線 | a\sin\theta=m\lambda | m=±1,±2,…、aはスリット幅。
薄膜反射の明線 | 2nd\cos r=(m+1/2)\lambda | 反射による位相反転が片側だけ。λは真空波長。
薄膜反射の暗線 | 2nd\cos r=m\lambda | 位相反転が片側だけ。両側同条件なら明暗逆。
くさび形空気層の暗線 | 2x\tan\theta=m\lambda | 反射光、垂直入射近似、空気層。
ニュートンリングの暗環 | r_m^2=m\lambda R | 反射光、空気層、中心で接触、Rはレンズ曲率半径。
`);
physics('静電気・コンデンサー', String.raw`
クーロン力 | F=\frac{1}{4\pi\varepsilon_0}\frac{|q_1q_2|}{r^2} | 真空中の点電荷、力の大きさ。
電場の力 | \vec{F}=q\vec{E} | qの符号で向きが変わる。
点電荷の電場 | E=\frac{|Q|}{4\pi\varepsilon_0r^2} | 大きさ。Q>0で外向き。
電場の重ね合わせ | \vec{E}=\sum_i\vec{E}_i | ベクトル和。
点電荷の電位 | V=\frac{Q}{4\pi\varepsilon_0r} | 無限遠を0、符号を含む。
電位と位置エネルギー | U=qV | Vは他の電荷が作る電位。
静電気力の仕事 | W=q(V_A-V_B) | AからBへ移動。
一様な電場 | E=\frac{|\Delta V|}{d} | dは電場方向の距離。
ガウスの法則 | \oint\vec{E}\cdot d\vec{S}=\frac{Q_{\mathrm{in}}}{\varepsilon_0} | 発展：閉曲面、真空、内包する正味電荷。
電気容量 | Q=CV | Q,Vは極板間の大きさ。
平行板コンデンサー | C=\frac{\varepsilon S}{d} | 端効果無視、誘電体が隙間を満たす。
比誘電率 | \varepsilon=\varepsilon_r\varepsilon_0 | εrは無次元。
容量の並列合成 | C=C_1+C_2 | 電圧が共通。
容量の直列合成 | \frac{1}{C}=\frac{1}{C_1}+\frac{1}{C_2} | 中間導体の正味電荷が0。
コンデンサーのエネルギー | U=\frac{1}{2}CV^2=\frac{Q^2}{2C}=\frac{1}{2}QV | 線形なコンデンサー。
`);
physics('直流回路', String.raw`
電流 | I=\frac{\Delta Q}{\Delta t} | 単位時間に通過する電気量。
電子の移動と電流 | I=neSv_d | nは電子数密度、Sは断面積、vdはドリフト速さ。
オームの法則 | V=RI | 温度一定のオーム抵抗。
抵抗率 | R=\rho\frac{l}{S} | 一様な導線。
抵抗の温度依存 | R=R_0[1+\alpha(T-T_0)] | 温度係数α一定の範囲。
直列抵抗 | R=R_1+R_2 | 同じ電流。
並列抵抗 | \frac{1}{R}=\frac{1}{R_1}+\frac{1}{R_2} | 同じ電圧。
ジュール熱 | Q=I^2Rt=VIt=\frac{V^2}{R}t | 一定の電流・抵抗。
電力 | P=VI=I^2R=\frac{V^2}{R} | 後2つはオーム抵抗。
電力量 | W=Pt | P一定。
電池の端子電圧 | V=\mathcal{E}-Ir | 放電時。rは内部抵抗。
内部抵抗を含む回路 | I=\frac{\mathcal{E}}{R+r} | 単一電池と負荷。
キルヒホッフの電流則 | \sum I_{\mathrm{in}}=\sum I_{\mathrm{out}} | 接続点に電荷が蓄積しない。
キルヒホッフの電圧則 | \sum\mathcal{E}-\sum RI=0 | 閉回路をたどる向きで符号を付ける。
ホイートストンブリッジ | \frac{R_1}{R_2}=\frac{R_3}{R_4} | 左枝を上R1・下R2、右枝を上R3・下R4とする平衡条件。
`);
physics('磁場・電磁誘導・交流', String.raw`
磁束密度と磁場 | B=\mu H | 線形媒質の透磁率μ。
直線電流の磁場 | B=\frac{\mu I}{2\pi r} | 十分長い直線導線。
円電流の中心磁場 | B=\frac{\mu NI}{2r} | N巻、半径r。
ソレノイドの磁場 | B=\mu nI | 十分長いコイル内部、nは単位長さ当たり巻数。
電流が受ける磁力 | F=BIl\sin\theta | 一様磁場、θは導線と磁場の角。
平行電流間の力 | \frac{F}{l}=\frac{\mu I_1I_2}{2\pi d} | 長い導線。同方向なら引力。
ローレンツ力 | F=|q|vB\sin\theta | 磁力の大きさ、速度に垂直。
荷電粒子の円軌道 | r=\frac{mv}{|q|B} | vとBが垂直、非相対論的。
荷電粒子の旋回周期 | T=\frac{2\pi m}{|q|B} | 一様磁場、非相対論的。
速度選別 | v=\frac{E}{B} | 電気力と磁力が逆向きでつり合う。
磁束 | \Phi=BS\cos\theta | θは面の法線とBの角。
電磁誘導 | \mathcal{E}=-N\frac{\Delta\Phi}{\Delta t} | Δでは平均起電力。磁束の向きと周回方向を対応させる。
動く導体の起電力 | |\mathcal{E}|=Blv | B・導体・速度が互いに垂直。
回転コイルの交流 | \mathcal{E}=NBS\omega\sin\omega t | t=0で面の法線がB方向。
自己誘導 | \mathcal{E}_L=-L\frac{\Delta I}{\Delta t} | Δでは平均値、L一定。
相互誘導 | \mathcal{E}_2=-M\frac{\Delta I_1}{\Delta t} | 巻き方向・磁束の基準をそろえる。
ソレノイドのインダクタンス | L=\frac{\mu N^2S}{l} | 長いコイル、漏れ磁束を無視。
コイルのエネルギー | U=\frac{1}{2}LI^2 | L一定。
理想変圧器 | \frac{V_2}{V_1}=\frac{N_2}{N_1},\quad V_1I_1=V_2I_2 | 損失なし、抵抗負荷、実効値。
交流の実効値 | V_{\mathrm{rms}}=\frac{V_0}{\sqrt{2}},\quad I_{\mathrm{rms}}=\frac{I_0}{\sqrt{2}} | 正弦波。0添字は最大値。
誘導リアクタンス | X_L=\omega L | 理想コイル。
容量リアクタンス | X_C=\frac{1}{\omega C} | 理想コンデンサー。
RLC直列のインピーダンス | Z=\sqrt{R^2+\left(\omega L-\frac{1}{\omega C}\right)^2} | 正弦波定常状態。
交流のオーム則 | I_{\mathrm{rms}}=\frac{V_{\mathrm{rms}}}{Z} | 最大値同士でも成立。
交流の平均電力 | \bar{P}=V_{\mathrm{rms}}I_{\mathrm{rms}}\cos\phi | φは電圧と電流の位相差。
RLC直列の力率 | \cos\phi=\frac{R}{Z} | 消費は抵抗のみ。
共振周波数 | f_0=\frac{1}{2\pi\sqrt{LC}} | RLC直列共振・理想LC振動。
LCのエネルギー保存 | \frac{Q^2}{2C}+\frac{LI^2}{2}=\mathrm{const.} | 抵抗なし。
`);
physics('原子・放射線・原子核', String.raw`
光子のエネルギー | E=h\nu=\frac{hc}{\lambda} | λは真空中の波長。
光子の運動量 | p=\frac{h}{\lambda}=\frac{E}{c} | 真空。
光電効果 | K_{\max}=h\nu-W_0 | W0は仕事関数。右辺が負なら放出なし。
限界振動数 | \nu_0=\frac{W_0}{h} | 光電効果のしきい値。
阻止電圧 | eV_s=K_{\max} | eは電気素量、Vsは大きさ。
X線の最短波長 | \lambda_{\min}=\frac{hc}{eV} | 電子を電圧Vで加速。
ブラッグ反射 | 2d\sin\theta=n\lambda | θは結晶面との角、nは正の整数。
コンプトン散乱 | \lambda'-\lambda=\frac{h}{m_ec}(1-\cos\theta) | 発展：静止した自由電子、θは光子の散乱角。
ド・ブロイ波長 | \lambda=\frac{h}{p} | 非相対論的ならp=mv。
加速電子の波長 | \lambda=\frac{h}{\sqrt{2m_e eV}} | 静止から加速、非相対論的。
ボーアの量子条件 | m_evr=n\frac{h}{2\pi} | 水素原子モデル、n=1,2,…。
水素の軌道半径 | r_n=a_0n^2 | a0はボーア半径。
水素のエネルギー準位 | E_n=-\frac{13.6}{n^2}\,\mathrm{eV} | 無限遠の電子をエネルギー0。
遷移する光子 | h\nu=E_i-E_f | 放出時Ei>Ef。
リュードベリの式 | \frac{1}{\lambda}=R_H\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right) | 水素の放出、ni>nf。
半減期 | N=N_0\left(\frac{1}{2}\right)^{t/T_{1/2}} | 崩壊せず残る親核の数。
崩壊定数 | \lambda_d=\frac{\ln2}{T_{1/2}},\quad N=N_0e^{-\lambda_dt} | λdは波長と区別。
放射能 | A=\lambda_dN | 単位Bq、1秒当たり崩壊数。
質量エネルギー | E=mc^2 | 静止エネルギー。
質量欠損 | \Delta m=Zm_p+(A-Z)m_n-m_{\mathrm{nucleus}} | 原子核質量を使う。Aは質量数。
結合エネルギー | B=\Delta mc^2 | Δmは構成核子と原子核の質量差。
核反応のエネルギー | Q=(m_{\mathrm{before}}-m_{\mathrm{after}})c^2 | 質量の定義を統一。Q>0で放出。
α崩壊 | {}^A_ZX\to{}^{A-4}_{Z-2}Y+{}^4_2\mathrm{He} | 質量数4・原子番号2減少。
βマイナス崩壊 | {}^A_ZX\to{}^A_{Z+1}Y+e^-+\bar{\nu}_e | 電子と反電子ニュートリノを放出。
γ遷移 | {}^A_ZX^*\to{}^A_ZX+\gamma | 質量数・原子番号は変化しない。
電子ボルト | 1\,\mathrm{eV}=1.602176634\times10^{-19}\,\mathrm{J} | エネルギーの単位換算。
吸収線量 | D=\frac{E_{\mathrm{absorbed}}}{m} | 単位Gy=J/kg。
`);
