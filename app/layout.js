import "./globals.scss";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Taleem | Web developer",
  description:
    "Hi, my name is Taleem Mankuer and i am an aspiring full stack web developer and student with a good understanding in web development. I enjoy finding creative solutions to problems and spend my time experimenting with technologies such as react and inhale a wide variety of potentially useful information through different platforms.",
};

const Roboto = localFont({
  src: "../public/assets/fonts/Roboto Light V2.woff2",
  display: "swap",
  variable: "--roboto",
});
const Coolvetica = localFont({
  src: "../public/assets/fonts/CoolveticaRg-Regular.woff2",
  display: "swap",
  variable: "--coolvetica",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Roboto.variable} ${Coolvetica.variable}`}>
      <head>
        <meta name="google-site-verification" content="O_grUoAkNqBhd8JaaX1YpzQO4ti2Njc6w_Oul2kjNRQ" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
