export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumberWithCommas(numStr: string) {
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
