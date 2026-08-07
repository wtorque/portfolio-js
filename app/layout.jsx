import "./globals.css";
import ClientProviders from "./ClientProviders";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Harshh — Frontend Developer",
  description:
    "Portfolio of Harshh — Frontend Developer building smooth, responsive, premium web interfaces using React, Tailwind, Framer Motion and modern frontend tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-[var(--font-poppins)]">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
