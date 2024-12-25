import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

interface BookCardProps {
  title: string
}

export default function BookCard({ title }: BookCardProps) {
  return (
    <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="aspect-w-3 aspect-h-4 mb-4">
          <Image
            src={`/placeholder.svg?height=400&width=300&text=${encodeURIComponent(title)}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        <h3 className="text-sm font-medium text-center text-gray-700 hover:text-teal-600 transition-colors duration-300">{title}</h3>
      </CardContent>
    </Card>
  )
}

