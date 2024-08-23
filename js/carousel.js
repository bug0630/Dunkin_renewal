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
  let paginationPlugin = new Pagination({
    type: "bullet",
  });

  const flickingInstance = new Flicking(selector, {
    align:
      window.innerWidth < 769
        ? "prev"
        : window.innerWidth < 978
        ? "prev"
        : "center",
    bound: true,
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

  flickingInstance.addPlugins(autoPlayPlugin, paginationPlugin);

  function updatePlugins() {
    let newAlign;

    if (window.innerWidth < 769) {
      newAlign = "prev";
    } else if (window.innerWidth < 1024) {
      newAlign = "center";
    } else {
      newAlign = "center";
    }

    // Align 값을 필요에 따라 업데이트
    if (flickingInstance.align !== newAlign) {
      flickingInstance.align = newAlign;
      flickingInstance.resize();
    }

    // 화면 크기에 따라 Pagination 플러그인 재적용
    flickingInstance.removePlugins(paginationPlugin);

    paginationPlugin = new Pagination({
      type: "bullet",
    });

    flickingInstance.addPlugins(paginationPlugin);
  }

  // 초기 실행
  updatePlugins();

  // 화면 크기 변경 시 플러그인 재적용
  window.addEventListener("resize", updatePlugins);

  return flickingInstance;
}

// Flicking 인스턴스 초기화 (메뉴와 w는 나중에 조건에 따라 생성)
const m_flicking = createFlicking("#m-carousel");
const b_flicking = createFlicking("#b-carousel");
const flicking = createFlicking("#carousel");
const flicking2 = createFlicking("#carousel2");
const menu_flicking = responsiveFlicking("#menu-carousel");
const w_flicking = responsiveFlicking("#w-carousel");
