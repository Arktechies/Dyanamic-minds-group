import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="pt-6 px-6 pb-8">
        <Quote className="h-8 w-8 text-orange-400 mb-4" />
        <blockquote className="mb-4 italic text-gray-700 leading-relaxed">{quote}</blockquote>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-lg mr-3">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-gray-800">{author}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

