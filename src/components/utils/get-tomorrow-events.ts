type EventType = {
  title: string;
  date: string;
  time: {
    start: string;
    end: string;
  };
  location: string;
  attendees: number;
  description: string;
  agencies: { name: string; logo: string }[] | string[];
  registerLink: string;
  posts: {
    poster: string;
    title: string;
    description: string;
    link: string;
    thumbnail: string;
  }[];
};

export function getNextDayEventsSorted(
  events: EventType[],
  currentDateInput: Date | string
): EventType[] {
  const currentDate = new Date(currentDateInput);

  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);
  const nextDayStr = nextDay.toISOString().split('T')[0];

  return events
    .map((event) => {
      const normalizedAgencies = (event.agencies || []).map((agency: any) =>
        typeof agency === 'string' ? { name: agency, logo: '' } : agency
      );

      return {
        ...event,
        agencies: normalizedAgencies,
      };
    })
    .filter((event) => event.date === nextDayStr)
    .sort((a, b) => {
      const [aHour, aMin] = a.time.start.split(':').map(Number);
      const [bHour, bMin] = b.time.start.split(':').map(Number);

      const aTime = aHour * 60 + aMin;
      const bTime = bHour * 60 + bMin;

      return aTime - bTime;
    });
}
