import "../globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
        <title>My Next.js App</title>
      <body>
        <Header />
        {children}
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <p>© 2023 My Next.js Project. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}