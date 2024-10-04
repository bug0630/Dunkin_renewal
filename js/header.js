document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  header.innerHTML = `  <div class="s_h">
        <h1>
          <a href="#">
            <img src="./img/logo_mobile-1833920b.png" alt="로고" />
          </a>
        </h1>
        <span class="material-symbols-outlined h_menu">menu</span>
        <nav>
          <button><div class="off">DUNKIN' OF MONTH</div></button>
          <button>
            <div class="off">
              BRAND
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
            <ul class="arcodion">
              <li>HISTORY</li>
              <li>DD COMMITMENT</li>
            </ul>
          </button>
          <button>
            <div class="off">
              MENU
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
            <ul class="arcodion">
              <li>ALL</li>
              <li>DONUT</li>
              <li>FOOD</li>
              <li>COFFEE</li>
              <li>BEVERAGE</li>
              <li>SNACK & MORE</li>
            </ul>
          </button>
          <button>
            <div class="off">
              EVENT
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
            <ul class="arcodion">
              <li>프로모션</li>
              <li>제휴혜택</li>
            </ul>
          </button>
          <button>
            <div class="off">STORE</div>
          </button>
          <button>
            <div class="off">
              ORDER
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
            <ul class="arcodion">
              <li>케이터링</li>
              <li>딜리버리</li>
              <li>선물하기</li>
            </ul>
          </button>
          <button>
            <div class="off">
              <div class="link">
                <img
                  src="./img/header_instagram-17093e04.svg"
                  alt="instargram"
                />
                <img src="./img/header_youtube-6df669ee.svg" alt="youtube" />
                <img src="./img/header_blog-0f429453.svg" alt="blog" />
              </div>
              <a href="#">창업문의</a>
            </div>
          </button>
        </nav>
      </div>
      <div class="m_h">
        <nav>
          <div class="depth"></div>
          <div class="side_nav">
            <button><div class="off">DUNKIN' OF MONTH</div></button>
            <button class="down">
              <div>BRAND</div>
              <ul>
                <li>HISTORY</li>
                <li>DD COMMITMENT</li>
              </ul>
            </button>
            <button class="down">
              <div>MENU</div>
              <ul>
                <li>ALL</li>
                <li>DONUT</li>
                <li>FOOD</li>
                <li>COFFEE</li>
                <li>BEVERAGE</li>
                <li>SNACK & MORE</li>
              </ul>
            </button>
          </div>
          <h1>
            <a href="#">
              <picture>
                <source
                  media="(min-width: 1464px)"
                  srcset="./img/logo-bc30d2d8.png"
                />
                <img src="./img/logo_mobile-1833920b.png" alt="로고" />
              </picture>
            </a>
          </h1>
          <div class="side_nav right">
            <button class="down">
              <div>EVENT</div>
              <ul class="arcodion">
                <li>프로모션</li>
                <li>제휴혜택</li>
              </ul>
            </button>
            <button>
              <div>STORE</div>
            </button>
            <button class="down">
              <div>ORDER</div>
              <ul>
                <li>케이터링</li>
                <li>딜리버리</li>
                <li>선물하기</li>
              </ul>
            </button>
            
              <div class="e_ship">
                <span class="material-symbols-outlined">
                  radio_button_unchecked </span
                >창업문의
              </div>
            
          </div>
        </nav>
      </div>`;
});
document.addEventListener("DOMContentLoaded", function () {
  // nav 버튼 클릭
  document.querySelectorAll("header button").forEach((button) => {
    button.addEventListener("click", () => {
      const arcodion = button.querySelector(".arcodion");
      const icon = button.querySelector(".material-symbols-outlined");

      if (arcodion) {
        if (button.classList.contains("active")) {
          arcodion.style.height = "0";
          button.classList.remove("active");
          if (icon) icon.classList.remove("rotate-270");
        } else {
          arcodion.style.height = `${arcodion.scrollHeight}px`;
          button.classList.add("active");
          if (icon) icon.classList.add("rotate-270");
        }
      }
    });
  });

  // Close 버튼 클릭 이벤트
  const menuButton = document.querySelector(
    ".material-symbols-outlined.h_menu"
  );

  menuButton.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    const body = document.querySelector("body");
    const getHeaderHeight = () => {
      const headerHeight = clamp(60, window.innerHeight * 0.06, 92);
      return headerHeight;
    };

    // clamp 함수 구현
    const clamp = (min, val, max) => Math.min(Math.max(val, min), max);

    if (nav) {
      if (menuButton.classList.contains("close")) {
        nav.style.height = "0";
        menuButton.textContent = "menu";
        menuButton.classList.remove("close");
        menuButton.classList.add("h_menu");
        body.classList.remove("no-scroll");
      } else {
        const headerHeight = getHeaderHeight();
        nav.style.height = `100vh`;
        menuButton.textContent = "close";
        menuButton.classList.remove("h_menu");
        menuButton.classList.add("close");
        nav.style.height = `calc(100vh - ${headerHeight}px)`;
        body.classList.add("no-scroll");
      }
    }
  });
});

// 헤더 nav arcodion
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".m_h nav");
  const depth = nav.querySelector(".depth");

  if (depth) {
    const buttons = nav.querySelectorAll("button.down");

    buttons.forEach((button) => {
      const ul = button.querySelector("ul");

      button.addEventListener("mouseenter", function () {
        buttons.forEach((btn) => {
          if (btn !== button) {
            const otherUl = btn.querySelector("ul");
            if (otherUl) otherUl.style.height = "0";
          }
        });

        depth.style.height = "50px";
        if (ul) ul.style.height = "50px";
      });

      button.addEventListener("mouseleave", function (event) {
        if (
          !button.contains(event.relatedTarget) &&
          !depth.contains(event.relatedTarget)
        ) {
          depth.style.height = "0";
          if (ul) ul.style.height = "0";
        }
      });

      depth.addEventListener("mouseenter", function () {
        depth.style.height = "50px";
      });

      depth.addEventListener("mouseleave", function (event) {
        let insideButton = false;
        buttons.forEach((btn) => {
          if (btn.contains(event.relatedTarget)) {
            insideButton = true;
          }
        });
        if (!insideButton && !depth.contains(event.relatedTarget)) {
          depth.style.height = "0";
          if (ul) ul.style.height = "0";
        }
      });
    });
  }
});
