import "../globals.css"

export default function ContactLayout({ children }) {
  return (
    <html>
      <head>
        <title>This is my Contact page</title>
      </head>
      <body>
        <h1 className="bg-blue-600 text-white p-4 shadow-md">Hello, Contact Page Nav</h1>
        {children}
      </body>
    </html>
  );
}