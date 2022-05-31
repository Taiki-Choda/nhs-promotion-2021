// 時間計測を開始：ローディングアニメーションの制限用
const startTime = performance.now();
// スクロールプリベント
function scrollControl(event) {
    event.preventDefault();
};
function scroll_start() {
    document.removeEventListener("mousewheel", scrollControl, { passive: false });
    document.removeEventListener('touchmove', scrollControl, { passive: false });
};
function scroll_stop() {
    document.addEventListener("mousewheel", scrollControl, { passive: false });
    document.addEventListener("touchmove", scrollControl, { passive: false });
};
// ローディング画面の有無：Boolean
let loadShow;
document.addEventListener("DOMContentLoaded", () => {
    // DOMの読み込み後の実行内容
    if (sessionStorage.getItem(location.href) !== "true") {
        // セッションストレージにアクセス記録がなければ
        // ローディング画面を表示する
        scroll_stop();
        const loader = `<div id="nhs-loading" class="nhs-loader" data-ef-load="">
                            <div class="nhs-loader__content">
                                <img src="assets/images/logo_white_01.png" alt="長田高校の校章">
                            </div>
                        </div>`;
        document.querySelector('.wrap-all').insertAdjacentHTML('afterbegin', loader);
        sessionStorage.setItem(location.href, "true");
        loadShow = true;
    };
    // import Swiper
    const addScriptEl = document.createElement('script');
    addScriptEl.src = 'assets/js/swiper.js';
    document.head.appendChild(addScriptEl);
    //  header, footer, emergency_blockを挿入する
    const writeSet = [
        {
            'target': 'nhs-header',
            'source': `<header class="nhs-header">
                            <div class="nhs-header__content">
                                <div class="nhs-header__logo" role="banner">
                                    <img class="nhs-header__logo-img" src="assets/images/favicon/nhs_favicon_middle.png" alt="長田高校の校章"><img class="nhs-header__logo-ttl" src="assets/images/header_ttl_01.svg" alt="Nagata High School">
                                    <a class="wrap-link" href="pr/top.html" target="_self" draggable="false">トップページへ</a>
                                </div>
                                <div class="nhs-header-btn" role="button" tabindex="0" aria-label="メニューを閉じる">
                                    <span class="nhs-header-btn__line"></span>
                                    <span class="nhs-header-btn__line"></span>
                                    <span class="nhs-header-btn__line"></span>
                                </div>
                            </div>
                        </header>
                        <nav class="header-nav">
                            <div class="header-nav__container">
                                <ul class="nav__list normal-list area-wrap">
                                    <li class="nav-list__item"><a class="link--marker"href="pr/top.html" target="_self" draggable="false"><span class="nav-list__en">Top</span><span class="nav-list__jp">トップページ</span></a></li>
                                    <li class="nav-list__item"><a class="link--marker"href="pr/tradition.html" target="_self" draggable="false"><span class="nav-list__en">Tradition</span><span class="nav-list__jp">校風</span></a></li>
                                    <li class="nav-list__item"><a class="link--marker"href="pr/outline.html" target="_self" draggable="false"><span class="nav-list__en">Outline</span><span class="nav-list__jp">学校概要</span></a></li>
                                    <li class="nav-list__item"><a class="link--marker"href="pr/life/top.html" target="_self" draggable="false"><span class="nav-list__en">Life</span><span class="nav-list__jp">学習・部活・行事</span></a></li>
                                    <li class="nav-list__item"><a class="link--marker"href="pr/voice/top.html" target="_self" draggable="false"><span class="nav-list__en">Voice</span><span class="nav-list__jp">在校生の声</span></a></li>
                                    <li class="nav-list__item"><a class="link--marker"href="pr/zinbun-suri.html" target="_self" draggable="false"><span class="nav-list__en">Course</span><span class="nav-list__jp">人文・数理探究類型</span></a></li>
                                </ul>
                            </div>
                        </nav>`,
        },
        {
            'target': 'nhs-footer',
            'source': `<footer class="nhs-footer">
                            <aside class="nhs-footer__top">
                                <a style="text-decoration:none;" href="pr/top.html">
                                    <img class="nhs-footer__top-logo" src="assets/images/favicon/nhs_favicon_middle.png" alt="長田高校の校章">
                                </a>
                                <p class="nhs-footer__top-ttl">兵庫県立長田高等学校</p>
                            </aside>
                            <nav class="nhs-footer__links" aria-label="学校紹介特設サイトのリンク一覧">
                                <ul class="normal-list">
                                    <li class="normal-list__item"><a class="link--marker"href="pr/top.html" target="_self" draggable="true">紹介トップ</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="pr/tradition.html" target="_self" draggable="true">校風</a></li><li class="normal-list__item"><a class="link--marker"href="pr/outline.html" target="_self" draggable="true">学校概要</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="pr/life/top.html" target="_self" draggable="true">長田での生活</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="pr/life/study.html" target="_self" draggable="true">学習について</a></li>
                                </ul>
                                <ul class="normal-list">
                                    <li class="normal-list__item"><a class="link--marker"href="pr/club-activity.html" target="_self" draggable="true">部活動紹介</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="pr/life/event.html" target="_self" draggable="true">行事紹介</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="pr/voice/top.html" target="_self" draggable="true">生徒の声</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="pr/zinbun-suri.html" target="_self" draggable="true">特色類型</a></li>
                                </ul>
                                <ul class="normal-list">
                                    <li class="normal-list__item"><a class="link--marker"href="pr/rule.html" target="_self" draggable="true">サイト利用規約</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="pr/privacy.html" target="_self" draggable="true">プライバシー</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="pr/site-map.html" target="_self" draggable="true">サイトマップ</a></li>
                                    <li class="normal-list__item"><a class="link--marker"href="https://www.hyogo-c.ed.jp/~nagata-hs/" target="_blank" rel="noopener noreferrer">長田高校トップ</a></li>
                                </ul>
                            </nav>
                            <aside class="nhs-footer__cpr" role="complementary" aria-label="コピーライト">
                                <p>学校紹介特設サイト｜生徒会執行部</p>
                                <p>©︎2022 Nagata High School Student Council All rights reserved.</p>
                            </aside>
                        </footer>`
        },
        {
            'target': 'emergency-block',
            'source': ''
        }
    ];
    writeSet.forEach(element => {
        const writeTarget = document.getElementById(element.target);
        if (writeTarget) {
            writeTarget.insertAdjacentHTML('afterbegin', element.source);
        };
    });
});
function loadFinish () {
    const loader = document.getElementById('nhs-loading');
    loader.dataset.efLoad = "open";
    setTimeout(scroll_start,900);
};
class Modal {
    constructor(obj) {
        const baseHtml = `<div class="modal" data-modal-content="">
                            <div class="close-btn" role="button" tabindex="0" aria-label="モーダルウィンドウを閉じる" data-modal-closer="true">
                                <span class="close-btn__line"></span>
                                <span class="close-btn__line"></span>
                            </div>
                            <div class="modal__container"></div>
                            <div class="modal__background" data-modal-closer="true"></div>
                        </div>`;
        const modal = document.querySelector(".modal");
        if (modal === null) {
            document.querySelector('body').insertAdjacentHTML('beforeend',baseHtml);
        }
        this.type = obj.type;
        this.modal = document.querySelector(obj.modal);
        this.modalContainer = document.querySelector(obj.modalContainer);
        this.modalContainer.insertAdjacentHTML('afterbegin',obj.template);
        const modalOpenButton = document.querySelectorAll(obj.modalOpenButton);
        const modalCloseButton = document.querySelectorAll(obj.modalCloseButton);
        modalOpenButton.forEach(button => {
            if (this.type === "image") {
                button.addEventListener('click', (e) => this.imageModalOpen(e));
            } else {
                button.addEventListener('click', () => this.openModal());
            }
        });
        modalCloseButton.forEach(button => {
            button.addEventListener('click', () => this.closeModal());
        });
    }
    openModal() {
        this.modalContainer.scrollTo(0, 0);
        this.modalContainer.classList.add('modal__container--open');
        this.modal.classList.add('modal--open');
    }
    closeModal() {
        this.modal.classList.remove('modal--open');
        this.modalContainer.classList.remove('modal__container--open');
    }
    imageModalOpen(e) {
        this.openModal();
        this.modal.dataset.modalContent = "image";
        const image = e.currentTarget;
        const imageSrc = image.getAttribute('src');
        const imageTitle = image.getAttribute('alt');
        this.modalContainer.innerHTML = `<img src="${imageSrc}" alt="imageTitle"><h6>${imageTitle}</h6>`;
    }
}
// フィルター機能
class Filter {
    constructor(obj) {
        this.rule = ""; //  フィルタールール
        this.hideCardClass = obj.hideCardClass
        this.activeButtonClass = obj.activeButtonClass
        this.filterButtons = document.querySelectorAll(obj.filterButtons);
        this.filterTargets = document.querySelectorAll(obj.filterTargets);
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => this.buttonClicked(e));
        });
    }
    // ソートを解除して全てのカードを表示する
    showAllCards() {
        this.filterTargets.forEach(target => {
            target.classList.remove(this.hideCardClass);
        });
        this.filterButtons.forEach(button => {
            button.classList.remove(this.activeButtonClass);
        });
    }
    // ソートボタンが押された時の処理
    buttonClicked(e) {
        const button = e.currentTarget;
        if (button.classList.contains(this.activeButtonClass)) {
            button.classList.remove(this.activeButtonClass);
            this.showAllCards();
        } else {
            this.showAllCards();
            button.classList.add(this.activeButtonClass);
            this.rule = button.dataset.filterName;
            this.filterTargets.forEach(target => {
                target.classList.remove(this.hideCardClass);
                if (target.dataset.cardFilterer !== this.rule) {
                    // 押されたボタンのルールとカードの種別が異なれば隠す
                    target.classList.add(this.hideCardClass);
                }
            });
        }
    };
}
window.onload = () => {
    if (loadShow) {
        // ローディング画面が表示されていれば
        const currentTime = performance.now();
        if (currentTime <= 5000) {
            setTimeout('loadFinish()', (1200 - currentTime));
        } else {
            loadFinish();
        };
    }
    // 表示領域に入ったらフェードインするアニメーション
    function fadeIn(entries) {
        entries.forEach(entry => {
            const target = entry.target;
            if (entry.isIntersecting && target.dataset.efShow !== "end") {
                target.dataset.efShow = "true";
                setTimeout(() => {
                    target.dataset.efShow = "end";
                }, 500)
            }
        });
    }
    let observer = new IntersectionObserver(fadeIn, {
        threshold: 0.5,
    });
    const entry_targets = document.querySelectorAll("[data-ef-show]");
    entry_targets.forEach(element => {
        observer.observe(element);
    });
    // ヘッダーのアニメーション
    const headerWrap = document.getElementById('nhs-header');
    if (headerWrap !== null) {
        const header = headerWrap.querySelector('.nhs-header');
        const header_btn = headerWrap.querySelector('.nhs-header-btn');
        const header_nav = headerWrap.querySelector('.header-nav');
        let prev_position = 0;
        let scrollingAmount = 0;
        window.addEventListener('scroll', () => {
            const position = window.scrollY;
            if (headerWrap.dataset.headerNav !== 'open') {
                if (position > prev_position && position > 120) {
                    header.classList.add('nhs-header--hide');
                    scrollingAmount = 0;
                } else {
                    scrollingAmount += 1;
                    if (scrollingAmount >= 10 || position <= 120) {
                        header.classList.remove('nhs-header--hide');
                    }
                }
            }
            prev_position = position;
        });
        // ヘッダーの開閉
        // 開閉中に時間計測する変数（重複クリックに対応）
        let headerNavToggle;
        header_btn.addEventListener('click', headerOpenClose);
        function headerOpenClose() {
            if (headerWrap.dataset.headerNav === "open") {
                header_nav.style.visibility = 'visible';
                headerWrap.dataset.headerNav = "close";
                scrollingAmount = 0;
                headerNavToggle = setTimeout(() => {
                    // アニメーションが終了すれば
                    header_nav.style.visibility = 'hidden';
                }, 1390)
            } else {
                clearTimeout(headerNavToggle);
                header_nav.style.visibility = 'visible';
                headerWrap.dataset.headerNav = "open";
            };
        }
    }
    // Swiper
    class StartSlider {
        constructor(element) {
            this.randomName = Math.random().toString(32).substring(2)
            this.randomDataset = `[data-slider-id="${this.randomName}"]`
            this.type = element.dataset.sliderType;
            this.cardSetting = {
                spaceBetween: 6,
                slidesPerView: 1.2,
                centeredSlides: true,
                speed: 900,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            }
            this.presentationSetting = {
                spaceBetween: 3,
                slidesPerView: 1,
                centeredSlides: true,
                speed: 550,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: 'progressbar',
                    clickable: true,
                }
            }
            element.dataset.sliderId = this.randomName;
            this.SwiperSetup();
        }
        SwiperSetup() {
            if (this.type == "presentation") {
                var swiper = new Swiper(this.randomDataset, this.presentationSetting);
            } else {
                var swiper = new Swiper(this.randomDataset, this.cardSetting);
            }
        }
    }
    const sliders = document.querySelectorAll('[data-slider-type]');
    sliders.forEach((element) => {
        let a = new StartSlider(element);
    });
    // トップのパララックスの設定切り替え
    function togglePara() {
        const width = window.innerWidth;
        const toggleTarget = document.querySelector('.feature');
        if (toggleTarget !== null) {
            if (width >= 1000) {
                toggleTarget.dataset.efParallax = "18";
            } else {
                toggleTarget.dataset.efParallax = "none";
                toggleTarget.style.transform = 'unset';
            }
        }
    }
    togglePara();
    window.addEventListener('resize', ()=> {
        togglePara();
    });
    // パララックス
    // TODO:画面外にある場合は再描画されないようにしたい
    const parallaxTargets = document.querySelectorAll('[data-ef-parallax]');
    (function loop(){
        window.requestAnimationFrame(loop);
        const scroll = document.documentElement.scrollTop;
        parallaxTargets.forEach(element => {
            const tgt_math = element.dataset.efParallax / 10;
            const value = scroll / tgt_math;
            const values = `translate3d(0, ${value}px, 0)`;
            if (scroll >= 0) {
                element.style.transform = values;
            }
        });
    })();
    const imageModal = new Modal({
        type: "image",
        modal: ".modal",
        modalOpenButton: "[data-open-image=true]",
        modalCloseButton: "[data-modal-closer=true]",
        modalContainer: ".modal__container",
        template: ``,
    });
    // 部活動一覧
    const tgt = document.querySelector('#filter');
    const modal = document.querySelector('.modal');
    if (tgt !== null) {
        const targetArea = tgt.querySelector('.cards');
        const club_data = [
            {
                'no': '0',
                'name': '美術部',
                'kind': 'in',
                'place': '美術室',
                'day': '火・木・金',
                'msg': '美術好きさん大歓迎です！中学で美術部だった人だけでなく絵を描くことが趣味の人は是非一緒に活動してほしいと思います。</p><p>長田高校の美術部はとにかく自由で兼部しやすく、兼部率は100%です！！油絵など中学生ではあまり触れることのできなかった画材にも挑戦できます。',
                'comment': '絵を描くことが大好きな人が集まってみんな仲良く活動しています。</p><p>油絵、水彩、アクリルなどそれぞれの得意なものを選んで絵を描くことができてすごく楽しいです。</p><p>また、文化祭ではポストカード販売やワークショップで様々な方に楽しんでいただけ嬉しかったです。総合文化祭への出品でも結果を残せるようにこれからもみんなで切磋琢磨して頑張ります。　',
                'award': ['総合文化祭　優秀賞'],
                'pr': '',
    
            },
            {
                'no': '1',
                'name': 'ESS',
                'kind': 'in',
                'place': '201教室',
                'day': '火・金',
                'msg': '普段の活動では、英語を使ってゲームなどをしています。</p><p>英語が好きな人、得意な人はもちろん、あまり好きでない、苦手な人でも楽しめます。ALTの先生と話もできます。文化発表会で劇をしたり、コンテストに出場することもできます。',
                'comment': '特に、ALTの先生と話すとき、始めは緊張してうまく英語が話せませんでしたが、いつの間にか自分から話せるようになっていました！</p><p>自分が話す英語は文法的、発音的には全然正しくないと思いますが、一番大切なのは伝えようとする気持ちです。</p><p>それさえあれば、言いたいことは伝わります。自分が思ってる以上に英語は話せます！ネイティブの人と普段話す機会はほとんどないので、毎週の活動を楽しんでいます！',
                'award': [],
                'pr': 'アットホームな雰囲気で全然レベル高くないです！',
            },
            {
                'no': '2',
                'name': '文芸部',
                'kind': 'in',
                'place': '102教室　アストラホール2階',
                'day': '水・金',
                'msg': '文芸部は“自由”です。でも、けっこう“がち”です。ふだんは“ぬる～い”ように見えますが、「部誌」制作や「コンクール」への出品は真剣です。小説なんて書いたことないけど興味だけはあるんだよなって方、心配いりません。大丈夫です！ みんな、本気ですがけっして“文豪”の集まりではありません。高校に入学するまで小説も詩も短歌も俳句もつくったことない人がほとんどです。各人各人が、できる限りの想いを「空想」と「語彙」と「表現」で詰め込めば、きっとそれは素敵な作品です。皆様の入部を心待ちにしております。創作活動を通じて、文芸（国語）の実力もつきますよ。',
                'comment': '気ままに好きな話を書いたり、歌ったりすることができ、楽しみながら実力をつけることができます。年に５回、部誌「A MAD TEA PARTY」を発行し、表紙も毎回部員でデザインします。たくさんの人に読んでいただき喜んでもらっています。また、文化祭や文化部発表会での展示、文芸コンクールへの作品応募で入選して栄光ある名誉が得られるなど定期的にモチベーションをあげる機会もあります。作品は自宅で書くことができるので、学校で集まって活動する時間が多すぎて負担になることはありません。純粋に楽しく活動ができています。兼部して他の才能を伸ばす人も多いし、部活動とは別に作品を作って密かに楽しんだり、副賞として図書カードがもらえる文芸賞へ応募する余裕もあります。',
                'award': ['昨年の兵庫県総合文化祭（文芸部門コンクール）で部誌部門が“優秀賞”を受賞、個人作品でも多数の賞（“優良賞”２人、“入選”のべ１３人）を受賞。毎年県総文祭（文芸部門コンクール）や他のコンクールにも参加（大谷大学文藝コンテスト小説部門で“大谷文芸賞”を受賞）するなど、実績をあげています。','昨年も連続で全国総合文化祭（こうち総文）に参加、今年の秋には近畿総文（滋賀大会）に参加します。毎年全国大会出場・入選をめざしています。'],
                'pr': '文芸部は、年５回「A MAD TEA PARTY」という部誌を発行しています。活動はスマホやパソコンがあればいつでもどこでもできてしまいます。部員全員集合は企画考案・印刷のときなど他の部活と比べて少なくはなりますが、定期的に、時には自然に集まって作品批評や楽しいお話に花を咲かせるなど、部員同士わきあいあい、仲が良いのも特徴です。総合文化祭（文芸コンクール）では毎年“本気”で全国を狙っています。他のコンクールやコンテストでも、それぞれが良い成績を目指して頑張る、意識の高～い部活です。小説はもちろん、俳句や詩にも挑戦できますよ。現在部員２２人です。',
            },
            {
                'no': '3',
                'name': '写真部',
                'kind': 'in',
                'place': '校内（内容によっては校外もあり）',
                'day': '水',
                'msg': '週１回、ゆったり自由に活動しています。</p><p>基本的なカメラの使い方や構図・編集について学ぶことができます。また、他の部活にお邪魔させていただいたり、文化祭・体育祭などの撮影も行っています。</p><p>コンクールでは、個人出展だけでなく、チームを組んで応募することもあり、学年関係なく仲良く活動しています。<br>カメラの貸出あり、兼部OKです。皆さんの入部、待ってます！',
                'comment': '写真部に入部してよかった点を部員のみんなに聞きました！</p><ul><li>学校行事を普段見れない場所から見ることが出来る。<br>→文化祭や体育祭などの撮影は、特別な場所から見ることが出来る！</li><li>週1回なので参加しやすい。<br>→テスト前は活動なしです！</li><li>風景の変化に敏感になった。<br>→「今日の空キレイ！」「この花もうすぐ咲きそう！」などほんとに小さな発見だけど、気がつくようになった。</li></ul><br><p>他にも、色々な部活を見ることが出来る、 スマホとはまた違う感じの写真が撮れるなどがありました。',
                'award': [],
                'pr': '',
            },
            {
                'no': '4',
                'name': '朝鮮文化研究部',
                'kind': 'in',
                'place': '204教室',
                'day': '水',
                'msg': '韓国が好きな人は大歓迎です！兼部している人もいます。チマチョゴリや太鼓もあります！韓国語を一緒に勉強したい人も大歓迎です！1週間に1回するかしないかのゆるい部活です。夏休みは1日だけ部活をしました。全部員が韓国好きです！',
                'comment': '自由度が高くて、自分の興味に沿った自分だけの活動ができるので、充実感を感じられます。クラスの友達とは普段しないような趣味の話もたくさんできて、とても楽しいです！共通の趣味を持った友だちがいて、話すのが楽しいです。自分一人では続かないハングルの勉強も部活でやるので頑張れます。みんなが知ってることを共有できていい部活です。',
                'award': [],
                'pr': '全部員がK-pop好きで、中には韓国のドラマが好きな人もいます。',
            },
            {
                'no': '5',
                'name': '家庭部',
                'kind': 'in',
                'place': '食物教室',
                'day': '火',
                'msg': '毎週火曜日の放課後、商業棟３階の食物教室で活動をしています。普段の活動は自分達でメニューを決めてお菓子や料理を作っています。バレンタインやクリスマスなどのイベント時期には、季節に合わせたものも作るので、こちらも大きな魅力の一つです。料理の苦手な人や男子部員も大歓迎。料理を作るのが好き、食べるのが好き、そんなあなたはぜひ家庭部へ!',
                'comment': '学年の壁がなく、みんなとても仲がいいです。自分達でメニューを決めるので、幅広いジャンルの料理にチャレンジできます。料理が苦手な人でも他の部員と協力して作るので心配することなく、みんな楽しんで活動することができます。活動日も週一回なので、無理なく活動を続けることができ、他の部との兼部も可能です。',
                'award': [],
                'pr': '何でも好きなメニューを作って食べることができます!</p><p class="text--note">料理にかかる費用は当日活動した部員で割り勘にしています',
            },
            {
                'no': '6',
                'name': '茶華道部',
                'kind': 'in',
                'place': '３階作法室',
                'day': '水',
                'msg': '⚪︎活動内容<br>毎週水曜日、茶道講師の先生にお点前を教えていただきます。自分で点てたお茶と和菓子を部員の皆んなで楽しんでいます！文化祭の時には、華道のお稽古で花をいけたり、浴衣を着てお点前を披露します。</p><p>茶華道部は、2年生5人と1年生7人で仲良く活動しています。お点前が初めての方も、兼部を考えている方も大歓迎です。<br>私たちと一緒に「茶道・華道」に触れてみませんか？',
                'comment': '⚪︎部員に部活について質問してみました！<br>Q.部活をしていて楽しい・嬉しいときは?<br>　・お抹茶と美味しい和菓子を食べているとき<br>　・知らなかった茶道の知識を得られたとき<br>　・部員仲間とゆっくり話す時間<br>　・上手にお点前が出来たとき<br>Q.お点前を習って身についたと思うことは?<br>　・基本的な礼儀や美しい作法、佇まい<br>　・丁寧に行動しようという意識<br>　・綺麗な姿勢を保つコツ<br>Q.茶華道部の魅力は?<br>　・文化祭で浴衣が着れる<br>　・先輩も先生も優しい方ばかり<br>　・一人ずつ指導、アドバイスしていただける<br>　・和やかで落ち着いた環境<br>⚪︎最後にひとこと<br>　「茶華道部って良いな」と思える温かい空気感を私たちは活動の中で感じています。そして、茶道のお稽古を通して、美しい所作が身につけられるように出来るようにこれからも部活動に励みたいと思います。',
                'award': [],
                'pr': '',
            },
            {
                'no': '7',
                'name': '数学部',
                'kind': 'in',
                'place': '物理教室',
                'day': '水',
                'msg': '数学は知識を伴わなくても難しい問題が解けたり、どんな知識を駆使しても発想が思いつかなかったりと、面白いことが起きる教科です。週１回だけ、兼部大歓迎という、とてもライトな部活なので、まずは気軽に見に来て下さい！',
                'comment': '部員が作成した問題や、ネットなどから拾ってきた難問や、良問を皆で話し合って解けるのが、この部活の良いところだと思います。また、頭を使うクイズ的な問題もしており、こちらはひらめき力が試されるので、「あっ」という驚きがあって、とても楽しいです。数学が好きな人も嫌いな人でも、数学部に来て、楽しめること間違いなし！',
                'award': [],
                'pr': '謎解きが好きな方、部長の私が作成した謎解き問題がたくさんあるので、ぜひ解きに来て下さい。',
            },
            {
                'no': '8',
                'name': '物理部',
                'kind': 'in',
                'place': '物理教室',
                'day': '火・金',
                'msg': '中学生の皆さん、こんにちは。物理部です。</p><p>ちょっと自分には難しそう…と思った方、面白いことがしたい人なら大丈夫！物理部では今までにイライラ棒、ヘロンの噴水、浮遊テーブルなど、自分たちが興味を持ったものを作ってきました。</p><p>これらは文化祭や文発で展示し、特に文発ではたくさんの人が見に来てくれています。今は謎解き脱出ゲームに挑戦中です。さらに、活躍の場は校内だけではありません。数学理科甲子園にも毎年挑戦しています！</p><p>何か作りたい！という方、クイズ好きの方、数学理科甲子園に出てみたい！という方、是非物理部に来てください！',
                'comment': '中学生のみなさんこんにちは。あみだくじで決まった物理部副部長です。</p><p>活動場所である物理教室にはいろんなものがあります。開かずの窓、ブラウン管みたいなパソコン数台、激ムズのスペースインベーダーっぽいゲーム(過去の部員作)、物理倉庫にはいろんなものが眠っています。全貌を知るものはいません。天体観測セットやバーベキューセットがあるとか。コロナで封印されていたので、この文章を書くにあたり初めて知りました。是非とも封印を解きたいものですね。</p><p>あ、最近の活動内容はクイズと謎解きです。部員が制作したものを文化祭や文発で公開したいなと思っています。</p><p>希望があればなんでも出来るので、放課後ゆったりとした時間を過ごしたい方は物理教室まで( ´ ▽ ` )</p><p>それでは最後にクイズです！<br>lはあるけどjはない<br>○や●はあるけど□や■はない<br>×はあるけど÷はない<br>これは何でしょう？<br>答えはTwitter(長田高校物理部)にて発表します！',
                'award': ['数学理科甲子園出場','物理チャレンジ出場'],
                'pr': '長田高校には自主性のある部活がたくさんあります、中でも物理部は活動内容も自分達で決められる部活です。したい！の思ったことがなんでも出来る物理部の一員になりたい方、待ってます！',
            },
            {
                'no': '9',
                'name': '生物部',
                'kind': 'in',
                'place': '生物室',
                'day': '月・水・金',
                'msg': 'こんにちは。生物部部長です。生物部めっちゃ楽しいです。</p><p>生物好きの人でもぶっちゃけそうじゃない人でも楽しめる部活動です。現在活動している部員の全員が兼部をしておりWhiteな部活です。</p><p>動植物の飼育やフィールドワーク、研究活動などを行っています。私の文章力ではうまく伝えきれないのでインスタをチェックしてみてください！',
                'comment': 'とても楽しい部活動です。アットホームな雰囲気で、協力し合って活動しています。</p><p>兼部しやすいです。私が休んだ日でも他のみんなが連携して作業を行ってくれています。本当にありがたいです。</p><p>こんなかんじでお互いが助け合っており、信頼関係半端ないです。顧問の先生もとても優しくて私達の活動を全面的に支援してくださっておりとてもありがたいです。部員も先生もいい人だらけのいい部活動です。この部活動に入ってよかったなと思います。',
                'award': [],
                'pr': 'インスタは「長田高校　生物部」で検索すれば出てきます。質問箱もあるのでなんでも質問してくださればなと思います。',
            },
            {
                'no': '10',
                'name': '書道部',
                'kind': 'in',
                'place': '書道教室',
                'day': '水',
                'msg': '初心者大歓迎です！週1～3回の部活で、勉強とも両立できます。他の部活や委員会と兼部している人もいますが、それぞれのペースで頑張って活動しています。もちろん、男子も大歓迎です。年2回、袴を着て書道パフォーマンスを発表する場があります。',
                'comment': '先輩後輩関係なく仲が良くて、楽しく活動しています。学校生活の1番の思い出になっています。今まで書道を習ったことがなくて、苦手だなと思っている人も心配いりません！先生や先輩が優しく教えてくれるので、安心してください。年2回の書道パフォーマンスでは、自分たちで書く文字や音楽を決めて、パフォーマンスを盛り上げます。書道パフォーマンスの練習を通じて、部員の絆を深める大切な機会になっています。',
                'award': ['書道展出品','文化祭、文化部発表会で書道パフォーマンスを披露','今年の夏休みは児童館で書道パフォーマンスを披露'],
                'pr': '書道部が気になっている人は、ぜひ見に来てください！',
            },
            {
                'no': '11',
                'name': '漫画研究部',
                'kind': 'in',
                'place': '1−8HR教室',
                'day': '水(月１回)',
                'msg': '主な活動は、月一回の部誌『illustration space』の発行作業、あとは家でイラストを描いてくるのみ。</p><p>毎月1枚ペースです。文化祭・文化発表会に向けては漫画を描きます。</p><p>初心者も手練れも大歓迎。みんなにあなたのイラストを届けましょう。',
                'comment': '皆に自分の絵を見てもらう場があることで、イラストを描くモチベーションがすごく上がりますし、「部誌を手に取ってもらえるように、もっと良いイラストを！」と奮起させられ向上心も持てます。</p><p>また、漫画制作も意外に楽しいです。オリジナルの漫画を描くなどこの部に入らなければしなかったと思うので、機会を得られて良かったです。',
                'award': [],
                'pr': '・集まりが基本月に一回なので、ほぼ負担になりません。兼部大歓迎！',
            },
            {
                'no': '12',
                'name': '音楽部',
                'kind': 'in',
                'place': '音楽室・ピロティ・アストラホール',
                'day': '平日４日・休日１日',
                'msg': '皆さんこんにちは！音楽部です！私たちは2年生22人1年生18人＋助っ人4人の計44人で活動しています。</p><p>活動内容としてはコンクールに向けて限られた時間の中でみんなで声をひとつにして練習しています。</p><p>歌うのが好きな人はもちろんのこと、今まで音楽に縁がなかった人も楽しめます。<br>是非音楽室に来てね！',
                'comment': 'みんな仲良しでほのぼの平和に過ごせます。でも練習は真剣です。それでいて兼部もOKな許容範囲が広い部活だと思います。<br>コロナでカラオケに行けなくても音楽室に行けばみんながいて歌えます！楽しいです！<br> I.M.さん</p><p>文章として表すのが大変難しかったので拙い作文ですがあいうえお作文としてしたためさせて頂きました。<br>おん：音楽未経験者も楽しめる<br>が　：頑張り屋さんがいっぱい♡(兼部、生徒会)<br>く　：クラシックの合唱曲からJ-POPまでなんでも歌えるよ♬<br>ぶ　：部員全員仲がいい(男女問わず)<br></p><p>これが私の精一杯でした。ありがとうございました。<br>M.K.さん',
                'award': ['2019年 NHK全国学校音楽コンクール兵庫県大会 銀賞','関西合唱コンクール 金賞/全日本合唱コンクール 出場','｢交響詩ひめじ｣合唱コンクール 特別賞','2020年 兵庫県コンペティション 金賞＆審査員特別賞','県民ボランタリー活動賞'],
                'pr': '',
            },
            {
                'no': '13',
                'name': '吹奏楽部',
                'kind': 'in',
                'place': 'LL教室',
                'day': '平日5日・土',
                'msg': '長田吹奏楽部通称NBBは楽器経験者も未経験者も大歓迎です！</p><p>実際に高校でNBBに入ってから楽器を始めた部員もたくさんいます。人数も多くて友達もたくさんできる上に、サウンドも年々分厚くなっていて、これからどんどん成長していく部活です！</p><p>校内行事での演奏や地域のコンサートも盛り沢山!!中でも、定期演奏会では企画から演出まですべて部員の手で行います。</p><p>NBBのサウンドを一緒に作っていきませんか？',
                'comment': 'NBBでの活動は本当に楽しいです！</p><p>活動時間や環境に制限が多いですが、その分密度の濃い練習を目指して相談するのも部活動の1つ。自分たちで練習から作っていく高校の吹奏楽部は中学の頃とは別物！</p><p>大変だからこそ、練習中のちょっとした成長でも楽しくて心が踊ります♫</p><p>人数が桁違いに多い分友達もたくさんできて、部活が終わった後も楽しい時間が続きます。私はNBBに入って後悔したことは1度もありません！！',
                'award': ['2021年吹奏楽コンクール：銀賞'],
                'pr': '',
                
            },
            {
                'no': '14',
                'name': '演劇部',
                'kind': 'in',
                'place': '304教室',
                'day': '平日5日',
                'msg': '長田高校演劇部です！男子4人、女子4人の計8人で活動しています！</p><p>文化祭や大会など、年に数回公演があります。普段は公演に向けた練習や発声、滑舌練習などをしていますが、基本的にゆる〜い部活です。</p><p>役者、裏方どちらも大歓迎なので気になった方はぜひ演劇部へ！',
                'comment': '中3の秋、文化発表会、私の初舞台。演劇の面白さを知りました。</p><p>高校では迷わず演劇部に入部しました。毎日めっちゃ楽しいです！演劇ってお芝居のイメージがありませんか？それだけじゃないんです！</p><p>照明や音響、舞台美術、小道具、それから衣装。これらがあって初めて舞台ができます。面白い。どうですか？興味湧きません？</p><p>私たちと一緒に舞台を作りませんか？',
                'award': ['第44回兵庫県高等学校総合文化祭 演劇部門発表会 優良賞'],
                'pr': '',
            },
            {
                'no': '15',
                'name': '山岳部',
                'kind': 'out',
                'place': '高取山・摩耶山',
                'day': '平日５日・土',
                'msg': ' 突然ですが、山岳部は登山しているだけと思っていませんか？山岳部はただの運動部ではなく、天気図を書いたり、地形図を読み取ったりまさに文武両道を体現する部活です。また大会や合宿で仲間とともに高山に登る経験は一生の宝になります。入部お待ちしています！！',
                'comment': ' 山岳部はとても充実している部活動だと思います。なぜかというと普段は皆仲が良く楽しい雰囲気ですが合宿や大会になると1人1人が自分のやるべきことを果たすことができ、メリハリがあるからです。また、知識や技術は顧問の先生から受け継がれるのではなくて、代々先輩から受け継がれています。良い所はさらに後輩たちに伝え、改善すべき所は改善を重ねていっているという点も素晴らしい面です。',
                'award': ['近畿大会男子：7連覇','県総体女子：8連覇'],
                'pr': ' 部員の一人ひとりが個性的で、一緒にいてすごく楽しいです！また部員同士の交流を深める行事もたくさんあり、学年の幅を越えて仲良くなれます！！ツイッターやインスタもやっているのでぜひ見てみてください。',
            },
            {
                'no': '16',
                'name': '女子バレーボール部',
                'kind': 'out',
                'place': '体育館',
                'day': '平日５日・土',
                'msg': '私たち女子バレーボール部は、体育館で毎日元気に活動しています。経験者はもちろん、初心者のプレーヤー、マネージャーもいます。バレーボールは1人ではできないスポーツです。仲間と声を掛け合い、ボールを繋いで勝利を目指す、そんな競技だからこそ、女バレは深い信頼関係と友情を築くことができます。部活でもプライベートでも充実した毎日を送ることができます。最近では県大会に連続出場しており、より一層の成長が期待されています。あなたもノリに乗っている女バレの一員になりませんか？<br>体育館でお待ちしています！',
                'comment': ' 入部する前、上下関係がしっかりとあり、練習が厳しそうだという印象もあったが、練習を重ねていくうちにしんどさの中にある楽しさを得て、先輩後輩の関係性があるからこその仲の良さを実感しました。主体性を尊重した練習では、常に声と笑顔は絶えず、和気あいあいとした雰囲気です！時期に応じたイベントを企画したり、部員全員で遊びに行ったりすることもあって、私生活でも仲間と思いっきり楽しめるので「友達」よりも深い絆が出来ました！また、顧問の先生方は本当に誠実で、素晴らしい先生なので、先生方も含めていいチームだなと思っています！！',
                'award': ['2019年  兵庫県選手権大会出場','2020年  兵庫県選手権大会出場','兵庫県新人大会出場'],
                'pr': '楽しく充実した高校生ライフを送れる最高の部活です！<br>部員全員で高みを目指して、日々精進していきます！',
            },
            {
                'no': '17',
                'name': '卓球部',
                'kind': 'out',
                'place': '講堂',
                'day': '月・火・水・木・土',
                'msg': ' どーも卓球部です‼️<br>自分たちは月曜日から木曜日と土曜日に講堂で活動しています。</p><p>長田高校の卓球部の特色は自主性です。顧問の先生方から言われたことをただ鵜呑みにするのではなく自分で考えて実行していく、それをモットーにして活動しています。</p><p>高校での卓球は中学までとの卓球とは一線を画し、とてもスリリングで楽しいです。そんな卓球を皆さん堪能したくはありませんか？経験の有無を問わず新入生は大歓迎しますので是非是非機会が有れば講堂に足を運んでくださると幸いです‼️',
                'comment': ' この一年間半部活動を通しての1番の感想は、二足の草鞋の重要性です。</p><p>新入生の中には部活と勉強の両立について不安を持っている人も多いと思います。しかし自分は、部活をやっている方が勉強にもしっかり集中できるとこの一年間半で気付きました。</p><p>もちろん部活をやっていない方が勉強時間は確保できるかもしれませんが、人間、そんな莫大な時間を勉強にだけ捧げるのは簡単ではありません。部活をすることによって、体を鍛えて勉強のための根気を身につけ、限られた時間を有効に使えるよう集中して勉強に取り組めるようになります。そして勉強をすることで部活のありがたみを知ることができより真剣に部活に取り組めるようになります。</p><p>たとえしんどくても勉強も部活も、手を抜かす取り組むことがとても重要だと、自分は部活を通して気づけました。',
                'award': ['男子総体県大会出場'],
                'pr': ' 高校での卓球の雰囲気は、中学とは大きく変わります。</p><p>何より中学と違い惰性で部活に入る人が少ないので必然的に経験の有無を問わず、卓球に真摯に向き合える人が多いです。</p><p>もしかしたら中学の部活でそういった、なんとなくで部活をすることに、うんざりしている人もいると思います。そんな人は是非この部活に足を運んでみてください‼️',
            },
            {
                'no': '18',
                'name': '陸上競技部',
                'kind': 'out',
                'place': '神撫台グラウンド',
                'day': '月・火・水・金・土',
                'msg': '男女問わず部員同士の交流が多く、毎日楽しく活動しています！楽しいながらも真剣に取り組み、目標としている記録に向かって頑張っています！また、自分自身や記録に向き合える競技だからこそ達成感もあります！陸上部に興味がある人はぜひ覗いてみてください！',
                'comment': '個人がそれぞれ目標を持ち、その目標に向かって仲間と支えあい、時には相談に乗ってもらいながら一緒に頑張っています！<br>友達と、ライバルとして切磋琢磨しあうことで、自分や競技に真剣に向き合うことができ、大きく成長できていると感じます。また、目標を達成した時の達成感が大きく、魅力に溢れる競技だと思います！！',
                'award': ['第74回兵庫県高等学校陸上競技対校選手権大会 <br>男子三段跳：第5位<br>男子110mH：第8位<br>女子走幅跳：第3位<br>女子七種競技：第1位</li><li>第37回U20日本陸上競技選手権大会・混成競技<br>女子七種競技：第1位</li><li>第74回全国高等学校陸上競技対校選手権大会：近畿地区予選会<br>女子走幅跳：第3位<br>女子七種競技：第1位</li><li>令和3年度全国高等学校総合体育大会：秩父宮賜杯 第74回全国高等学校陸上競技対校選手権大会<br>女子七種競技：第1位'],
                'pr': '',
            },
            {
                'no': '19',
                'name': 'ハンドボール部',
                'kind': 'out',
                'place': '神撫台グラウンド',
                'day': '月・火・水・金・土',
                'msg': '  皆さんハンドボールと聞くと、中学の体育でやったことあるぐらいの知識しかないと思います。部活でやる本物のハンドボールはエネルギッシュで、運動が好きな人にはうってつけの楽しいスポーツです！</p><p>ハンドの醍醐味であるジャンプシュートなど、派手でカッコいいシーンが多いので女子生徒からモテるかも...？</p><p>部員のほとんどが高校から始めた初心者なので、「ルールもなんにもわかんない」という人も安心して下さい。個性豊かな楽しい先輩達と一緒に技を一緒に技を磨いて、強くなっていきましょう！',
                'comment': 'ハンドボール部の魅力は色々ありますが。1つあげるとすると部の雰囲気ですね。練習後など自由な時間はしょうもない話で盛り上がったりシャワー浴びながら恋バナしたり、先輩後輩や顧問の先生達との仲もよく、和気あいあいとした楽しいムードです。</p><p>しかしひとたび試合になると皆んな真剣になり、ハンドボールという競技に集中して雰囲気もピリッと引き締まります。そのオンオフって大事で、これをうまいこと実現するのは意外と難しいんです。楽しく活動することは1番大事ですが、スポーツび真剣に取り組んでこそ得られる楽しさというのも大事です。ハンドボール部ではその両方が得られ、おまけに勉強(もちろん恋愛にも)優しい環境なのでこれ以上なことはないでしょう。</p><p>部活によっては厳しすぎてしんどい、なんてことも聞きますが自分はハンド部に入ってそんなことは感じた記憶がないです。中学から高校へと環境がガラッと変わって不安な人は多いと思いますが、安心してハンド部に来てみて下さいね！',
                'award': ['神戸地区第2リーグ'],
                'pr': ' 部員はもちろん、マネージャー志望の子も大歓迎です！また部員は男女関係なく入部出来ます。先輩には女子生徒でもプレイヤーとして活動していた人もいました。</p><p>休日に活動は基本的に午前、テスト1週間前は原則休みです。運動が苦手、スポーツしたことない、どんな人でも大歓迎です‼︎</p><p>まずは気軽にハンドボール部を覗きに来てください！',
            },
            {
                'no': '20',
                'name': '剣道部',
                'kind': 'out',
                'place': '剣道場',
                'day': '月・水・木・金・土',
                'msg': ' 剣道部は現在男子6人女子4人で活動しています。剣道は比較的高校生から始める人が多く、この部の1年生も8人中7人が初心者として入部しているので、新しいことを始めてみたい、という方にも大歓迎です！</p><p>練習は短期集中型で、勉強との両立や他の部活との兼部も可能です！少しでも気になった方は是非剣道部を見学に来てみてください！！',
                'comment': ' 剣道は他のスポーツとは一線を画すような部分があり、それは審判の判断によって勝敗を決する、いわば審判の心を掴むことが重要であるという競技性にあると思っています。</p><p>部活動内でも、心を掴むため１つ１つの技を追求して、時間は短くとも密度のある練習に励んでいます。また、部員は9人と少なくはありますが、活動中でもそれ以外でも仲良く楽しく過ごしています。</p><p>また、学校生活を尊重して下さる顧問の先生方と短期集中型の練習のおかげで、僕は剣道以外にも色々な活動に力を入れることができています。',
                'award': ['令和3年度兵庫県総体に男女団体・女子個人が出場'],
                'pr': '「剣道やりたいけど防具一式を買うとなるとお金が…」というあなたへ！<br>長田高校剣道部には一定数の“貸し防具”が存在します！</p><p>数に限りはありますが、一部はこれを使って活動している部員もいるので、もしこのような人がいれば、まずは剣道場へ来てみてください！</p><p>体育館下の1階で待っています！！！',
            },
            {
                'no': '21',
                'name': '女子バスケットボール部',
                'kind': 'out',
                'place': '体育館',
                'day': '月・火・木・金・土',
                'msg': ' 中学生のみなさん、はじめまして。女子バスケ部キャプテンです。私たちは2年生8人、1年生8人、計16人で活動しています。</p><p>アピールポイントはとにかくくせがつよい。それぞれがそれぞれの個性を生かし合う。どうだこの巧みな技。少しでも興味を持ったそこのあなた、ぜひ女子バスケ部へ。</p><p>P.S.マネージャー大募集してます',
                'comment': ' 真面目なキャプテン、そこに遅れをとらない2名の副キャプテン。そして13人の愉快な仲間たち。時には全集中、時には体育館中に響き渡るような大きな声で爆笑。なんて素敵な部活なんだろう。</p><p>負けた方がゼッケンを持って帰るというだけのゼッケンじゃんけんは、先輩後輩関係なしで真剣勝負。本気で喜び、本気で悔しがる。なんて素敵な部活なんだろう。これからの成長が楽しみである。',
                'award': [],
                'pr': '',
            },
            {
                'no': '22',
                'name': '水泳部',
                'kind': 'out',
                'place': '夏:学校プール　冬:学校トレーニング室・神戸常盤アリーナプール',
                'day': '月・火・木・金・土',
                'msg': ' こんにちは。水泳部です！「人生陸だけとちゃう。」をモットーに女子7人（うちマネージャー1人）男子10人で学年、男女関係なく仲良く活動しています。初心者、経験者、マネージャー、誰でも大歓迎です！</p><p>「水泳部気になる！でも全然泳げへんから不安やなぁ…」と思っているそこのあなた！大丈夫‼︎先輩や顧問の先生が泳ぎ方を一から優しく教えてくれます！先輩の中には、入部当初は50m泳ぐので精一杯だったけれど今では試合で上位に入るまでに成長している人もいます。</p><p>また練習は平日約2時間、休日は午前中で終わるので部活と勉強の両立もできます。水泳部に入って楽しい高校生活を送りませんか？',
                'comment': ' 水泳部で活動していての感想を部員に聞いてみると、体力、忍耐力、精神力がつく、自分の限界に挑戦できる、部員の仲が良いなどの声があがりました。</p><p>正直に言うと、きつい練習もあります。しかし大変な練習の中でも頑張ろうと声をかけあったり、練習を頑張っている仲間を見て自分も頑張ろうと思える、そんな素敵な雰囲気が水泳部にはあります。',
                'award': ['<strong>アーティスティックスイミング</strong><br>全国大会：1名出場</li><li><strong>競泳</strong><br>兵庫県高等学校総合体育大会：2名個人種目で優勝・入賞<br>近畿高校大会：2名出場<br>全国高校大会：1名出場<br><br><strong>神戸市高等学校水泳競技大会</strong><br>女子フリーリレー：3位<br>女子メドレーリレー：3位<br>男子フリーリレー：7位<br>男子メドレーリレー：6位'],
                'pr': ' この部紹介を見てもっと水泳部の様子が知りたい！と思った方は水泳部1年生のInstagramアカウントをご覧ください。来年の春、皆さんが入部するのを待っています！',
            },
            {
                'no': '23',
                'name': '男子バスケットボール部',
                'kind': 'out',
                'place': '体育館',
                'day': '平日4日・休日1日',
                'msg': ' 僕達男子バスケットボール部は県ベスト16を目標に日々練習に励んでいます。</p><p>バスケが好きで頑張れる人、初心者だけど本気で打ち込みたい人、またマネージャーも募集しています。本気でバスケがしたい人はぜひ男子バスケットボール部へ！',
                'comment': ' 僕がバスケ部にいて思うこと、それは「バスケは楽しい」ということです。</p><p>しんどい練習や負け続きの苦しい時期を乗り越えた先の勝利はものすごく嬉しくて、楽しくて、言葉で表しようがありません。</p><p>また、バスケを通して個性豊かな仲間もできます。楽しいことも辛いことも一緒に味わって、最高のバスケライフになること間違いなし！',
                'award': [],
                'pr': '朝練、昼練もできるのでバスケ中毒の人はぜひ！！',
            },
            {
                'no': '24',
                'name': '女子バドミントン部',
                'kind': 'out',
                'place': '体育館・講堂・ピロティ',
                'day': '月・火・水・金・土',
                'msg': ' こんにちは^o^女子バドミントン部です！私たちは、顧問の佐野先生、上河先生、家城先生、入江先生の温かいご指導のもと、75回生11人、76回生8人、計19人で楽しく活動中です！</p><p>1年生の夏頃までは、筋トレ、体幹、階段ダッシュなどのトレーニングをメインに、基礎体力を向上させます。ときには心が折れそうになることもありますが、乗り越えられると大きな達成感が得られます。</p><p>部員同士声を掛け合って厳しいトレーニングを乗り越えるからこそ、日々のトレーニングにやりがいを感じ、充実した時間を送っています！</p><p>中学生の皆さん！長田高校女子バドミントン部で私たちと一緒に汗を流しませんか？初心者の皆さんも大歓迎^ ^優しい先輩が基礎から丁寧に教えてくれるので安心してください！<br>皆さんの入部を心からお待ちしています！！',
                'comment': ' 私たちの1番の魅力は先輩も後輩も部員みんなの仲が良く、雰囲気が良いところです。</p><ul><li>先輩が本当に優しくて話しやすいです。廊下で先輩に声をかけてもらって嬉しかった！</li><li>1年生仲良さそうで嬉しい☺︎一生懸命でめっちゃかわいい☺︎<li>バド部に入ってこの仲間に出会えて良かった！</li></ul><p><br>こんな仲間がいるから、しんどい練習もお互い切磋琢磨支え合って、高めあって乗り越えられていると思います。</p><p>今はコロナ禍ということもあり、試合のない時間はモチベーションを保つことが難しいですが、部員全員で１つになって試合で良い結果を残せるように頑張ります！！',
                'award': [],
                'pr': '　私たちはほとんどの練習メニューを自分たちで組んでいたり、お互いアドバイスし合うなど、自主性を尊重して活動しています。だから、自分たちが本当にやりたい練習をできます！</p><p>年に2〜3回男子バドミントン部と一緒に紅白戦をするなど、男子バドミントン部と交流しています！<br>朝練、昼練は、基本2年生優先で自主的に行っています！',
            },
            {
                'no': '25',
                'name': '男子ソフトテニス部',
                'kind': 'out',
                'place': 'テニスコート',
                'day': '平日5日・土',
                'msg': 'こんにちは！男子ソフトテニス部です！僕たちは2年生11名1年生5名の計16名で毎日楽しく、また目標である近畿大会出場に向けて全力で練習に励んでいます！</p><p>僕たちが新入生に求める入部条件はたった2つ！！テニスを愛する気持ちと部員と共に目標を目指して頑張っていける団結力です！</p><p>僕たち一同新入生の皆さんの入部を心待ちにしています！ぜひぜひ入部よろしくお願いしますっっ！',
                'comment': '(sくん)<br>僕は男子ソフトテニス部に入部して良かったと思っています！普段の部活動の雰囲気もよく、みんな一生懸命にかつ、楽しく練習に取り組んでいます。先輩、後輩同士の仲も良くて、同学年の仲も最高です！</p><p>た、一人一人の個性が強く毎日あっていても笑いが絶えることがなく、日々新しい発見もあり刺激のある日々を送っています。練習は近畿大会出場という目標に向かって一致団結して頑張ってます！</p><p>でも決してキツすぎるという訳ではなくテスト前は自主練になったりしていい部活だなと思ってます！<br>僕は中学校からソフトテニスをしていて、表彰などはあまり取ったことはありませんがレベルの高い仲間達(高校に入って急に覚醒した人もいます！部長とか…)と一緒に頑張っていきたいです。</p><p>皆さんもぜひ高校生活をソフトテニスと共に送ってみませんか？？',
                'award': ['団体戦<br>県大会新人戦に出場<br>県総体に出場</li><li>個人戦(ダブルス)<br>神戸市総体ベスト32強(東　香西ペア)<br>神戸市新人戦ベスト32強(東　長山ペア)<br>長田区大会優勝、準優勝、ベスト8</li><li>個人戦(シングルス)<br>東弘聖<br>神戸市新人戦　準優勝<br>兵庫県新人戦　ベスト16'],
                'pr': '部員たちに聞いた！！ソフトテニス部のいいところランキング〜！</p><ul><li>第1位！　先輩と後輩の仲良すぎ！！<br>もう仲が良すぎて毎日部活が楽しいです！部活終わりに一緒にウイイレをする人たちも…部室も賑やかです！</li><li>第2位！　勉強と部活の両立ができる！！<br>テスト期間は自主練になるので、部活だけじゃなくて勉強もがんばることができます！</li><li>第3位！　日々の校内戦でモチベをキープできる！長田のソフトテニス部といえば？？と言ったらもちろん校内戦！(そうだよな？圧)()公式戦がない時も校内戦のおかげで実力を伸ばせます！</li></ul><p><br>仲間と切磋琢磨して頑張ろう！',
            },
            {
                'no': '26',
                'name': '器械体操部',
                'kind': 'out',
                'place': '体育館・トレーニング室',
                'day': '月・火・木・金・土',
                'msg': 'やあ、私は体操部員。ああ、それは私のピータンだ。ところで、君は体操ってなんだか辛そう、と思うだろうか？詳しい説明はできないが、そんなことはないし楽しい部活だ。字数もないし、最後に一言。<br>来年また会おう。',
                'comment': '体操部は、部員一同和気あいあいと活動しています。しかし決してサボっているわけではありません。やるときはやる、楽しむときは楽しむ、というようにメリハリを意識し活動しています。僕はこのような環境下で仲間とともに部活動ができることに感謝しています。そして充実した生活を送る、つまりリア充であり続けたいと思います。',
                'award': ['2021神戸市総体 団体2位','同兵庫県総体 団体5位'],
                'pr': '完全週休二日制<br>兵庫高校等との合同練習あり<br>コーチもいます！',
            },
            {
                'no': '27',
                'name': '女子ソフトテニス部',
                'kind': 'out',
                'place': 'テニスコート',
                'day': '平日5日・土',
                'msg': '私たち女子ソフトテニス部は2年生10人、1年生5人の計15人で活動しています。</p><p>基本平日5日、土日はどちらか1日の週6日活動しています。練習時間は平日、休日3時間程度です。（練習試合などで全日の場合もあります）</p><p>経験者はもちろん、初心者さんも大歓迎です！！実際に2年生に、初心者で入部した人が3人いますがとても上達しています！</p><p>部員みんな仲良く、練習は一生懸命できるとても良い部活です！</p><p>みなさんの入部お待ちしております！',
                'comment': '毎日太田先生のご指導のもと、県大会を目指せるようなハイレベルな練習を行っています！</p><p>しんどいメニューや辛いこともありますが、メンバー全員で支え合える楽しい部活です！部員皆クセ強めで、どんな厳しい練習でも、メンバーで支え合って、県大会目指して頑張っています！</p><p>部員全員が仲良くて、練習のオフの日などは遊びに行ったりなど、本当に楽しく過ごせています！',
                'award': ['神戸市新人大会　個人戦ダブルス<br>　新小田・中井ペア　ベスト16（兵庫県新人大会出場）</li><li>神戸市新人大会　個人戦シングルス<br>　新小田　ベスト16（兵庫県新人大会出場）</li><li>神戸市新人大会　団体戦　ベスト8（兵庫県新人大会出場）</li><li>兵庫県新人大会　個人戦<br>　新小田・中井 ベスト16（近畿インドア大会出場権、ハイスクールジャパンカップダブルス、シングルス県予選大会出場権獲得）</li><li>兵庫県シングルス大会<br>　新小田　ベスト16（ハイスクールジャパンカップシングルス県予選大会出場権獲得）</li><li>近畿インドア大会　個人戦<br>　新小田・中井ペア　2回戦進出</li><li>神戸市大会（兵庫県総合体育大会予選）個人戦<br>　佐々木・中井ペア　ベスト32（兵庫県総合体育大会出場）</li><li>県民大会少年の部　個人戦<br>　中井・新小田ペア　ベスト32'],
                'pr': '部員内の仲の良さならどの部にも負けません！！',
            },
            {
                'no': '28',
                'name': '男子バドミントン部',
                'kind': 'out',
                'place': '体育館',
                'day': '月・火・水・金・土',
                'msg': 'こんにちは、男子バドミントン部です‼️</p><p>現在は 2年生12人一年生8人で活動しています。ほぼ全員が高校からバドミントンを始める初心者です。そのため皆が同じスタートラインからスタートできます。</p><p>「公園で友達と遊びでバドミントンをやっていて楽しかった」そんな些細なことでも構いません。</p><>少しでも、興味があればチャレンジしてください。皆さんのことをお待ちしています‼️',
                'comment': '<p>バドミントンって楽なスポーツだと思ってませんか？そんなことはなく、試合中コートの中を縦横無尽に動き回る、以外とアクティブでハードなスポーツなんです。でも、相手の裏を書いたショットやスマッシュが決まったときはすごくいい気分が味わえます。</p><p>最初はそもそもラケットを握らせてもらえなかったり、打ち始めでもなかなかシャトルに当たらなかったりと辛い思いもします。が、今はそれを乗り越えて仲間と打ち合いをするのがとても楽しいです。</p><p>部員も仲が良く切磋琢磨し合いながら日々楽しんで部活を過ごせています。皆さんも興味があればぜひきてみてください‼️',
                'award': [],
                'pr': '',
            },
            {
                'no': '29',
                'name': '女子硬式テニス部',
                'kind': 'out',
                'place': 'テニスコート',
                'day': '平日4日・休日1日',
                'msg': '中学生のみなさん、私達硬式テニス部はなんといっても、平日1日・土日どちらかoff・テスト1週間前からoffの超ホワイトで勉強と部活を両立しやすい部活です。</p><p>また「硬式テニス」は初心者の人や少し運動が苦手な人でも取り組みやすいスポーツです。実際、私たちの中では13人中5人が中学の頃はテニスをしていませんでした。</p><p>テニスは、個人戦・団体戦の2つの試合があります。個人戦には1年生の初めから必ず全員出場できます。団体戦は、校内の仲間と競い合ってメンバーを決めるので仲間と切磋琢磨する良い機会になり、仲間との絆も深まります。</p><p>そんな硬式テニス部の良いところはまだまだ語りきれていません。少しでも興味のある人はぜひ、見学に来てください！部員一同心からお待ちしています！！',
                'comment': '私達硬式テニス部はとにかく個性が強いです。2年間共に部活してきましたが、毎日の休憩中のおしゃべりは飽きることなく、大笑いしています。</p><p>そんな仲間たちは性格だけでなくテニスのプレーにもそれぞれの個性があり、全員を攻略するのは至難の業だと思います。笑</p><p>テニスは基本個人プレーなので自分との戦いです。試合では良くも悪くも自分の練習の成果が全てプレーに出ます。思い通りに打てない時や上手くいかない時はとても悔しいです。</p><p>しかし、そんな時、心の励みになるのは友の存在です。ダブルスは2人で力を合わせてプレーし、団体戦では学校が一つのチームとなって戦います。<br>仲間がプレーしているのを応援したり、試合に勝ったら一緒に喜んだり、時にはなぐさめたり…。どれも素敵な青春の1ページだと思います。</p><p>私は硬式テニス部に入って個性豊かな仲間に出会えて本当に良かったなと思います。これからも最高の仲間と共に総体まで全力で駆け抜けます！',
                'award': ['兵庫県予選大会：シングルス・ダブルス共に決勝進出','4部リーグ'],
                'pr': '',
            },
            {
                'no': '30',
                'name': 'サッカー部',
                'kind': 'out',
                'place': '神撫台グラウンド',
                'day': '火・水・木・金・土・日',
                'msg': 'サッカー部は県トップを目指して練習に励んでいます。先輩や仲間に刺激されてサッカーの技術だけでなく人間として大きく成長することができます。</p><p>本気で勝ちを目指してたい人、サッカーが大好きな人、是非サッカー部で一緒に頑張りましょう。',
                'comment': '日々の学校生活も怠らず部活動に励めている部員が多いと思います。最初は部活動と勉強の両立が難しいかもしれませんが、精神面、肉体面でタフになりそれを勉強にも活かすことができていると感じます。</p><p>次第に責任感も出てきて行事やクラスの活動にも積極的に参加することができるようになりました。</p><p>サッカー部としての自覚が僕達の成長に繋がっていると思います。',
                'award': ['令和3年度：県リーグ所属'],
                'pr': '',
            },
            {
                'no': '31',
                'name': '空手道部',
                'kind': 'out',
                'place': '柔道場',
                'day': '月・火・水・木・金・土',
                'msg': '新しいことに挑戦したい人、もともと入るつもりダッと思ってくれてる人、ようこそ長田高校空手道部へ！</p><p>私たちは、部員27名（男女、経験者・初心者関係なし）で楽しく、お互い切磋琢磨しながら、より上を目指して練習しています！</p><p>練習では形と組手どちらも扱います。夏には合宿もあり（今年はコロナで中止になりましたが…）、行事も豊富です！皆さんの入部お待ちしています！',
                'comment': '<strong>経験者のコメント</strong></p><p>私は小学生の頃から空手を習っていましたが、毎日の部活動は刺激の連続です！<br>高校で空手を始めた部員が、向上心を持って熱心に練習する姿を見て、さらに頑張ることができています。<br>また、練習メニューを自分たちで考えたり、部員同士で教え合ったり、という自主性の高さもこの学校の空手道部にしかない魅力です。<br>初心者はもちろん、経験者も、空手道部に入ると空手が大好き！になります。</p><p><strong>高校で空手を始めた人のコメント</strong></p><p>私は初心者ですが、空手は、練習すればするほどできることが増えるので、とても楽しいです！<br>個人競技で初心者が多い部活だからこそ、部員同士の声掛けや練習の雰囲気を大切にしています。<br>空手道部には一人一人を尊重する空気感があるので、自分の思うままに生きる人が多く、私も自分らしく活動できることを、幸せだなぁ！と感じています。<br>空手道部は、誰が入っても、青春を過ごすのにもってこいの、最高に充実した部活です！！',
                'award': ['<h5>令和2年度神戸市高等学校秋季空手道大会</h5>男子団体形：第3位<br>女子団体形：第5位<br>男子個人形：第1位・第5位','<h5>令和2年度兵庫県高等学校空手道新人大会</h5>男子団体形：第3位<br>女子団体形：第5位<br>女子団体組手：ベスト8<br>男子個人形：第1位・第7位<br>女子個人形：第7位','<h5>第40回全国高等学校空手道選抜大会</h5>男子団体形：ベスト16<br>男子個人形：第5位','<h5>令和3年度兵庫県高等学校総合体育大会</h5>男子団体形：第3位<br>女子団体組手：ベスト8<br>男子個人形：第1位・ベスト8'],
                'pr': '',
            },
            {
                'no': '32',
                'name': 'ダンス部',
                'kind': 'out',
                'place': 'ピロティ・講堂3階・4階',
                'day': '火, 水, 木, 金, 土',
                'msg': 'こんにちは！ダンス部です！私たちは主に創作ダンス、リズムダンス、チアダンスをしています。学校行事や、大会などで日々の練習の成果を発表しています。充実した高校生活を送りたいと思っている人はぜひ入部してください！初心者の人も大歓迎です！お待ちしています！',
                'comment': '特に創作ダンスは日々の暮らしの中の素朴な疑問を体で表現し、想いを伝えるものです。その制作過程においてたくさんのミーティングを重ねます。自分にはない意見を聞いたり、違う角度からの発想を教えてもらったりすることで想像力や、思考力がすごく身につきます。そして何よりメンバーとの絆の深さはダンス部の魅力です！長い時間を共にしお互いに信頼し合い、支え合う関係を築けていることは本当に誇りに思います！',
                'award': ['第32回全日本高校・大学ダンスフェスティバル（神戸）：神戸市長賞(全国4位入賞相当)','第33回同大会：入選','令和3年度県高校総体第21回兵庫県高等学校ダンス大会：第3位','令和2年度兵庫県高等学校ダンス新人大会：第4位','その他：文化祭・体育祭・文化部発表会等各種学校行事、地域イベントにて作品発表'],
                'pr': 'ダンス部は未経験者の人もたくさんいます。きっと最高の仲間と最高の時間を過ごせると思います！誰でも大歓迎なので、ぜひ入部してください！！！',
            },
            {
                'no': '33',
                'name': '男子硬式テニス部',
                'kind': 'out',
                'place': 'グラウンドテニスコート',
                'day': '月, 火, 水, 木, 金, 土',
                'msg': '中学生の皆さんこんにちは！男子硬式テニス部です！僕達の部活はテニス経験の豊富な部員から初心者までさまざまで、互いに教え合ったりと、とても良い雰囲気で練習しています。そして何より充実した高校生活には充実した部活動が必要不可欠！高校からテニスを始めたい人、高校でさらにテニスが強くなりたい、活躍したい人は是非硬式テニス部に入部して高校生活、青春を駆け抜けよう！',
                'comment': '男子硬式テニス部はとても仲が良くて面白い人がたくさんいます！テニスが上手な人もいて、一緒にテニスも上手くなりつつ、時には楽しく、時には引き締まった部活をすることができます！初心者でも頑張ればどんどん上手くなって大会でも勝てるようになります！少しでもテニスしてみたいな！と思った方は一度でも来てみてください！！！',
                'award': ['2021年総体団体県ベスト16','個人シングルス本戦出場2名','2021年新人戦個人ダブルス本戦出場1組'],
                'pr': '男子硬式テニス部は75回生4人、76回生5人で週に6日活動しています。部活では、チームに必要なものを話し合い自分たちで練習メニューを決めています。部活中は先輩、後輩関係なくアドバイスをし合いながら真面目に活動し、休憩中やオフの時は冗談を言って笑ったり和気藹々とした雰囲気で活動しています。人数は少ないですが、その分1人1人がしっかりとした意志を持ち支えあっています。部員全員が技術面はもちろんのこと精神面も成長出来るよう、これからも頑張っていきます。',
            },
            {
                'no': '34',
                'name': '野球部',
                'kind': 'out',
                'place': 'グラウンド',
                'day': '火・水・木・金・土',
                'msg': '皆さんこんにちは野球部です。</p><p>僕たちのチームモットーは「文武不岐」といい部活と勉強とを両立させる事を目標としています。</p><p>一生に1度の高校生活！青春するなら部活も勉強も忙しいぐらいが丁度良いはず！是非僕たちと一緒にこの野球部を通して青春しませんか！',
                'comment': '長田高校野球部に入って抱いた感想です。</p><p>僕はこの野球部に入って様々な事を学び成長できました。それは技術面だけでなく多くは精神面での成長です。顧問の永井先生をはじめ部長の相田先生や多くのコーチの方々のご指導の下、野球を通して社会に通用する人としての基礎を学ぶ事ができます。</p><p>20人と少ない人数を生かし効率の良い練習を行い近年では強豪私学とも渡り合える力を付けてきました。</p><p>勉強との両立は大変ですが一生に1度の高校生活！僕たちと一緒に忙しい青春してみませんか！',
                'award': ['令和2年度秋季兵庫県野球大会：3位','令和2年度秋季近畿地区野球大会出場'],
                'pr': '</p><ul><li>昨年度より髪型指定が廃止されました！<br>野球部員として相応しい髪型なら自由です！</li><li>設備としても他の公立高校に比べるとかなり整っています！</li></li><p>',
            },
            {
                'no': '35',
                'name': '男子バレーボール部',
                'kind': 'out',
                'place': '',
                'day': '週5〜6日',
                'msg': '僕たち男子バレー部はプレイヤー23人、マネージャー5人の計28人で活動しています。チームの雰囲気も良く、楽しく、しかし結果にこだわりながら毎日練習しています。ぜひ男子バレー部に入って充実した学校生活を送りましょう。',
                'comment': '僕が入部して最初に感じたことは、男子バレー部はすごく充実した部活動だということです。練習では一人一人が自分の課題を持ちながら練習していて、ただの公立高校とは思えないほど質の良い練習ができているし、全国常連校を始め、多くの強豪校とも練習試合をしています。また、先輩後輩の仲も良いので楽しんで活動できると思います。',
                'award': ['令和3年度 兵庫県高等学校総合体育大会：第5位','令和3年度 近畿高等学校優勝大会：出場'],
                'pr': '',
            },
            {
                'no': '36',
                'name': '放送委員会',
                'kind': 'committee',
                'place': '放送室',
                'day': '平日5日',
                'msg': '年に2回の大会に向けて、普段は発声練習や番組制作をしています！</p><p>今年度は全国大会進出を果たしました。次も全国に行くことを目指して、日々活動しています。</p><p>学校行事では音響・アナウンスを担当。また、毎週月曜日にお昼の放送「アストラジオ」をオンエアしています。暇な時は遊びで声劇をしたりして楽しんでいます。</p><p>活動のどれか一つでも興味が湧いたなら、ぜひ放送室におこしください。',
                'comment': 'アナウンス、朗読に声劇、脚本制作そしてパソコンでの動画、音声編集、アフレコ収録、はたまた行事の音響など、色んなことができて楽しいです。</p><p>大会に向けて個人の「読み」を磨き上げたり、ドラマを皆で協力して作り上げたりなど。様々かつ貴重な経験がたくさん得られるので、部活動ライフが充実しています。</p><p>あと、委員会のマスコットのゆうたくんが可愛くて和みます。',
                'award': ['第68回NHK杯全国高校放送コンテスト兵庫県大会<br>○決勝<br>創作テレビドラマ部門「協奏曲」：優秀賞(全国大会進出)<br>朗読部門1名：奨励賞<br><br>○準決勝<br>創作テレビドキュメント部門「繋〜そして未来へ〜」：奨励賞<br>創作ラジオドラマ部門「君がいる意味」：奨励賞<br>アナウンス部門1名・朗読部門2名：出場'],
                'pr': '</p><ul></li><li>兵庫県広報の取材によるYouTube出演(詳しくは長田高校HP、部活動の放送委員会へ）や、ラジオ関西の番組への出演もしました。<br></li><li>アナウンスで上位入賞すると甲子園の司会もできます。<br></li><li>話すのが苦手な人、機材が分からない人も大丈夫です！<br></li><li>初心者歓迎！</li><li>兼部も歓迎！</li></ul><p>',
            },
            {
                'no': '37',
                'name': '図書委員会',
                'kind': 'committee',
                'place': '図書館',
                'day': '昼休み(日替わりの図書当番)',
                'msg': "＿人人人人人人人人人人人人人人＿<br>＞　図書委員会を、舐めるな。　＜<br>￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y￣</p><p>私たち図書委員会の活動は、<br>・図書当番や書庫整理<br>・図書館だよりの制作<br>・文化祭・文化部発表会での展示<br>・ビブリオバトル大会などへの出場<br>・SNSによる活動内容の発信<br>など、多岐にわたります。</p><p>そして、忘れてはならないのが…<br>＿人人人人人人人人＿<br>＞　図 書 館 改 革　＜<br>￣Y^Y^Y^Y^Y^Y^Y￣<br>現在 一丸となって進めている図書館興しプロジェクトです。</p><p>新しい展示を企画したり、新しい設備を手作りしたり、館内を装飾したり…<br>より使いやすく、より楽しい図書館を目指して、各自が策を練って取り組んでいます！</p><p>さぁ、君も図書委員会で、充実した毎日を送ろう！＼＼//٩( 'ω' )و //／／ </p>",
                'comment': '「マイペースに活動できて楽しいです」M.Mさん(館内装飾班/Twitter係)</p><p>「いつもは本の展示だけですが、今年からはしおり作り体験をはじめ、新しいことを沢山盛り込んだ文化祭の展示にしたいと思います！パワーアップする予定の図書委員会の展示をお楽しみに〜！」K.Wさん(文化祭企画班)</p><p>「自分たちがやりたい！と思ったことを、自分たちで計画して、自分たちで達成できる。こんなにワクワクする"改革"は、図書委員会ならではだと思います！( ´∀｀)」T.Hさん(部長/入り口改革班)',
                'award': ['令和2年度 兵庫県高等学校ビブリオバトル大会 優勝','(ちゃんと実績もあるんやで(　-`ω-)ﾄﾞﾔｧ'],
                'pr': '兼部率、ほぼ100%。中には3,4個 兼部している人も。</p><p>兼部先例）吹奏楽部、音楽部、バドミントン部、山岳部など<br>メインの部活のかたわら、図書委員会にちょくちょく来るって人がほとんどです！<br>要するに、"ホワイト"な部活なのです！</p><p>ｽｺﾞｰｲ･:*+.\(( °ω° ))/.:+',
            },
            {
                'no': '38',
                'name': '新聞委員会',
                'kind': 'committee',
                'place': '3F部室',
                'day': '不定',
                'msg': '新聞委員会です！長田高校に入ろうと思っているそこのあなた！是非入学したら新聞委員会に入って下さい！</p><p>運動部の兼部は新聞委員会！文化部の兼部も新聞委員会！70年以上続く伝統ある委員会で、世の中と長田高校の今を伝える委員会です。</p><p>文章や新聞が好きな人、作文を書くのが得意な人は適性ありです！皆さんの入学、そして入部を楽しみにしています！',
                'comment': '新聞委員会の新聞発行の頻度は少ないですが、一号一号部員達が良い新聞になるよう記事をよく推敲して、発行しています。</p><p>優秀な先輩方が引退され、いざ自分たちだけで作成すると大変でしたが、無事1学期末に発行することができました。</p><p>幸い今年度は予想以上に新入部員が多く、書き手が増えたので、より多様性に富んだ記事、新聞を作っていきたいと思います。',
                'award': [],
                'pr': '',
            },
            {
                'no': '39',
                'name': '文化祭スタッフ',
                'kind': 'committee',
                'place': '文スタルームなど',
                'day': '秋頃〜文化祭',
                'msg': '文化祭スタッフです！その名の通り毎年５月に行われる文化祭での準備、運営等を行います。</p><p>ポスターやパンフレット、テーマの幕などを制作したり、会場設営、タイムテーブル設定をしたり、さらには新しい企画を行なったり…</p><p>何にも縛られず、自分たちで文化祭を作ることができ、とても楽しいです！',
                'comment': '',
                'award': [],
                'pr': '長田高校の一大イベントである、文化祭を作りあげましょう！',
            },
            {
                'no': '40',
                'name': '体育祭スタッフ',
                'kind': 'committee',
                'place': '不定',
                'day': '〜体育祭',
                'msg': '体育祭スタッフ（略して体スタ）ってなーに？</p><p>答えは簡単、９月に行われる体育会の運営を行います。体育会スタッフは毎年７月頃に募集されます。体育祭準備として、各種競技決め、プログラムの作成などを行い、当日は司会進行、道具の出し入れなどを行います。</p><p>あなたも是非、体育祭スタッフへ！！',
                'comment': '',
                'award': [],
                'pr': '',
            },
            {
                'no': '41',
                'name': '生徒会執行部',
                'kind': 'committee',
                'place': '生徒会室など',
                'day': 'フレキシブル',
                'msg': '長田生徒会執行部では行事の企画・制作〜運営、生徒会予算の作成を初め、学校のための様々な活動をしています。<br>各役員が主体的に参加し、生徒の学校生活の充実に貢献しています。',
                'comment': '高い能力を持った仲間と作り上げていくからこそ、できることのスケール、やりがいには限界がありません。<br>広報・行事などを通して”長田らしさ”を作り上げていくことは非常に大きなやりがいとなります。',
                'award': [],
                'pr': 'この特設Webサイトも私たちが企画立案し、制作しています。',
            }
        ];
        let listCode = '';
        club_data.forEach(element => {
            // 説明文をカード用に20文字で区切る
            const desc = element['msg'].slice(0, 20) + '...';
            listCode += 
            `<div 
                class="cards__item"
                data-modal-btn="true"
                data-card-filterer="${element.kind}"
                data-card-number="${element.no}"
                role="button"
                tabindex="0"
                aria-label="${element.name}の詳細を表示する"
            >
                <img class="cards__img" src="assets/images/club/${element.no}/01.jpg" alt="${element.name}の画像" width="200" height="150">
                <div class="cards-cont">
                    <h5 class="cards-cont__ttl">${element.name}</h5>
                    <p class="cards-cont__description">${desc}</p>
                </div>
            </div>`;
        });
        targetArea.insertAdjacentHTML('beforeend', listCode);
        const clubModal = new Modal({
            type: "club",
            modal: ".modal",
            modalOpenButton: "[data-modal-btn=true]",
            modalCloseButton: "[data-modal-closer=true]",
            modalContainer: ".modal__container",
            template: `<nav class="modal__header">
                            <div class="status-line"><span class="status-line__liner"></span></div>
                            <h4 data-modal-info="name"></h4>
                            <div class="page__btn page__btn--prev" role="button" tabindex="0" aria-label="次のページへ"></div>
                            <div class="page__btn page__btn--back" role="button" tabindex="0" aria-label="前のページへ"></div>
                        </nav>
                        <div class="club-modal">
                            <article class="club-modal__inner">
                                <div class="club-modal__image">
                                </div>
                                <div class="nhs-block">
                                    <h4 class="art-ttl--feature" data-modal-info="name"></h4>
                                    <p data-modal-info="pr"></p>
                                    <dl class="info-circle">
                                        <div class="info-circle__item">
                                            <dt><i class="fas fa-map-marker-alt"></i></dt>
                                            <dd data-modal-info="place"></dd>
                                        </div>
                                        <div class="info-circle__item">
                                            <dt><i class="fas fa-clock"></i></dt>
                                            <dd data-modal-info="day"></dd>
                                        </div>
                                    </dl>
                                </div>
                                <section class="nhs-block">
                                    <h5 class="block-ttl--base">メッセージ</h5>
                                    <p data-modal-info="msg"></p>
                                </section>
                                <section class="nhs-block">
                                    <h5 class="block-ttl--base">現部員のコメント</h5>
                                    <p data-modal-info="comment"></p>
                                </section>
                                <section class="nhs-block modal__award--hide">
                                    <h5 class="block-ttl--base">実績</h5>
                                    <ul data-modal-info="award">
                                    </ul>
                                </section>
                            </article>
                        </div>`,
        });
        // フィルターの呼び出し
        const filterClicked = new Filter({
            filterButtons: ".filter-btn",  //  フィルターボタンのクラス名
            filterTargets: "[data-card-filterer]",  //  フィルター対象の要素のデータ属性
            hideCardClass: "cards__item--hide",   //  非表示のカードに付与されるClass名
            activeButtonClass: "filter-btn--active",  //  アクティブなボタンに付与されるClass名
        });
        let clubNumber = 0;
        const entirety = club_data.length;
        const modal = document.querySelector('.modal');
        const container = modal.querySelector('.club-modal');
        const fadeEffectTargets = [modal.querySelector('.club-modal__inner'), modal.querySelector('.modal__header h4')];
        const info_tgt = modal.querySelectorAll('[data-modal-info]');
        const statusLiner = modal.querySelector('.status-line__liner');
        const nextButton = modal.querySelector('.page__btn--prev');
        const prevButton = modal.querySelector('.page__btn--back');
        const modalOpenTrigger = document.querySelectorAll('[data-modal-btn=true]');
        // スライダーバー
        function modalLiner(clubNumber) {
            const currentClubNumber = Number(clubNumber) + 1;
            const currentPercent = (currentClubNumber / entirety) * 100;
            statusLiner.style.width = `${currentPercent}%`;
        }
        // ページ切り替えのエフェクト
        function clubModalPaging(direction) {
            buttonToggleDisplay();
            fadeEffectTargets.forEach(element => {
                element.classList.add('page__fade-item');
                element.style.opacity = '0';
                if (direction === 'next') {
                    element.style.transform = 'translateX(-20px)'
                } else if(direction === 'prev') {
                    element.style.transform = 'translateX(20px)'
                }
                setTimeout(()=> {
                    contentWrite();
                    container.scrollTo(0, 0);
                    if (direction === 'next') {
                        element.style.transform = 'translateX(20px)'
                    } else if(direction === 'prev') {
                        element.style.transform = 'translateX(-20px)'
                    };
                }, 200);
                setTimeout(() => {
                    modalLiner(clubNumber);
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)'
                }, 400);
            });
        }
        function contentWrite() {
            // 実績データの配列の有無で要素の可視性を切り替え
            if (club_data[clubNumber].award.length === 0) {
                document.querySelector('.modal').dataset.awardHide = "true";
            } else {
                document.querySelector('.modal').dataset.awardHide = "false";
            };
            info_tgt.forEach(target => {
                // [data-modal-info]で指定されたキー
                const contentKey = target.dataset.modalInfo;
                // キー名に対応するのデータ
                let data = club_data[clubNumber][contentKey];
                if (contentKey === "award") {
                    // キーが[award]の場合には、リスト形式に展開する
                    let res = '';
                    data.forEach(listItem => {
                        res += `<li>${listItem}</li>`
                    });
                    data = res;
                }
                target.innerHTML = data;
            });
            const image_source = `<img src="assets/images/club/${clubNumber}/01.jpg">`;
            const image_tgt = container.querySelector('.club-modal__image');
            image_tgt.innerHTML = image_source;
        }
        // カードを押したときにモーダルを表示する
        modalOpenTrigger.forEach(element => {
            element.addEventListener('click', () => {
                clubNumber = Number(element.dataset.cardNumber);
                clubModalPaging('none');
            });
        });
        function prevPage() {
            clubNumber -= 1;
            clubModalPaging('prev');
        }
        function nextPage() {
            clubNumber += 1;
            clubModalPaging('next');
        }
        // 前後のスライド有無に応じて、ボタンの表示を切り替える
        function buttonToggleDisplay() {
            if (clubNumber !== entirety - 1) {
                nextButton.classList.remove('page__btn--hide');
            } else {
                nextButton.classList.add('page__btn--hide');
            }
            if (clubNumber !== 0) {
                prevButton.classList.remove('page__btn--hide');
            } else {
                prevButton.classList.add('page__btn--hide');
            }
        }
        prevButton.addEventListener('click', prevPage);
        nextButton.addEventListener('click', nextPage);
    }
    cursor();
};
// カーソルストーカー
function cursor() {
    if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
        //  カーソルストーカー要素作成
        const cursor = document.createElement('div');
        cursor.className = "nhs-cursor";
        document.body.appendChild(cursor);
        //  ホバー時にカーソルストーカーを大きくする要素を定義（リンク・ボタンなど）
        const hoverTargets = document.querySelectorAll("a,[tabindex]");
        const stokerWidth = 20;
        let mouseX = 0;
        let mouseY = 0;
        let scrolled = 0;
        const updatePosition = () => {
            cursor.style.left = `${mouseX - (stokerWidth / 2)}px`;
            cursor.style.top = `${mouseY - (stokerWidth / 2)}px`;
        }
        document.body.addEventListener('mousemove', (e) => {
            // スクロール時に設定したトランジションを解除
            cursor.style.transition = "";
            mouseX = e.pageX;
            mouseY = e.pageY;
            updatePosition();
            hoverTargets.forEach(target => {
                target.addEventListener('mouseover', () => {cursor.style.transform = 'scale(2)'});
                target.addEventListener('mouseleave', () => {cursor.style.transform = ""}); 
            });
        });
        window.addEventListener('scroll', () => {
            // スクロール時には遅延トランジションなし
            cursor.style.transition = "none";
            // 今回の追加スクロール量を取得し、マウスの位置を修正する
            const increaseScrollAmount = (window.pageYOffset || document.documentElement.scrollTop) - scrolled;
            mouseY += increaseScrollAmount;
            updatePosition();
            // 総スクロール量を上書きする
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
        });
    };
};