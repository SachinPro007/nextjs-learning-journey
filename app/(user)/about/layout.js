import "./about_module.css"

export default function AboutLayout({ children }) {
  return (
    <html>
      <head>
        <title>This is my About page</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}