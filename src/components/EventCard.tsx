import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  time: {
    isALlDay: boolean;
    start: string | null;
    end: string | null;
  };
  location: string;
  attendees: string | number | null;
  description: string | null;
  type: string;
  agencies?: string[];
  posts?: {
    poster: string;
    title: string;
    description: string;
    link: string;
    thumbnail: string;
  }[];
}

const EventCard = ({ 
  title, 
  date, 
  time, 
  location, 
  attendees, 
  description, 
  type,
  agencies,
}: EventCardProps) => {
  return (
    <Card className="glass-dark hover:glass p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="span-group flex items-center gap-2 mb-2">
              {agencies.length > 0 && agencies.map((agency, index) => (
                <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                  {agency}
                </span>
              ))}
              <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                {type}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-purple transition-all duration-300">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="h-4 w-4 text-purple-400" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-sm">{time.isALlDay ? "All Day" : `${time.start} - ${time.end}`}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-4 w-4 text-green-400" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Users className="h-4 w-4 text-orange-400" />
            <span className="text-sm">{attendees}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
