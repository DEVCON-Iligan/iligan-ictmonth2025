
const TimelineConnector = ({ isLast = false }: { isLast?: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#6bb0d7] to-[#6bb0d7]/40 shadow-lg" />
      {!isLast && (
        <div className="w-0.5 h-40 bg-gradient-to-b from-[#6bb0d7]/50 to-transparent mt-2" />
      )}
    </div>
  );
};

export default TimelineConnector;
