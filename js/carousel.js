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
  if (window.innerWidth < 1444) {
    const paginationPlugin = new Pagination({
      type: "bullet",
    });
    flickingInstance.addPlugins(paginationPlugin);
  }

  return flickingInstance;
}

function responsiveFlicking(selector, autoPlayDuration = 4000) {
  let paginationPlugin;

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

  flickingInstance.addPlugins(autoPlayPlugin);

  function updatePlugins() {
    let newAlign;

    if (window.innerWidth < 769) {
      newAlign = "prev";
    } else if (window.innerWidth < 1024) {
      newAlign = "center";
    } else {
      newAlign = "center";
    }

    // align 값이 변경되었는지 확인하고 업데이트
    if (flickingInstance.align !== newAlign) {
      flickingInstance.align = newAlign;
      flickingInstance.resize();
    }

    // 기존의 Pagination 플러그인이 있으면 제거
    if (paginationPlugin) {
      flickingInstance.removePlugins(paginationPlugin);
    }

    // 창 크기에 따라 Pagination 플러그인 조건부 추가
    if (window.innerWidth < 1444) {
      paginationPlugin = new Pagination({
        type: "bullet",
      });
      flickingInstance.addPlugins(paginationPlugin);
    }
  }

  // 초기 실행
  updatePlugins();

  return flickingInstance;
}

// Flicking 인스턴스 초기화 (조건에 따라 메뉴와 w 인스턴스 생성)
const m_flicking = createFlicking("#m-carousel");
const b_flicking = createFlicking("#b-carousel");
const flicking = createFlicking("#carousel");
const flicking2 = createFlicking("#carousel2");
const menu_flicking = responsiveFlicking("#menu-carousel");
const w_flicking = responsiveFlicking("#w-carousel");
