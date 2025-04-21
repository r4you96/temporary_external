function redirectToFinalPage() {
    window.location.replace("kakaotalk://web/openExternal?url=https%3a%2f%2fnaver.com");
  }
  
  // 페이지 로드 완료 시 리다이렉트
  window.onload = redirectToFinalPage;