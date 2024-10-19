import { ThemeProvider } from "@/shared/ui/theme-provider";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>포화. 적</title>
        <meta name="description" content="포화. 적" />
        <meta property="og:title" content="포화. 적" />
        <meta property="og:description" content="포화. 적" />
        <meta property="og:url" content="https://pohwa.xyz/" />
        <meta property="og:image" content="https://pohwa.xyz/logo.png" />
        <meta property="og:site_name" content="포화. 적" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="https://pohwa.xyz/logo.png" />
        <link rel="apple-touch-icon" href="https://pohwa.xyz/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://pohwa.xyz/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://pohwa.xyz/logo.png"
        />
        <Script
          id="luma-checkout"
          src="https://embed.lu.ma/checkout-button.js"
          strategy="lazyOnload"
        />
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
