import { useState, useEffect, useCallback } from "react";
export const useTimeFormatter = (date: string, locale: string) => {
  const [formattedDate, setFormattedDate] = useState("");

  const formatDate = useCallback(() => {
    if (!date || !Date.parse(date)) {
      setFormattedDate("");
      return;
    }
    const dateTimeFormat = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    setFormattedDate(dateTimeFormat.format(new Date(date)));
  }, [date, locale]);

  useEffect(() => {
    formatDate();
  }, [formatDate]);

  return formattedDate;
};
