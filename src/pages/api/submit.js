import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SHEET_EMAIL,
        key: process.env.GOOGLE_SHEET_KEY,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const doc = new GoogleSpreadsheet(
        process.env.GOOGLE_SHEET_ID,
        serviceAccountAuth
      );

      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({ Email: req.body.email });

      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).end();
  }
}
