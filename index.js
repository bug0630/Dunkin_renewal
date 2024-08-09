// 플러그인을 사용하기 위해 @egjs/flicking-plugins에서 가져옴
const { AutoPlay } = window.Flicking.Plugins;

const flicking = new Flicking("#carousel", {
  align: "center",
  circular: true,
  duration: 1000,
  renderOnlyVisible: true,
});

const flicking2 = new Flicking("#carousel2", {
  align: "center",
  circular: true,
  duration: 1000,
  renderOnlyVisible: true,
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
flicking.addPlugins(autoPlayPlugin);
flicking2.addPlugins(autoPlayPlugin2);
