jQuery(function ($) {
  // ヘッダーの高さをCSS変数にセット（SPヘッダー対応）
  function updateHeaderHeight() {
    const spHeader = $('.header-sp');
    if (spHeader.length) {
      const height = spHeader.outerHeight();
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }
  }

  $(function () {
    updateHeaderHeight();
    $(window).on('resize', updateHeaderHeight);
  });

  // ページトップボタンの表示制御
  var topBtn = $('.pagetop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $('body,html').animate({ scrollTop: 0 }, 300, 'swing');
    return false;
  });

  // ドロワーメニュー
  $("#MenuButton").click(function () {
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });

// スクロール方向でヘッダー表示切り替え（SP & PC共通）
let lastScrollTop = 0;
const delta = 10;
const headerSP = $('.header-sp');
const headerPC = $('.header-pc');

$(window).on('scroll', function () {
  const nowScrollTop = $(this).scrollTop();

  if (Math.abs(lastScrollTop - nowScrollTop) <= delta) return;

  if (nowScrollTop > lastScrollTop) {
    // 下スクロール → ヘッダー非表示
    headerSP.addClass('hide');
    headerPC.addClass('hide');
  } else {
    // 上スクロール → ヘッダー表示
    headerSP.removeClass('hide');
    headerPC.removeClass('hide');
  }

  lastScrollTop = nowScrollTop;
});


  // スムーススクロール
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
});

// Splideの初期化
window.addEventListener('load', function () {

  // TopFVの㍶ファーストビュー
  const fvtopslider = new Splide(".splide02", {
    autoplay: true, // 自動再生
    type: "fade", // ループ
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す（デフォルトはfalse）
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
    interval: 5000, // 自動再生の間隔
    speed: 3000, // スライダーの移動時間
    arrows: false, // 矢印を非表示
    pagination: false, // ページネーションを非表示
  });


  // TopFVspファーストビュー
  const fvspslider = new Splide(".splide03", {
    autoplay: true, // 自動再生
    type: "fade", // ループ
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す（デフォルトはfalse）
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
    interval: 5000, // 自動再生の間隔
    speed: 3000, // スライダーの移動時間
    arrows: false, // 矢印を非表示
    pagination: false, // ページネーションを非表示
  });


  // 通常のスライダー（PC/SP共通）
  const card01 = new Splide('.splide01', {
    type: 'loop',
    focus: 'center',
    perPage: 3,
    perMove: 1,
    updateOnMove: true,
    gap: '24px', // ← gapを24pxに設定
    fixedWidth: 'calc((1200px - (24px * 2)) / 3)', // ← (1200px - gap2本分)を3枚で割る
    breakpoints: {
      768: {
        perPage: 1,
        fixedWidth: '100%', // スマホ時は1枚ずつフル幅
        gap: '16px' 
      }
    }
  });
  fvtopslider.mount();
  fvspslider.mount();
  card01.mount();


});
