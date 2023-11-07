import { NAVIGATIONS } from "./defaults";

export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  export function setCurrentNavigation(index: number) {
    NAVIGATIONS.forEach((navigation, i) => {
      if (i === index) {
        navigation.current = true;
      } else {
        navigation.current = false;
      }
    });
    return NAVIGATIONS
  }