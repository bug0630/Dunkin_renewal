// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector("header");
//   header.innerHTML = ``;
// });
document.addEventListener("DOMContentLoaded", function () {
  // nav 버튼 클릭
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
  const menuButton = document.querySelector(".material-symbols-outlined.menu");

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
        menuButton.classList.add("menu");
        body.classList.remove("no-scroll");
      } else {
        const headerHeight = getHeaderHeight();
        nav.style.height = `100vh`;
        menuButton.textContent = "close";
        menuButton.classList.remove("menu");
        menuButton.classList.add("close");
        nav.style.height = `calc(100vh - ${headerHeight}px)`;
        body.classList.add("no-scroll");
      }
    }
  });
});

// 헤더 nav drop
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
