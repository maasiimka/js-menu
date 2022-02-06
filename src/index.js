import "./styles.css";
import { makeMarcup } from "./js/makeMarcup";
import { checkbox } from "./js/consts";
import { checkThemeAfterRefresh } from "./js/checkThemeAfterRefresh";
import { changeTheme } from "./js/changeTheme";

makeMarcup();

checkThemeAfterRefresh();

checkbox.addEventListener("click", changeTheme);
