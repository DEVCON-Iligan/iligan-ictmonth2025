import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  time?: {
    start: string | null;
    end: string | null;
  };
  location: string;
  attendees: string | number | null;
  description: string | null;
  type: string;
  agencies?: (string | { name: string; logo: string })[];
  posts?: {
    poster: string;
    title: string;
    description: string;
    link: string;
    thumbnail: string;
  }[];
  isGlass?: boolean;
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
  isGlass = true,
}: EventCardProps) => {
  return (
    <Card className={`${isGlass ? "bg-white/50 hover:bg-white/50 backdrop-blur-[9px]" : "bg-white hover:bg-white"} p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-left text-xl font-bold text-black mb-2 group-hover:text-gradient-purple transition-all duration-300">
              {title}
            </h3>
            <div className="span-group flex items-center gap-2 mb-2">
              {agencies.map((agency, index) => {
                const agencyName = typeof agency === 'string' ? agency : agency.name;
                return (
                  <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    {agencyName}
                  </span>
                );
              })}
            </div>
            <p className="text-left text-black text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-black">
            <Calendar className="h-4 w-4 text-purple-400" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-sm">{time ? `${time.start} - ${time.end}` : "All Day:"}</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <MapPin className="h-4 w-4 text-green-400" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <Users className="h-4 w-4 text-orange-400" />
            <span className="text-sm">{attendees} attendees </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
