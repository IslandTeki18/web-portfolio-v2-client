import * as React from "react";
import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : process.env.REACT_APP_SERVER_URL;

export const useSendContactInfo = async (
  name: string,
  phone: string,
  email: string,
  message: string
) => {
  function convertPhoneStringToNumber(phoneString: string) {
    const cleanedPhone = phoneString.replace(/-/g, "");
    const phoneNumber = Number(cleanedPhone);

    return phoneNumber;
  }
  try {
    const phoneAsNumber = convertPhoneStringToNumber(phone);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(
      `${url}api/contacts`,
      {
        name,
        phoneAsNumber,
        email,
        message,
      },
      config
    );
  } catch (error) {
    console.error(
      "An error occured while sending contact information: ",
      error
    );
  }
};
