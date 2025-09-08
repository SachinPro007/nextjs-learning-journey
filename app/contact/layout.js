import Link from "next/link";
import "../globals.css"

export default function ContactLayout({ children }) {
  return (
    <html>
      <head>
        <title>This is my Contact page</title>
      </head>
      <body>
        <div className="bg-blue-600 text-white p-4 shadow-md flex justify-around items-center">
          <h1>Hello, Contact Page Nav</h1>
          <button><Link href={"/"}>Go Home</Link></button>
        </div>
        {children}
      </body>
    </html>
  );
}