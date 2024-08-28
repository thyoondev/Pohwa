import { ThemeProvider } from "@/shared/ui/theme-provider";
import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "포화_Pohwa",
  description: "포화. 적",
  openGraph: {
    title: "포화_Pohwa",
    description: "포화. 적",
    url: "https://pohwa.xyz/",
    images: "https://pohwa.xyz/logo.png",
    siteName: "포화_Pohwa",
    locale: "en_US",
    type: "website",
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
