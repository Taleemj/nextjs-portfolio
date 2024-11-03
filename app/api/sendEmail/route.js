import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "taleemmankuer@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `taleemmankuer@gmail.com Portfolio`,
    to: `taleemmankuer@gmail.com`,
    subject: `${body.subject} - Portfolio Contact Form`,
    html: `<p>From: ${body.name} <br /> Email: ${body.email} <br /> <br /> ${body.message}</p>`,
  });

  if (info.response.includes("OK")) {
    return NextResponse.json({ message: "success" });
  } else {
    return NextResponse.json({ message: "server side error" });
  }
}
