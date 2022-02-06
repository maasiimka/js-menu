import { body } from "./consts";
import { saveCheckboxValue } from "./saveCheckboxValue";

export const changeTheme = () => {
  saveCheckboxValue();
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
};
