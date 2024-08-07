$(function () {
  $("html,body").animate({ scrollTop: 0 }, "1");
});

//レイヤーを移動させると手間が大きいので
//グラデーションの中央を移動させる
// $(document).mousemove(function (e) {
//   $("#main_image").attr({ style: "background:radial-gradient(200px 200px at " + e.clientX + "px " + e.clientY + "px, transparent, transparent 200px, rgb(17, 17, 17) 300px)" });
// });

$(document).mousemove(function (e) {
  $("#main_image").attr({ style: "background:radial-gradient(200px 200px at 100px  100px, transparent, transparent 200px, rgb(17, 17, 17) 300px)" });
});

const defaultOptions = {
  // ドットインジケーターの表示
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後スライドボタンを表示
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true, // ループの有効化
};

// カバーフローエフェクト
const swiperCoverflow = new Swiper(".sample-swiper-coverflow .swiper-container", {
  ...defaultOptions,

  slidesPerView: 1.7, // 表示するスライドの枚数
  centeredSlides: true, // スライドを中央揃えを有効化
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0, // スライドの回転角度
    stretch: 50, // スライドの間隔（px単位）
    depth: 150, // 奥行きの設定（translateをZ方向にpx単位で移動）
    slideShadows: true, // 先頭スライドの影を有効化
  },
});

$(function () {
  $(".ECM_CheckboxInput-Input").click(function () {
    const isChecked = $(this).prop("checked");
    if (isChecked === false) {
      $(".Form-Btn").attr("disabled", "disabled");
    } else {
      $(".Form-Btn").removeAttr("disabled");
    }
  });
});
