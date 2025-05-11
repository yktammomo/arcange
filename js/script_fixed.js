
jQuery(function ($) {
  // ヘッダーの高さをCSS変数にセット（SP・PC両方対応）
  function updateHeaderHeight() {
    const spHeader = $('.header-sp');
    const pcHeader = $('.header-pc');

    if (spHeader.length) {
      const height = spHeader.outerHeight();
      document.documentElement.style.setProperty('--sp-header-height', `${height}px`);
    }

    if (pcHeader.length) {
      const height = pcHeader.outerHeight();
      document.documentElement.style.setProperty('--pc-header-height', `${height}px`);
    }
  }

  $(function () {
    updateHeaderHeight(); // 初期読み込み時に実行
    $(window).on('resize', updateHeaderHeight);  // リサイズ時にも再設定
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
      headerSP.addClass('hide');
      headerPC.addClass('hide');
    } else {
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
    autoplay: true,
    type: "fade",
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    interval: 5000,
    speed: 3000,
    arrows: false,
    pagination: false,
  });

  // TopFVspファーストビュー
  const fvspslider = new Splide(".splide03", {
    autoplay: true,
    type: "fade",
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    interval: 5000,
    speed: 3000,
    arrows: false,
    pagination: false,
  });

  // 通常のスライダー（PC/SP共通）
  const card01 = new Splide('.splide01', {
    type: 'loop',
    focus: 'center',
    perPage: 3,
    perMove: 1,
    updateOnMove: true,
    gap: '24px', // ← gapを24pxに設定
    fixedWidth: 'calc((1200px - (45px * 2)) / 3)', // ← (1200px - gap2本分)を3枚で割る
    breakpoints: {
      768: {
        perPage: 1,
        fixedWidth: '100%', // スマホ時は1枚ずつフル幅
        gap: '24px', // ← gapを24pxに設定
      }
    }
  });


  fvtopslider.mount();
  fvspslider.mount();
  card01.mount();


});

// Splideの初期化
  window.addEventListener('load', function () {
    const mainSlider = new Splide('#slider04', {
      type: 'fade',
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
    });
  
    const thumbnailSlider = new Splide('#slider04-thumbnail', {
      fixedWidth: 180,
      height: 140,
      isNavigation: true,
      gap: 25,
      focus: 'center', // ← これが中央揃えのポイント！
      pagination: false,
      cover: true,
      arrows: true,
      breakpoints: {
        640: {
          fixedWidth: 66,
          height: 40,
        },
      },
    });
    
  
    mainSlider.sync(thumbnailSlider);
    mainSlider.mount();
    thumbnailSlider.mount();
  });

  window.addEventListener('load', function () {
    new Splide('.splide-nearby', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '1.5rem',
      pagination: false,
      arrows: true,
      breakpoints: {
        768: {
          perPage: 2,
        },
        500: {
          perPage: 1,
        },
      }
    }).mount();
  });

// window.addEventListener('load', function () {
//   // TopFVの㍶ファーストビュー
//   const fvtopslider = new Splide(".splide02", {
//     autoplay: true,
//     type: "fade",
//     rewind: true,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     interval: 5000,
//     speed: 3000,
//     arrows: false,
//     pagination: false,
//   });
//   fvtopslider.mount();

//   // TopFVspファーストビュー
//   const fvspslider = new Splide(".splide03", {
//     autoplay: true,
//     type: "fade",
//     rewind: true,
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     interval: 5000,
//     speed: 3000,
//     arrows: false,
//     pagination: false,
//   });
//   fvspslider.mount();

//   // 通常のカードスライダー
//   const card01 = new Splide('.splide01', {
//     type: 'loop',
//     focus: 'center',
//     perPage: 3,
//     perMove: 1,
//     updateOnMove: true,
//     gap: '24px',
//     fixedWidth: 'calc((1200px - (45px * 2)) / 3)',
//     breakpoints: {
//       768: {
//         perPage: 1,
//         fixedWidth: '100%',
//         gap: '24px',
//       }
//     }
//   });
//   card01.mount();

//   // サムネイル付きスライダー
//   const mainSlider = new Splide('#slider04', {
//     type: 'fade',
//     heightRatio: 0.5,
//     pagination: false,
//     arrows: false,
//     cover: true,
//   });

//   const thumbnailSlider = new Splide('#slider04-thumbnail', {
//     fixedWidth: 180,
//     height: 140,
//     isNavigation: true,
//     gap: 25,
//     focus: 'center',
//     pagination: false,
//     cover: true,
//     arrows: true,
//     breakpoints: {
//       640: {
//         fixedWidth: 66,
//         height: 40,
//       },
//     },
//   });

//   mainSlider.sync(thumbnailSlider);
//   mainSlider.mount();
//   thumbnailSlider.mount();

//   // 近隣物件スライダー
//   const nearbySlider = new Splide('.splide-nearby', {
//     type: 'loop',
//     perPage: 3,
//     perMove: 1,
//     gap: '1.5rem',
//     pagination: false,
//     arrows: true,
//     breakpoints: {
//       768: {
//         perPage: 2,
//       },
//       500: {
//         perPage: 1,
//       },
//     }
//   });
//   nearbySlider.mount();
// });

  
  

