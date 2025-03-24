import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maryam | Full Stack & Automation Developer",
  description:
    "Experienced Full Stack & Automation Developer specializing in AI business automation, web development, and scalable solutions. Explore my portfolio for high-quality, efficient, and innovative digital solutions.",
  keywords: [
    "Full Stack Developer",
    "Automation Developer",
    "AI Business Automation",
    "Web Development",
    "Software Development",
    "QA Testing",
    "Custom CMS Development",
    "E-commerce Development",
    "Mobile App Development",
    "UI/UX Design",
    "API Development",
    "Next.js",
    "React.js",
    "Node.js",
    "Selenium Automation",
    "WordPress Development",
    "Software Testing",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>{children}</body>
    </html>
  );
}
