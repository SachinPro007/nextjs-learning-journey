import Link from "next/link"

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-around items-center flex-wrap">
      <Link href="/"><h1 className="logo text-xl font-bold">Next.js</h1></Link>
      <ul>
        {["Home", "About", "Service", "Contact", "Team", "Clientcomp", "Servercomp"].map((item) => (
          <Link key={item} className="font-roboto mx-3" href={`/${item === "Home"? "" : item.toLowerCase()}`}>{item}</Link>
        ))}
      </ul>
      <Link href="/admin">Admin</Link>
    </header>
  )
}

export default Header