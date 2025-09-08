import "../globals.css";
import Header from "../components/Header";
import { Roboto, Work_Sans } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto'
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: '--font-work-Sans'
})

export default function RootLayout({ children }) {  
  return (
    <html>
      <title>My Next.js App</title>
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