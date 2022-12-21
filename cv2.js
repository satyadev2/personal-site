var icon = document.getElementById("dark");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "https://img.icons8.com/material-two-tone/512/sun.png";
  } else {
    icon.src = "icons8-moon-symbol-50.png";
  }
};
