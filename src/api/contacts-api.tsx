"use server";
import { google } from "googleapis";

import {
  personalContactFormItems,
  businessContactFormItems,
  businessMarketingContactFormItems,
  ClientInquiryForm,
} from "../static/contactFormItems";

const range = "Leads";
const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
const sheets = google.sheets({
  version: "v4",
  auth: new google.auth.JWT(clientEmail, undefined, privateKey, [
    "https://www.googleapis.com/auth/spreadsheets",
  ]),
});

export type TResponse = {
  status: string;
  message: string;
}

async function submitContactForm(data: ClientInquiryForm) {
  try {
    const values = Object.values(data);
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [values],
      },
    });

    return {
      status: "200",
      message: "Lead added to Google sheets successfully.",
    };
  } catch (e) {
    console.error(e);

    return {
      status: "500",
      message: "There was a problem with the form submission. Please try again in a moment.",
    };
  }
}

export {
  submitContactForm,
};
