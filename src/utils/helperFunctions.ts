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

export function generateRandomId(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
