import { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  iconColor?: string;
}

const InfoCard = ({ icon, title, subtitle, iconColor = '' }: InfoCardProps) => {
  return (
    <div className="glass p-6 rounded-xl text-center hover:glass-dark transition-all duration-300 hover:scale-105">
      <div className={`h-8 w-8 ${iconColor} mx-auto mb-3`}>
        {icon}
      </div>
      <p className="text-white font-semibold">{title}</p>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  );
};

export default InfoCard;