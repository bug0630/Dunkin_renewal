// 플러그인을 사용하기 위해 @egjs/flicking-plugins에서 가져옴
const { AutoPlay } = window.Flicking.Plugins;

const flicking = new Flicking("#carousel", {
  align: "center",
  circular: true,
  // bound: true,
  renderOnlyVisible: true,
});

const autoPlayPlugin = new AutoPlay({
  duration: 2000,
  direction: "NEXT",
  stopOnHover: true,
});

flicking.addPlugins(autoPlayPlugin);
