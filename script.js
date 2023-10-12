// JavaScript

const thumbs = document.querySelectorAll('.thumb');
const main = document.querySelector('#main-image')

// クリックで切り替え
// thumbs.forEach(function(item, index) {
//   item.onclick = function() {
//     // console.log(this.dataset.image);
//     main.src = this.dataset.image;
//   }
// });

//マウスオーバー
thumbs.forEach(function(item, index) {
  item.onmouseover = function() {
    main.src = this.dataset.image;
  }
});

// イベントリスナーで書き換え
// thumbs.forEach(function (item, index) {
//   function change() {
//     main.src = this.dataset.image;
//   }
//   item.addEventListener('mouseover', change);
// });
