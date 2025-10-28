import { Geist, Geist_Mono } from "next/font/google";
import "./typography.css";
import "./globals.css";
import "./responsive.css";
import "./animations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Muhammad Umair Moosani - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: require("prop-types").node.isRequired,
};
