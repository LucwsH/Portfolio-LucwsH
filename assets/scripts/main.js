// Desabilitar ctrl shift c/i & botão direito

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});
window.addEventListener("keydown", function (e) {
  if (e.key == "F12" || (e.ctrlKey && e.shiftKey && e.key == "I") || (e.ctrlKey && e.shiftKey && e.key == "C")) {
  e.preventDefault();
  }
  });
