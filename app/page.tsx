import {
  ArrowDown,
  ArrowRight,
  Award,
  CalendarCheck2,
  Check,
  Clock3,
  Dumbbell,
  HeartHandshake,
  MapPin,
  MessageCircle,
  MoveRight,
  Star,
  Target,
  UsersRound,
} from 'lucide-react';
import { MotionEffects } from './motion-effects';

const lineUrl = 'https://lin.ee/QpY2NyTa';

const personalPrices = [
  ['月2回', '25,000円', '1回あたり 12,500円'],
  ['月4回', '40,000円', '1回あたり 10,000円'],
  ['月6回', '57,000円', '1回あたり 9,500円'],
  ['月8回', '72,000円', '1回あたり 9,000円'],
];

const circuitPrices = [
  ['月2回', '10,500円', '1回あたり 5,250円'],
  ['月4回', '19,000円', '1回あたり 4,750円'],
  ['月6回', '25,500円', '1回あたり 4,250円'],
  ['月8回', '30,000円', '1回あたり 3,750円'],
];

function SectionHeading({
  label,
  title,
  lead,
}: {
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <div className="section-heading" data-reveal>
      <p>{label}</p>
      <h2>{title}</h2>
      {lead && <div className="section-lead">{lead}</div>}
    </div>
  );
}

function ImagePlaceholder({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="content-placeholder" role="img" aria-label={`${label}の画像配置予定エリア`}>
      <span>PHOTO</span>
      <strong>{label}</strong>
      <small>{detail}</small>
    </div>
  );
}

