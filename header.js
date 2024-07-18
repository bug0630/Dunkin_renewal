// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector("header");
//   header.innerHTML = `
//     <div class="h_w">
//         <h1>
//             <a href="#">
//                 <img src="./img/logo_mobile-1833920b.png" alt="로고" />
//             </a>
//         </h1>
//         <span class="material-symbols-outlined close">close</span>
//         <nav>
//             <button><div class="off">DUNKIN' OF MONTH</div></button>
//             <button>
//                 <div class="off">
//                     BRAND
//                     <span class="material-symbols-outlined">arrow_forward_ios</span>
//                 </div>
//                 <ul class="drop">
//                     <li>HISTORY</li>
//                     <li>DD COMMITMENT</li>
//                 </ul>
//             </button>
//             <button>
//                 <div class="off">
//                     MENU
//                     <span class="material-symbols-outlined">arrow_forward_ios</span>
//                 </div>
//                 <ul class="drop">
//                     <li>ALL</li>
//                     <li>DONUT</li>
//                     <li>FOOD</li>
//                     <li>COFFEE</li>
//                     <li>BEVERAGE</li>
//                     <li>SNACK & MORE</li>
//                 </ul>
//             </button>
//             <button>
//                 <div class="off">
//                     EVENT
//                     <span class="material-symbols-outlined">arrow_forward_ios</span>
//                 </div>
//                 <ul class="drop">
//                     <li>프로모션</li>
//                     <li>제휴혜택</li>
//                 </ul>
//             </button>
//             <button>
//                 <div class="off">STORE</div>
//             </button>
//             <button>
//                 <div class="off">
//                     ORDER
//                     <span class="material-symbols-outlined">arrow_forward_ios</span>
//                 </div>
//                 <ul class="drop">
//                     <li>케이터링</li>
//                     <li>딜리버리</li>
//                     <li>선물하기</li>
//                 </ul>
//             </button>
//             <button>
//                 <div class="off">
//                     <div class="link">
//                         <img src="./img/header_instagram-17093e04.svg" alt="instargram" />
//                         <img src="./img/header_youtube-6df669ee.svg" alt="youtube" />
//                         <img src="./img/header_blog-0f429453.svg" alt="blog" />
//                     </div>
//                     <a href="#">창업문의</a>
//                 </div>
//             </button>
//         </nav>
//     </div>
//     `;
// });
document.addEventListener("DOMContentLoaded", function () {
  // 버튼 클릭 이벤트
  document.querySelectorAll("header button").forEach((button) => {
    button.addEventListener("click", () => {
      const drop = button.querySelector(".drop");
      const icon = button.querySelector(".material-symbols-outlined");

      if (drop) {
        if (button.classList.contains("active")) {
          drop.style.height = "0";
          button.classList.remove("active");
          if (icon) icon.classList.remove("rotate-270");
        } else {
          drop.style.height = `${drop.scrollHeight}px`;
          button.classList.add("active");
          if (icon) icon.classList.add("rotate-270");
        }
      }
    });
  });

  // Close 버튼 클릭 이벤트
  const closeButton = document.querySelector(
    ".material-symbols-outlined.close"
  );
  closeButton.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    const icons = document.querySelectorAll("nav .material-symbols-outlined");

    if (nav) {
      if (closeButton.classList.contains("closed")) {
        nav.style.height = `${nav.scrollHeight}px`;
        nav.style.minHeight = "500px"; // 최소 높이 복원
        closeButton.textContent = "close";
        closeButton.classList.remove("closed");
      } else {
        nav.style.height = "0";
        nav.style.minHeight = "0";
        closeButton.textContent = "menu";
        closeButton.classList.add("closed");
      }
    }
  });
});
