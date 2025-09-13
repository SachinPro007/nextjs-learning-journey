export const metadata = {
  title: 'Random Jokes Generator',
  description: 'Random Jokes Generator App in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
