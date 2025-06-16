import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  description: string;
  type: string;
  agencies?: string[];
  isUpcoming?: boolean;
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
  isUpcoming = false 
}: EventCardProps) => {
  return (
    <Card
      className={`glass-dark hover:glass p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        isUpcoming ? "border-purple-500/50 bg-purple-500/5" : ""
      }`}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="span-group flex items-center gap-2 mb-2">
              {agencies.length > 0 && (
                <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                  {agencies}
                </span>
              )}
              <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                {type}
              </span>
              {isUpcoming && (
                <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                  Upcoming
                </span>
              )}
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
            <span className="text-sm">{time}</span>
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
