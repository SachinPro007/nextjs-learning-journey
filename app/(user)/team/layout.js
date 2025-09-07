export default function TeamLayout({ children }) {
  return (
    <html>
      <head>
        <title>This is my Team page</title>
      </head>
      <body className="bg-gray-50">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}