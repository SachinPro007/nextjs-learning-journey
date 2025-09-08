import Link from "next/link"

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-around items-center flex-wrap">
      <Link href="/"><h1 className="text-xl font-bold">Next.js</h1></Link>
      <ul>
        {["Home", "About", "Service", "Contact", "Team"].map((item) => (
          <Link key={item} className="mx-3" href={`/${item === "Home"? "" : item.toLowerCase()}`}>{item}</Link>
        ))}
      </ul>
      <Link href="/admin">Admin</Link>
    </header>
  )
}

export default Header