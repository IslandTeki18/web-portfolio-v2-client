import { useState, useEffect, useCallback } from "react";

/**
 * A custom React hook for formatting dates.
 * @param {string} date - The date string to format.
 * @param {string} locale - The locale to use for formatting.
 * @returns {string} - The formatted date string.
 */
export const useTimeFormatter = (date: string, locale: string) => {
  const [formattedDate, setFormattedDate] = useState("");

  const formatDate = useCallback(() => {
    if (!date || !Date.parse(date)) {
      setFormattedDate("");
      return;
    }
    const dateTimeFormat = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    setFormattedDate(dateTimeFormat.format(new Date(date)));
  }, [date, locale]);

  useEffect(() => {
    formatDate();
  }, []);

  return formattedDate;
};
