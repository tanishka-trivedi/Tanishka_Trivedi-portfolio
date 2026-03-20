import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanishka Trivedi — Electrical Engineering | IIT Jodhpur",
  description:
    "Portfolio of Tanishka Trivedi — B.Tech Electrical Engineering student at IIT Jodhpur. Embedded Systems, DSA, Machine Learning enthusiast.",
  keywords: ["Tanishka Trivedi", "IIT Jodhpur", "Electrical Engineering", "Embedded Systems", "Portfolio"],
  authors: [{ name: "Tanishka Trivedi" }],
  openGraph: {
    title: "Tanishka Trivedi — Portfolio",
    description: "Electrical Engineering Student at IIT Jodhpur",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
