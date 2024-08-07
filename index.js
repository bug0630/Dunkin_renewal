import { AutoPlay } from "@egjs/flicking-plugins";

flicking.addPlugins(
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })
);
const flicking = new Flicking("#carousel", {
  align: "center",
  circular: true,
  //   bound: true,
  renderOnlyVisible: true,
});
