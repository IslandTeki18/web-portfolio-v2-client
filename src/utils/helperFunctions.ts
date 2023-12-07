export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumberWithCommas(numStr: string) {
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(date: string, locale: string) {
  if (!date || !Date.parse(date)) {
    return "";
  }
  const dateTimeFormat = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return dateTimeFormat.format(new Date(date));
}
