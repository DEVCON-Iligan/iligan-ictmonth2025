
const TimelineConnector = ({ isLast = false }: { isLast?: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-purple-400 shadow-lg" />
      {!isLast && (
        <div className="w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent mt-2" />
      )}
    </div>
  );
};

export default TimelineConnector;
