import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

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
  registerLink?: string;
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
  posts,
  agencies,
  registerLink,
  isGlass = true,
}: EventCardProps) => {
  const currentDateTime = new Date()
  const [isRegistrationValid, setIsRegistrationValid] = useState(false)

  useEffect(() => {
    try {
      const eventDate = new Date(date);
      let startTime = null;
      let endTime = null;

      if (time?.start && time?.end) {
        const [startHours, startMinutes] = time.start.split(':');
        const [endHours, endMinutes] = time.end.split(':');

        startTime = new Date(eventDate);
        startTime.setHours(parseInt(startHours), parseInt(startMinutes));

        endTime = new Date(eventDate);
        endTime.setHours(parseInt(endHours), parseInt(endMinutes));

        setIsRegistrationValid(startTime > currentDateTime);
      } else {
        setIsRegistrationValid(eventDate > currentDateTime);
      }
    } catch (e) {
      setIsRegistrationValid(false);
    }
  }, [date, time])

  return (
    <Card className={`${isGlass ? "bg-white/50 hover:bg-white/50 backdrop-blur-[9px]" : "bg-white hover:bg-white"} p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full`}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-left text-xl font-bold text-black mb-2 group-hover:text-gradient-purple transition-all duration-300">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mb-2 w-full">
              {agencies.map((agency, index) => {
                const agencyName = typeof agency === 'string' ? agency : agency.name;
                return (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-[#6bb0d7]/20 text-blue-950 rounded-full border border-blue-950/30 whitespace-nowrap"
                  >
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
        <div className="w-full flex justify-end">
          {isRegistrationValid && registerLink.length > 0 && (
            <a href={registerLink} target="_blank" rel="noopener noreferrer">
              <Button className="b-[#6bb0d7] hover:bg-[#6bb0d7]/70 text-white">Register Now</Button>
            </a>
          )}
        </div>

        {!isRegistrationValid && posts && posts.length > 0 && (
            <div className="w-full flex flex-wrap gap-4 mt-4 bg-[#fafafa] p-4 rounded-lg border border-gray-200">
            {posts && posts.length > 0 && posts.map((post, index) => (
              <div key={index} className="flex flex-col w-full max-w-60 rounded-2xl bg-[#FFFFFF] border-[1px] border-gray-200">
                <img src={post.thumbnail} alt={post.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                <h4 className="text-sm font-semibold text-black px-4 py-2">{post.title}</h4>
                <p className="text-xs text-gray-600 px-4 py-2 line-clamp-5 overflow-hidden">{post.description}</p>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-[#6bb0d7] hover:underline mt-1 p-4">Read more</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default EventCard;
