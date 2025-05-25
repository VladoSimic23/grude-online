// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "info@grude-online.info", // zamijeni s pravim emailom
    subject: `Nova poruka od ${name}`,
    text: `
Ime: ${name}
Email: ${email}

Poruka:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Greška prilikom slanja:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
