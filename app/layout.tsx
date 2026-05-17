import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import { BasketProvider } from "@/contexts/BasketContext";
import config from "@/site.config";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

const title = `${config.brand.name} — ${config.brand.location}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${config.brand.name}`,
  },
  description: config.brand.description,
  keywords: [
    "artisan bakery",
    "sourdough",
    config.brand.location,
    "fresh bread",
    "handmade bread",
    "local bakery",
  ],
  authors: [{ name: "Veltro Ltd" }],
  creator: "Veltro Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: config.brand.name,
    title,
    description: config.brand.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.brand.name,
    description: config.brand.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#9a511e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${sourceSans3.variable}`}
    >
      <body>
        <AuthProvider>
          <BasketProvider>
            {children}
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "#7c401d",
                  color: "#fff",
                  borderRadius: "10px",
                  fontFamily: "var(--font-source-sans-3)",
                },
                success: {
                  iconTheme: { primary: "#f17029", secondary: "#fff" },
                },
              }}
            />
          </BasketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
