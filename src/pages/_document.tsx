import { ThemeProvider } from "@/shared/ui/theme-provider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>포화_Pohwa</title>
        <meta name="description" content="포화. 적" />
        <meta property="og:title" content="포화_Pohwa" />
        <meta property="og:description" content="포화. 적" />
        <meta property="og:url" content="https://pohwa.xyz/" />
        <meta property="og:image" content="https://pohwa.xyz/logo.png" />
        <meta property="og:site_name" content="포화_Pohwa" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
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
