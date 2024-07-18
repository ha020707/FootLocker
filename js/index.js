var i = 0;
var time = 3000;
var texts = [
  "Đăng kí ngay để được nhận 10%",
  "Miễn phí vận chuyển cho mọi đơn hàng",
  "Giày đẹp giá rẻ",
];

function changeText() {
  var textElement = document.getElementById("text-slide");
  textElement.textContent = texts[i];

  i = (i + 1) % texts.length;
  setTimeout(changeText, time - 1000);
}

window.onload = changeText();