function LineButton({ sub = '質問だけでもOK' }: { sub?: string }) {
  return (
    <a className="line-button" href={lineUrl} target="_blank" rel="noreferrer">
      <MessageCircle aria-hidden="true" />
      <span>
        LINEで体験を相談する
        <small>{sub}</small>
      </span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Leven トップへ">
          <span>FITNESS GYM</span>
          <strong>Leven</strong>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#courses">コース</a>
          <a href="#reason">選ばれる理由</a>
          <a href="#price">料金</a>
          <a href="#access">アクセス</a>
        </nav>
        <a className="header-cta" href={lineUrl} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" />
          LINEで相談
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PERSONAL TRAINING × BODY CARE</p>
          <h1>
            <span>ひとりでは続かなかった私に、</span>
            <em>変われる場所</em>ができた。
          </h1>
          <p className="hero-lead">
            整体×パーソナルと、仲間と励む少人数サーキット。
            <br />
            今の身体と性格に合う方法で、無理なく「続く」をつくります。
          </p>
          <ul className="hero-points" aria-label="Levenの特徴">
            <li><Check aria-hidden="true" />渋谷駅 徒歩3分</li>
            <li><Check aria-hidden="true" />女性会員 約70%</li>
            <li><Check aria-hidden="true" />Google口コミ 152件・★5.0</li>
          </ul>
          <div className="hero-actions">
            <LineButton sub="最短1分・質問だけでもOK" />
            <a className="text-link" href="#courses">
              2つのコースを見る <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="hero-photo">
            <img
              src="/images/leven-training.webp"
              alt="Levenでパーソナルトレーニングを受ける女性"
              fetchPriority="high"
            />
            <figcaption>PERSONAL TRAINING IN SHIBUYA</figcaption>
          </figure>
          <div className="offer-card">
            <span>CIRCUIT COURSE</span>
            <strong>入会金 ¥10,000</strong>
            <b>10/31まで 無料</b>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="実績">
        <div><strong>152</strong><span>Google口コミ件数</span></div>
        <i />
        <div><strong>5.0</strong><span>Google口コミ評価</span></div>
        <i />
        <div><strong>7<span>年</span></strong><span>トレーナー歴</span></div>
        <i />
        <div><strong>3<span>分</span></strong><span>渋谷駅から徒歩</span></div>
      </section>

      <section className="worries section-shell">
        <SectionHeading
          label="DO YOU HAVE THESE WORRIES?"
          title={<>こんなお悩み、<em>抱えていませんか？</em></>}
        />
        <div className="worry-grid">
          <article data-reveal className="delay-1"><span>01</span><p>マッサージに通っても<br />肩こりや腰の違和感を繰り返す</p></article>
          <article data-reveal className="delay-2"><span>02</span><p>自己流の運動では<br />身体が思うように変わらない</p></article>
          <article data-reveal className="delay-3"><span>03</span><p>ダイエットを始めても<br />いつもひとりで挫折してしまう</p></article>
          <article data-reveal className="delay-4"><span>04</span><p>運動不足は気になるけれど<br />普通のジムは続く気がしない</p></article>
        </div>
        <div className="solution-copy">
          <span>その悩み、意志の弱さではなく</span>
          <strong>今のあなたに合う方法を、<br />選べていないだけかもしれません。</strong>
        </div>
      </section>

      <section className="photo-story section-shell" aria-label="Levenでのセッション風景">
        <div className="photo-story-copy" data-reveal>
          <p>WELCOME TO LEVEN</p>
          <h2>がんばる場所を、<br /><em>ほっとできる場所へ。</em></h2>
          <span>清潔感のあるプライベート空間で、会話を大切にしながら進めます。</span>
        </div>
        <figure className="story-photo story-photo-main" data-reveal>
          <img src="/images/leven-bodycare.webp" alt="トレーナーによる丁寧なボディケア" loading="lazy" />
          <figcaption>BODY CARE</figcaption>
        </figure>
        <figure className="story-photo story-photo-sub" data-reveal>
          <img src="/images/leven-studio.webp" alt="明るく清潔感のあるLevenのトレーニング空間" loading="lazy" />
          <figcaption>PRIVATE STUDIO</figcaption>
        </figure>
      </section>

      <section className="courses" id="courses">
        <div className="section-shell">
          <SectionHeading
            label="CHOOSE YOUR COURSE"
            title={<>目的と続け方で選べる、<em>2つのコース</em></>}
            lead={<>痛みや姿勢に向き合いたい方も、楽しく運動を習慣にしたい方も。<br />どちらが合うか分からない場合はLINEでご相談ください。</>}
          />

          <div className="course-selector">
            <article className="course-card personal-card" data-reveal>
              <div className="course-number">COURSE <b>01</b></div>
              <p className="course-kicker">肩こり・腰の違和感・姿勢が気になる方へ</p>
              <h3>根本改善コース</h3>
              <p>整体 × パーソナルトレーニング</p>
              <ul>
                <li><Check aria-hidden="true" />マンツーマン</li>
                <li><Check aria-hidden="true" />1回 60分</li>
                <li><Check aria-hidden="true" />身体に合わせた個別設計</li>
              </ul>
              <img className="course-card-photo" src="/images/leven-stretch.webp" alt="" loading="lazy" />
              <a href="#personal">詳しく見る <ArrowDown aria-hidden="true" /></a>
            </article>

            <div className="or-mark">OR</div>

            <article className="course-card circuit-card delay-2" data-reveal>
              <div className="course-number">COURSE <b>02</b></div>
              <p className="course-kicker">ひとりだと続かない・とにかく痩せたい方へ</p>
              <h3>サーキットコース</h3>
              <p>最大4名の少人数グループ</p>
              <ul>
                <li><Check aria-hidden="true" />MAX 4名</li>
                <li><Check aria-hidden="true" />1回 50分</li>
                <li><Check aria-hidden="true" />仲間と楽しく継続</li>
              </ul>
              <img className="course-card-photo" src="/images/leven-training.webp" alt="" loading="lazy" />
              <a href="#circuit">詳しく見る <ArrowDown aria-hidden="true" /></a>
              <div className="mini-offer">10/31まで 入会金無料</div>
            </article>
          </div>
        </div>
      </section>

      <section className="course-detail section-shell" id="personal">
        <div className="detail-grid">
          <div className="detail-media" data-reveal>
            <figure className="organic-photo">
              <img src="/images/leven-bodycare.webp" alt="Levenで身体を整えるコンディショニングセッション" loading="lazy" />
            </figure>
            <span className="vertical-label">PERSONAL COURSE</span>
          </div>
          <div className="detail-copy delay-2" data-reveal>
            <p className="detail-no">01 / PERSONAL</p>
            <h2>整えてから鍛えるから、<br /><em>身体の土台</em>から変えていける。</h2>
            <p>
              つらい部分だけを見るのではなく、姿勢や身体の使い方を確認。
              タイ古式マッサージの知見を活かした整体で動きやすい状態へ整え、
              一人ひとりに必要なトレーニングを組み合わせます。
            </p>
            <div className="feature-list">
              <div><span>1</span><p><b>身体を知る</b>姿勢・動き・悩みを丁寧に確認</p></div>
              <div><span>2</span><p><b>身体を整える</b>歪みや硬さに整体でアプローチ</p></div>
              <div><span>3</span><p><b>身体を育てる</b>戻りにくい身体を目指して運動</p></div>
            </div>
            <div className="recommended">
              <Target aria-hidden="true" />
              <p><b>こんな方におすすめ</b>肩こりや腰の違和感を繰り返す／姿勢が気になる／自分専用の指導を受けたい</p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-detail circuit-detail" id="circuit">
        <div className="section-shell detail-grid reversed">
          <div className="detail-media" data-reveal>
            <div className="circuit-photo-collage">
              <img src="/images/leven-studio.webp" alt="サーキットトレーニングを行うLevenのスタジオ" loading="lazy" />
              <img src="/images/leven-training.webp" alt="トレーナーと楽しく身体を動かす様子" loading="lazy" />
            </div>
            <span className="vertical-label">CIRCUIT COURSE</span>
          </div>
          <div className="detail-copy delay-2" data-reveal>
            <p className="detail-no">02 / SMALL GROUP</p>
            <h2>励まし合える仲間がいると、<br />運動はもっと<em>楽しく続く。</em></h2>
            <p>
              ひとりで黙々と頑張るのではなく、最大4名でテンポよく身体を動かす50分。
              少人数だからトレーナーの目が届き、初めての方も自分のペースで参加できます。
            </p>
            <div className="circuit-benefits">
              <div><HeartHandshake aria-hidden="true" /><b>続けやすい</b><span>仲間の存在がモチベーションに</span></div>
              <div><Dumbbell aria-hidden="true" /><b>しっかり動ける</b><span>効率よく全身をトレーニング</span></div>
              <div><UsersRound aria-hidden="true" /><b>つながれる</b><span>運動をきっかけに新しい交流を</span></div>
            </div>
            <div className="campaign-box">
              <span>10/31までの期間限定</span>
              <p>通常入会金 <s>10,000円</s></p>
              <strong>0<small>円</small></strong>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison section-shell">
        <SectionHeading label="COURSE COMPARISON" title={<>あなたに合うのは<em>どっち？</em></>} />
        <div className="comparison-table" role="table" aria-label="コース比較表" data-reveal>
          <div className="comparison-row header-row" role="row">
            <div role="columnheader">比較ポイント</div>
            <div role="columnheader"><span>根本改善</span>パーソナル</div>
            <div role="columnheader"><span>楽しく継続</span>サーキット</div>
          </div>
          {[
            ['主な目的', '身体の悩み・姿勢に向き合う', '運動習慣・ダイエット'],
            ['人数', '1名', '最大4名'],
            ['時間', '60分', '50分'],
            ['進め方', '完全オーダーメイド', '仲間とテンポよく'],
            ['おすすめ', '自分の身体をじっくり見てほしい', 'ひとりでは続きにくい'],
          ].map((row) => (
            <div className="comparison-row" role="row" key={row[0]}>
              <div role="cell">{row[0]}</div>
              <div role="cell">{row[1]}</div>
              <div role="cell">{row[2]}</div>
            </div>
          ))}
        </div>
        <div className="center-cta"><LineButton sub="コース選びから相談できます" /></div>
      </section>

      <section className="reason" id="reason">
        <div className="section-shell">
          <SectionHeading
            label="WHY LEVEN?"
            title={<>Levenが<em>選ばれる理由</em></>}
            lead="小さなジムだからこそできる、近い距離での丁寧なサポート。"
          />
          <div className="reason-grid">
            <article data-reveal className="delay-1">
              <span>01</span><Award aria-hidden="true" />
              <h3>整体の知見を持つ<br />経験豊富なトレーナー</h3>
              <p>トレーナー歴7年。JTTMA（日本タイ古式マッサージ協会）の資格を活かし、運動だけではなく身体の状態から見つめます。</p>
            </article>
            <article data-reveal className="delay-2">
              <span>02</span><HeartHandshake aria-hidden="true" />
              <h3>初心者・女性も安心の<br />アットホームな距離感</h3>
              <p>会員様の約70%が女性。初めての方にも分かりやすく、一人ひとりのペースに合わせて無理なく進めます。</p>
            </article>
            <article data-reveal className="delay-3">
              <span>03</span><MapPin aria-hidden="true" />
              <h3>忙しくても通いやすい<br />渋谷駅徒歩3分</h3>
              <p>道玄坂の駅近立地。お仕事帰りやお出かけの前後にも立ち寄りやすく、習慣化を後押しします。</p>
            </article>
          </div>
          <figure className="studio-banner" data-reveal>
            <img src="/images/leven-studio.webp" alt="Levenの明るく開放的なトレーニングスペース" loading="lazy" />
            <figcaption><span>PRIVATE SPACE</span><strong>人目を気にせず、<br />自分の身体に集中できる。</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="results section-shell">
        <SectionHeading
          label="TRUST & RESULTS"
          title={<>積み重ねてきた、<em>信頼と実績</em></>}
          lead="実際のお客様の写真・お声に差し替える前提のレイアウトです。"
        />
        <div className="results-grid">
          <div className="review-panel" data-reveal>
            <div className="stars" aria-label="星5の評価">{[1, 2, 3, 4, 5].map((n) => <Star key={n} aria-hidden="true" />)}</div>
            <strong>Google口コミ 152件</strong>
            <p>評価 ★5.0</p>
            <small>※掲載時点の情報。公開前に最新の件数をご確認ください。</small>
          </div>
          <div className="voice-card delay-1" data-reveal>
            <ImagePlaceholder label="お客様の声 01" detail="30代女性／根本改善コース" />
            <p>口コミ本文・お客様コメントを掲載予定</p>
          </div>
          <div className="voice-card delay-2" data-reveal>
            <ImagePlaceholder label="お客様の声 02" detail="40代女性／サーキットコース" />
            <p>口コミ本文・お客様コメントを掲載予定</p>
          </div>
        </div>
        <div className="before-after">
          <div>
            <p>BEFORE</p>
            <ImagePlaceholder label="ビフォー写真" detail="同一条件・同一アングルの写真" />
          </div>
          <MoveRight aria-hidden="true" />
          <div>
            <p>AFTER</p>
            <ImagePlaceholder label="アフター写真" detail="期間・頻度・個人差の注記を添えて掲載" />
          </div>
        </div>
        <p className="legal-note">※結果には個人差があり、成果や効果を保証するものではありません。</p>
      </section>

      <section className="trainer">
        <div className="section-shell trainer-grid">
          <div className="trainer-photo" data-reveal>
            <figure>
              <img src="/images/leven-stretch.webp" alt="お客様の身体に丁寧に向き合うLeven代表トレーナー" loading="lazy" />
              <figcaption>JUMPEI SEKIZUKA / TRAINER</figcaption>
            </figure>
          </div>
          <div className="trainer-copy delay-2" data-reveal>
            <p className="detail-no">TRAINER</p>
            <h2>あなたの悩みに、<br />二人三脚で向き合います。</h2>
            <p>
              身体は一人ひとり違うから、同じ方法が全員に合うとは限りません。
              今の状態や生活まで丁寧に伺い、無理なく続けられる方法を一緒に考えます。
            </p>
            <blockquote>「昨日より少し元気な身体へ」<br />その変化を、一緒につくっていきましょう。</blockquote>
            <div className="trainer-name"><span>代表トレーナー</span><strong>関塚 純平</strong></div>
            <ul>
              <li>パーソナルトレーナー歴 7年</li>
              <li>累計1,000名以上のボディメイクを担当</li>
              <li>JTTMA（日本タイ古式マッサージ協会）資格保有</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="price section-shell" id="price">
        <SectionHeading
          label="PRICE"
          title={<>続け方に合わせて選べる、<em>月額プラン</em></>}
          lead="すべて税込価格です。無理のないペースから始められます。"
        />
        <div className="price-grid">
          <article className="price-card" data-reveal>
            <div className="price-title"><div><span>PERSONAL</span><h3>根本改善コース</h3><p>マンツーマン・60分</p></div></div>
            <div className="price-list">
              {personalPrices.map(([frequency, amount, unit]) => (
                <div key={frequency}><b>{frequency}</b><strong>{amount}</strong><small>{unit}</small></div>
              ))}
            </div>
          </article>
          <article className="price-card featured-price delay-2" data-reveal>
            <div className="campaign-ribbon">10/31まで 入会金10,000円 → 0円</div>
            <div className="price-title"><div><span>SMALL GROUP</span><h3>サーキットコース</h3><p>最大4名・50分</p></div></div>
            <div className="price-list">
              {circuitPrices.map(([frequency, amount, unit]) => (
                <div key={frequency}><b>{frequency}</b><strong>{amount}</strong><small>{unit}</small></div>
              ))}
            </div>
          </article>
        </div>
        <p className="price-note">※キャンペーンはサーキットコースのみ対象です。適用条件・実施期間は公開前にご確認ください。</p>
      </section>

      <section className="flow">
        <div className="section-shell">
          <SectionHeading
            label="HOW TO START"
            title={<>体験まで、<em>LINEでかんたん4ステップ</em></>}
            lead="まずはコースが決まっていなくても大丈夫です。"
          />
          <div className="flow-grid">
            <article data-reveal className="delay-1"><span>STEP 1</span><MessageCircle aria-hidden="true" /><h3>LINEを追加</h3><p>ボタンからLeven公式LINEを友だち追加</p></article>
            <article data-reveal className="delay-2"><span>STEP 2</span><Target aria-hidden="true" /><h3>希望を送信</h3><p>気になるコースとお悩みをメッセージ</p></article>
            <article data-reveal className="delay-3"><span>STEP 3</span><CalendarCheck2 aria-hidden="true" /><h3>日時を相談</h3><p>空き状況をご案内し、体験日時を決定</p></article>
            <article data-reveal className="delay-4"><span>STEP 4</span><Dumbbell aria-hidden="true" /><h3>体験へ</h3><p>ご来店後、身体に合うプランをご提案</p></article>
          </div>
          <div className="flow-cta"><LineButton sub="友だち追加後「体験希望」と送信" /></div>
        </div>
      </section>

      <section className="faq section-shell">
        <SectionHeading label="FAQ" title={<>よくある<em>ご質問</em></>} />
        <div className="faq-list">
          <details open>
            <summary><span>Q</span>運動経験がなくても大丈夫ですか？</summary>
            <div><span>A</span><p>はい、大丈夫です。一人ひとりの体力や運動経験に合わせて進めるため、初めての方も安心してご参加いただけます。</p></div>
          </details>
          <details>
            <summary><span>Q</span>どちらのコースが合うか分かりません。</summary>
            <div><span>A</span><p>LINEで今のお悩みや目標を伺い、合うコースをご案内します。コースを決めずに相談いただいて問題ありません。</p></div>
          </details>
          <details>
            <summary><span>Q</span>サーキットコースに一人で参加しても大丈夫ですか？</summary>
            <div><span>A</span><p>もちろんです。運動をきっかけに自然とつながれる、初めての方にも参加しやすい少人数クラスを目指しています。</p></div>
          </details>
          <details>
            <summary><span>Q</span>体験時の持ち物や服装を教えてください。</summary>
            <div><span>A</span><p>ご予約時にLINEで当日の持ち物と服装をご案内します。気になることは事前に何でもご質問ください。</p></div>
          </details>
          <details>
            <summary><span>Q</span>体験後に必ず入会する必要はありますか？</summary>
            <div><span>A</span><p>ご自身に合うかを確かめてからご検討ください。体験時にご希望や通い方を伺い、無理のないプランをご案内します。</p></div>
          </details>
        </div>
      </section>

      <section className="access" id="access">
        <div className="section-shell access-grid">
          <div className="map-placeholder" role="img" aria-label="店舗周辺地図の配置予定エリア">
            <MapPin aria-hidden="true" />
            <span>MAP</span>
            <small>Google Maps 埋め込み予定</small>
          </div>
          <div className="access-copy">
            <p className="detail-no">ACCESS</p>
            <h2>渋谷駅から徒歩3分。<br />仕事帰りにも通いやすい。</h2>
            <h3>FITNESS GYM Leven</h3>
            <dl>
              <div><dt><MapPin aria-hidden="true" />住所</dt><dd>〒150-0043<br />東京都渋谷区道玄坂1-15-3<br />プリメーラ道玄坂804</dd></div>
              <div><dt><Clock3 aria-hidden="true" />営業時間</dt><dd>根本改善コース　10:00〜19:00<br />サーキットコース　19:00〜22:00<br /><small>定休日：木曜日</small></dd></div>
            </dl>
            <a className="map-link" href="https://maps.google.com/?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E9%81%93%E7%8E%84%E5%9D%821-15-3+%E3%83%97%E3%83%AA%E3%83%A1%E3%83%BC%E3%83%A9%E9%81%93%E7%8E%84804" target="_blank" rel="noreferrer">
              Google Mapsで見る <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <p>READY TO START?</p>
          <h2>昨日より少し、<br /><em>好きになれる身体へ。</em></h2>
          <p>最初の一歩は、LINEで気軽にご相談ください。<br />あなたに合うコース選びからお手伝いします。</p>
          <LineButton sub="最短1分・相談だけでもOK" />
          <small>LINE追加 → 希望コースを送信 → 日時相談 → 体験</small>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span>FITNESS GYM</span><strong>Leven</strong>
        </a>
        <p>〒150-0043 東京都渋谷区道玄坂1-15-3 プリメーラ道玄坂804</p>
        <p>© FITNESS GYM Leven</p>
      </footer>

      <a className="mobile-cta" href={lineUrl} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />LINEで体験を相談する
      </a>
    </main>
  );
}
