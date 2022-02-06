import { checkbox } from "./consts";

export const saveCheckboxValue = () => {
  localStorage.setItem(
    "darkTheme",
    JSON.stringify({ darkTheme: checkbox.checked })
  );
};
