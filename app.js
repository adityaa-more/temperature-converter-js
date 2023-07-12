// toogle var
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

// theme var
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-colors-scheme: dark)").matches;

//icon toogling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

//initial theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

//manual theme switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

//call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});

//invoke theme check on initial load
themeCheck();
