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
  
    // Top新着情報　スライダー
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

    const facilities = new Splide('.splide05', {
      type: 'loop',
      focus: 'center',
      perPage: 3,
      perMove: 1,
      updateOnMove: true,
      gap: '24px', // ← gapを24pxに設定
      breakpoints: {
        768: {
          perPage: 1,
          fixedWidth: '100%', // スマホ時は1枚ずつフル幅
          gap: '24px', // ← gapを24pxに設定
        }
      }
    });

    // ==============
    // 物件詳細ページ
    // ===============

    // 周辺施設スライダー


    
  
    fvtopslider.mount();
    fvspslider.mount();
    card01.mount();
    facilities.mount();

  });
  