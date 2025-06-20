import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useEventRegistration } from "@/hooks/use-event-registration";

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
  posts,
  agencies,
  registerLink,
  isGlass = true,
}: EventCardProps) => {
  const isRegistrationValid = useEventRegistration(date, time);

// Format the date to be in the format of Month Day, Year
const formattedDate = new Date(date).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

// Format the time to be in the format of 12:00 AM
const formattedTime = (timeString: string | null) => {
  if (!timeString) return "";
  const [hours, minutes] = timeString.split(":");
  const hoursInt = parseInt(hours);
  const ampm = hoursInt >= 12 ? "PM" : "AM";
  const hours12 = hoursInt % 12 || 12;
  return `${hours12}:${minutes} ${ampm}`;
}

// Check if the event is in the past, use to format attendees
// If event is in the past (done), set attendees to "attended"
// If event is current or in the future, set attendees to "expected"
const isPast = () => {
  const now = new Date();

  if (time) {
    const endTime = new Date(`${date}T${time.end}`);
    return now > endTime;
  }
  
  const eventDate = new Date(date);
  eventDate.setHours(23, 59, 59, 999);
  return now > eventDate;
}

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
                  <div className="w-fit h-fit flex flex-row items-center justify-center bg-[#6bb0d7]/20 text-blue-950 rounded-full border border-blue-950/30 p-[2px]" key={index}>
                    <img
                      src={typeof agency === 'string' ? '' : agency.logo}
                      alt={agencyName}
                      className="h-6 w-6 rounded-full border border-gray-300"
                      draggable="false"
                    />
                    <span
                      key={index}
                      className="p-1 text-xs font-medium whitespace-nowrap"
                    >

                      {agencyName}
                    </span>
                  </div>
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
            <span className="text-sm">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-sm">{time ? `${formattedTime(time.start)} - ${formattedTime(time.end)}` : "All Day:"}</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <MapPin className="h-4 w-4 text-green-400" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <Users className="h-4 w-4 text-orange-400" />
            <span className="text-sm">{attendees} {isPast() ? "attended" : "expected attendees"} </span>
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
          <div className="w-full flex flex-wrap gap-4 mt-4">
            {posts && posts.length > 0 && posts.map((post, index) => (
              <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="flex">
                <div className="flex flex-col w-full max-w-60 rounded-2xl bg-[#f3f2f7] border-[1px] border-gray-200 hover:scale-105 transition-all duration-300">
                  <img src={post.thumbnail} alt={post.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <h4 className="text-sm font-semibold text-black px-4 py-2">{post.title}</h4>
                  <p className="text-xs text-gray-600 px-4 py-2 line-clamp-5 overflow-hidden">{post.description}</p>
                  <p className="text-[#6bb0d7] w-fit hover:underline mt-1 p-4">Read More</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default EventCard;
