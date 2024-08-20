const { AutoPlay, Pagination } = window.Flicking.Plugins;

function createFlicking(selector, autoPlayDuration = 4000) {
  const flickingInstance = new Flicking(selector, {
    align: "center",
    circular: true,
    renderOnlyVisible: true,
    deceleration: 0.5,
  });

  const autoPlayPlugin = new AutoPlay({
    duration: autoPlayDuration,
    direction: "NEXT",
    stopOnHover: true,
  });

  const paginationPlugin = new Pagination({
    type: "bullet",
  });

  flickingInstance.addPlugins(autoPlayPlugin, paginationPlugin);
  return flickingInstance;
}

function responsiveFlicking(selector, autoPlayDuration = 4000) {
  const flickingInstance = new Flicking(selector, {
    align: "prev",
    bound: "true",
    circular: false,
    renderOnlyVisible: true,
    deceleration: 0.5,
  });

  const autoPlayPlugin = new AutoPlay({
    duration: autoPlayDuration,
    direction: "NEXT",
    stopOnHover: true,
  });

  const paginationPlugin = new Pagination({
    type: "bullet",
  });

  flickingInstance.addPlugins(autoPlayPlugin, paginationPlugin);
  return flickingInstance;
}

// Flicking 인스턴스 초기화 (메뉴와 w는 나중에 조건에 따라 생성)
const m_flicking = createFlicking("#m-carousel");
const b_flicking = createFlicking("#b-carousel");
const flicking = createFlicking("#carousel");
const flicking2 = createFlicking("#carousel2");
let menu_flicking = null;
let w_flicking = null;

// 미디어 쿼리 핸들러 함수
function handleMenuCarouselMediaQuery(event) {
  if (event.matches) {
    // 화면이 1444px 이하일 때만 menu_flicking 생성
    if (!menu_flicking) {
      menu_flicking = responsiveFlicking("#menu-carousel");
    }
  } else {
    // 화면이 1444px 이상일 때, menu_flicking이 존재하면 제거
    if (menu_flicking) {
      menu_flicking.destroy();
      menu_flicking = null;
    }
  }
}

function handleWCarouselMediaQuery(event) {
  if (event.matches) {
    // 화면이 977px 이하일 때만 w_flicking 생성
    if (!w_flicking) {
      w_flicking = responsiveFlicking("#w-carousel");
    }
  }
}

// MediaQueryList 객체 생성
const menuMediaQuery = window.matchMedia("(max-width: 1444px)");
const wMediaQuery = window.matchMedia("(max-width: 977px)");

// 화면 크기 변경 시 핸들러 설정
menuMediaQuery.addListener(handleMenuCarouselMediaQuery);
wMediaQuery.addListener(handleWCarouselMediaQuery);

// 현재 화면 크기에 맞춰 핸들러 한 번 실행
handleMenuCarouselMediaQuery(menuMediaQuery);
handleWCarouselMediaQuery(wMediaQuery);
