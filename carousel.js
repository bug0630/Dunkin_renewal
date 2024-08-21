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
    bounce: 0,
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
const menu_flicking = responsiveFlicking("#menu-carousel");
const w_flicking = responsiveFlicking("#w-carousel");
