/** @format */

import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

async function getLastRow(sheets: any, spreadsheetId: string) {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!A:A", // Ensure this matches your actual sheet name
  });
  const rows = response.data.values;
  return rows ? rows.length + 1 : 1; // Return the next row number to insert data
}

export async function POST(req: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      age,
      studyLevel,
      fieldOfStudy,
      phoneNumber,
      state,
      hearAboutUs,
    } = await req.json();

    const KEY = process.env.GOOGLE_SHEETS_CREDS;
    if (!KEY) {
      throw new Error("No Google Sheets API credentials provided");
    }
    const auth = new google.auth.GoogleAuth({
      //   keyFile: path.join(
      //     process.cwd(),
      //     "./keys/attendees-440319-6f7b7c88f6b5.json"
      //   ),
      credentials: JSON.parse(KEY),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"], // Scopes for the Sheets API
    });

    const sheets = google.sheets({ version: "v4", auth });

    // const client = await auth.getClient();
    const spreadsheetId = "15Rp2h78BKfO12ZYzytbR3NVbD-Mf0FFlTPyCj85OSqk"; // Replace with your Spreadsheet ID
    const lastRow = await getLastRow(sheets, spreadsheetId); // Get the last row number
    const range = `attendees!A${lastRow}:I${lastRow}`; // Ensure this matches the actual sheet name

    const values = [
      [
        firstName,
        lastName,
        email,
        age,
        studyLevel,
        fieldOfStudy,
        phoneNumber,
        state,
        hearAboutUs,
      ],
    ]; // Adjust based on your form fields

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: "Sheet1!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    if (response.status !== 200) {
      throw new Error("Internal server error");
    }
    
    return NextResponse.json(
      { message: "Data inserted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { message: "Error inserting data" },
      { status: 500 }
    );
  }
}
