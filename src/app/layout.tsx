import { Geist, Geist_Mono } from "next/font/google";

import { I18nProvider } from "../i18n/I18nProvider";
import ThemeClientProvider from "./themeClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nProvider>
          <ThemeClientProvider>{children}</ThemeClientProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
