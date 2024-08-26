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

  flickingInstance.addPlugins(autoPlayPlugin);

  // 창 크기에 따라 Pagination 플러그인 조건부 추가

  const paginationPlugin = new Pagination({
    type: "bullet",
  });
  flickingInstance.addPlugins(paginationPlugin);

  return flickingInstance;
}

function responsiveFlicking(selector, autoPlayDuration = 4000) {
  const flickingInstance = new Flicking(selector, {
    circular: true,
    renderOnlyVisible: true,
    deceleration: 0.5,
    bounce: 0,
    threshold: 10,
    circularFallback: "bound",
  });

  const autoPlayPlugin = new AutoPlay({
    duration: autoPlayDuration,
    direction: "NEXT",
    stopOnHover: true,
  });

  flickingInstance.addPlugins(autoPlayPlugin);

  const paginationPlugin = new Pagination({
    type: "bullet",
  });
  flickingInstance.addPlugins(paginationPlugin);

  return flickingInstance;
}

// Flicking 인스턴스 초기화 (조건에 따라 메뉴와 w 인스턴스 생성)
const m_flicking = createFlicking("#m-carousel");
const b_flicking = createFlicking("#b-carousel");
const flicking = createFlicking("#carousel");
const flicking2 = createFlicking("#carousel2");
const menu_flicking = responsiveFlicking("#menu-carousel");
const w_flicking = responsiveFlicking("#w-carousel");
