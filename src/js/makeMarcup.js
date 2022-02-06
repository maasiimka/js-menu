import menuList from "../menu.json";
import itemsTemplate from "../templates/marcup.hbs";
import { menu } from "./consts";

export const makeMarcup = () => {
  const marcup = itemsTemplate(menuList);
  menu.insertAdjacentHTML("afterbegin", marcup);
};
