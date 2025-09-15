import "./globals.css";
import Header from "./components/Header";
import { Roboto, Work_Sans } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto'
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: '--font-work-Sans'
})


// Metadata object holds all the SEO and social sharing information for your website. Next.js automatically uses it in the <head> section of your pages.
export const metadata = {
  title: {
    default: "Total Web Solution | Learn Web Development",  // If you forget to set a page title, this is the fallback title.
    template: "%s | XYZ Site Name",  // If a page sets title "About Us", the final title becomes About Us | XYZ Site Name.
  },
  description: // Shown in search engine results and Helps SEO and tells users what the site is about.
    "Free tutorials on React.js, Next.js, and web development by Sachin.",
  keywords: ["React", "Next.js", "Web Development", "xyz solutions"], // Lists important search terms related to your site.
  icons: {
    icon: "/images/kody.png", // Sets the favicon
  },
  metadataBase: new URL("https://example.com"), // Defines the base URL for your site.
  openGraph: {   // Used when your site is shared on Facebook, LinkedIn, WhatsApp, etc.
    title: "XYZ solutions",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "xyz solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "image alt tag",
      },
    ],
    type: "website",
  },
  twitter: { // Controls how your site looks when shared on Twitter (X).
    card: "summary_large_image",
    title: "Title you want to shere",
    description: "Learn Web Dev from scratch with Sachin",
    creator: "@Sachin",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {  
  return (
    <html>
      <body className={`${workSans.className} ${roboto.className}`}>
        <Header />
        {children}
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <p>© 2023 My Next.js Project. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}