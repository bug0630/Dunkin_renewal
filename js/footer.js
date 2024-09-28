// DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드된 후 스크립트를 실행합니다.
document.addEventListener("DOMContentLoaded", function () {
  // 클래스가 'top'인 버튼 요소를 찾습니다.
  const topButton = document.querySelector(".top");

  // 버튼이 존재하는 경우 클릭 이벤트 리스너를 추가합니다.
  if (topButton) {
    topButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
