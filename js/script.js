function decorateTree() {
  document.querySelector(".notoystree").style.display = "none";
  document.querySelector(".withtoystree").style.display = "block";
}
document.querySelector(".christmastree").onclick = decorateTree;
