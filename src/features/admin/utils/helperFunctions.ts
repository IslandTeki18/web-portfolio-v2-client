import { NAVIGATIONS } from "./defaults";



export function setCurrentNavigation(index: number) {
  NAVIGATIONS.forEach((navigation, i) => {
    if (i === index) {
      navigation.current = true;
    } else {
      navigation.current = false;
    }
  });
  return NAVIGATIONS;
}
