function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

const mulaiBtn = document.getElementById("mulaiBtn");

if (mulaiBtn) {
  mulaiBtn.addEventListener("click", () => {
    showPage("gamePage");

  });
}
