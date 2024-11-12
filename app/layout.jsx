// app/layout.jsx or pages/_app.js
import { Rubik } from "next/font/google";
import "./globals.css";
const rubik = Rubik({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}
