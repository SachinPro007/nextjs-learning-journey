import "../globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My Next.js App</title>
      </head>
      <body className="bg-gray-50">
        <Header />
        <main>
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <p>© 2023 My Next.js Project. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}