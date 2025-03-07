// app/layout.js
import { Alumni_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-alumni-sans",
});

export const metadata = {
  title: "CODED COTTON | Premium Freelancer T-Shirts | কোডেড কটন - সেরা ফ্রিল্যান্সার টি-শার্ট",
  description:
    "Premium quality t-shirts designed for freelancers, tech enthusiasts, and everyday comfort. Unique & stylish designs. কোডেড কটন - ফ্রিল্যান্সার, প্রযুক্তি প্রেমী ও দৈনন্দিন ব্যবহারের জন্য সেরা মানের টি-শার্ট। অনন্য ও স্টাইলিশ ডিজাইন।",
  keywords:
    "freelancer t-shirt, tech t-shirt, premium t-shirt, coded cotton, unique t-shirt, stylish t-shirt, premium clothing, Bangladesh t-shirt, ফ্রিল্যান্সার টি-শার্ট, টেক টি-শার্ট, প্রিমিয়াম টি-শার্ট, কোডেড কটন, ইউনিক টি-শার্ট, স্টাইলিশ টি-শার্ট, প্রিমিয়াম কাপড়, বাংলাদেশ টি-শার্ট",
  openGraph: {
    title: "CODED COTTON | Premium Freelancer T-Shirts | কোডেড কটন - সেরা ফ্রিল্যান্সার টি-শার্ট",
    description: "Premium quality t-shirts designed for freelancers, tech enthusiasts, and everyday comfort. Unique & stylish designs. কোডেড কটন - ফ্রিল্যান্সার, প্রযুক্তি প্রেমী ও দৈনন্দিন ব্যবহারের জন্য সেরা মানের টি-শার্ট। অনন্য ও স্টাইলিশ ডিজাইন।",
    images: [""],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODED COTTON | Premium Freelancer T-Shirts | কোডেড কটন - সেরা ফ্রিল্যান্সার টি-শার্ট",
    description: "Premium quality t-shirts designed for freelancers, tech enthusiasts, and everyday comfort. Unique & stylish designs. কোডেড কটন - ফ্রিল্যান্সার, প্রযুক্তি প্রেমী ও দৈনন্দিন ব্যবহারের জন্য সেরা মানের টি-শার্ট। অনন্য ও স্টাইলিশ ডিজাইন।",
    images: [""],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${alumniSans.variable} font-sans`}>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KFWQ88QL');
        `}
      </Script>
      {/* End Google Tag Manager */}

      {/* Google Analytics (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KMZEY960TD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KMZEY960TD');
        `}
      </Script>
      {/* End Google Analytics */}

      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFWQ88QL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
