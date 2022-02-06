import { body } from "./consts";
import { checkbox } from "./consts";

export const checkThemeAfterRefresh = () => {
  const state = JSON.parse(localStorage.getItem("darkTheme"));
  if (state !== null && state.darkTheme) {
    checkbox.setAttribute("checked", "checked");
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
  }
};
