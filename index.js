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
    align: "center",
    circular: false,
    bound: true,
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

const m_flicking = createFlicking("#m-carousel");
const b_flicking = createFlicking("#b-carousel");
const flicking = createFlicking("#carousel");
const flicking2 = createFlicking("#carousel2");
const menu_flicking = responsiveFlicking("#menu-carousel");
const w_flicking = responsiveFlicking("#w-carousel");
