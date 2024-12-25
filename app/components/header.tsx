import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-background text-foreground p-4 border-b border-primary shadow-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold text-[#046380]">DMG</div>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="#programs" className="text-[#046380] hover:text-[#911146] transition-colors duration-300 font-semibold text-lg">Programs</Link></li>
          <li><Link href="#events" className="text-[#046380] hover:text-[#911146] transition-colors duration-300 font-semibold text-lg">Events</Link></li>
          <li><Link href="#books" className="text-[#046380] hover:text-[#911146] transition-colors duration-300 font-semibold text-lg">Books</Link></li>
          <li><Link href="#about" className="text-[#046380] hover:text-[#911146] transition-colors duration-300 font-semibold text-lg">About Us</Link></li>
          <li><Link href="#contact" className="text-[#046380] hover:text-[#911146] transition-colors duration-300 font-semibold text-lg">Contact</Link></li>
        </ul>
        <Button variant="outline" size="icon" className="text-[#046380] border-[#046380] hover:bg-[#046380] hover:text-white font-bold">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </nav>
    </header>
  )
}

