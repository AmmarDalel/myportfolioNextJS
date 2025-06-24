import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import EventImageSlider from "./EventImageSlider"
import { Event } from "@/Data/data"

export default function EventCard({ event }: { event: Event }) {
  return (
    <Card className="bg-gray-900/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
      <EventImageSlider images={event.images} eventTitle={event.title} />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
      </CardContent>
    </Card>
  )
}
