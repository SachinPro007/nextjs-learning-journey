export default function AboutLayout({ children }) {
  return (
    <html>
      <head>
        <title>This is my About page</title>
      </head>
      <body className="bg-gray-50">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}