import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#046380] text-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">DMG</div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook"><Facebook className="text-white hover:text-gray-300 transition-colors duration-300" /></Link>
            <Link href="#" aria-label="Twitter"><Twitter className="text-white hover:text-gray-300 transition-colors duration-300" /></Link>
            <Link href="#" aria-label="YouTube"><Youtube className="text-white hover:text-gray-300 transition-colors duration-300" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="text-white hover:text-gray-300 transition-colors duration-300" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="text-white hover:text-gray-300 transition-colors duration-300" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Explore More</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Programs</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonials</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Books</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Events</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Dynamic Minds Group | All rights reserved
        </div>
      </div>
    </footer>
  )
}

