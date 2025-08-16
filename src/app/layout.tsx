import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "新約希臘⽂聖經的變遷 | 課程筆記 - 台灣聖經公會",
  description:
    "探索新約希臘文聖經抄本的迷人歷史及其對現代聖經譯本的影響。了解抄本獵人、古代抄本，以及聖經文本數世紀來的演變。從昔中多夫的西奈山發現，到崔家磊在梵蒂岡的研究，揭開你手中聖經背後的故事。",
  keywords: [
    "biblical manuscripts",
    "New Testament Greek",
    "textual criticism",
    "manuscript transcription",
    "biblical archaeology",
    "Codex Vaticanus",
    "Codex Sinaiticus",
    "聖經抄本",
    "新約希臘文",
    "經文批判學",
    "抄本轉錄",
    "聖經考古學",
  ],
  authors: [{ name: "蟻安廷" }],
  creator: "蟻安廷",
  publisher: "台灣聖經公會",
  openGraph: {
    title: "新約希臘⽂聖經的變遷 | 課程筆記 - 台灣聖經公會",
    description:
      "探索新約希臘文聖經抄本的迷人歷史及其對現代聖經譯本的影響。了解抄本獵人、古代抄本，以及聖經文本數世紀來的演變。",
    type: "website",
    locale: "zh_TW",
    alternateLocale: "en_US",
    siteName: "新約希臘⽂聖經的變遷",
  },
  twitter: {
    card: "summary_large_image",
    title: "新約希臘⽂聖經的變遷 | 課程筆記 - 台灣聖經公會",
    description:
      "探索新約希臘文聖經抄本的迷人歷史及其對現代聖經譯本的影響。了解抄本獵人、古代抄本，以及聖經文本數世紀來的演變。",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
