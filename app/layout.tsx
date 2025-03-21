import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "المؤتمر العالمي للابحاث والمعلومات والابتكار في القطاع الخيري",
  description: "انطلاقاً من أهداف رؤيـة المملكـة العربيـة السعوديـة 2030 في تعظيم أثـر القطــاع غيـر الربحـي فـي التنمية وتمكين منظمات القطاع للقيام بأدوارها التنمويـة وزيـادة مساهمتها فـي الناتـج المحلي الإجمالي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
