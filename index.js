const { AutoPlay, Pagination } = window.Flicking.Plugins;

const m_flicking = new Flicking("#m-carousel", {
  align: "center",
  circular: true,
  renderOnlyVisible: true,
  deceleration: 0.5,
});
const flicking = new Flicking("#carousel", {
  align: "center",
  circular: true,
  renderOnlyVisible: true,
  deceleration: 0.5,
});
const flicking2 = new Flicking("#carousel2", {
  align: "center",
  circular: true,
  renderOnlyVisible: true,
  deceleration: 0.5,
});
const autoPlay = new AutoPlay({
  duration: 4000,
  direction: "NEXT",
  stopOnHover: true,
});
const autoPlayPlugin = new AutoPlay({
  duration: 4000,
  direction: "NEXT",
  stopOnHover: true,
});

const autoPlayPlugin2 = new AutoPlay({
  duration: 4000,
  direction: "NEXT",
  stopOnHover: true,
});
const page = new Pagination({
  type: "bullet",
});
const pagi = new Pagination({
  type: "bullet",
});
const pagi2 = new Pagination({
  type: "bullet",
});

// 플러그인 추가
m_flicking.addPlugins(autoPlay, page);
flicking.addPlugins(autoPlayPlugin, pagi);
flicking2.addPlugins(autoPlayPlugin2, pagi2); // flicking2에도 Pagination 추가
