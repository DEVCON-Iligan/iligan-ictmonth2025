
import { Badge } from '@/components/ui/badge';

interface SpeakerCardProps {
  name: string;
  title: string;
  company: string;
  bio: string;
  imageUrl?: string;
  expertise: string[];
}

const SpeakerCard = ({ 
  name, 
  title, 
  company, 
  bio, 
  imageUrl, 
  expertise 
}: SpeakerCardProps) => {
  return (
    <div className="glass-dark p-6 rounded-xl hover:glass transition-all duration-300 hover:scale-105 group">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center mb-4 text-white text-2xl font-bold">
          {name.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-purple-300 font-medium mb-1">{title}</p>
        <p className="text-gray-400 text-sm mb-3">{company}</p>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{bio}</p>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {expertise.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
