import * as React from "react";
import axios from "axios";

export const useSendContactInfo = async (
  name: string,
  phone: string,
  email: string,
  message: string
) => {
  function convertPhoneStringToNumber(phoneString: string) {
    // Remove dashes from the phone string
    const cleanedPhone = phoneString.replace(/-/g, "");

    // Convert the cleaned string to a number
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
      `${process.env.REACT_APP_SERVER_URL}api/contacts`,
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
