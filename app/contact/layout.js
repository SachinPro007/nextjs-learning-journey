export default function ContactLayout({ children }) {
  return (
    <html>
      <head>
        <title>This is my Contact page</title>
      </head>
      <body className="bg-gray-50">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}