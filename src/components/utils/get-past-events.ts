export type EventType = {
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

export function getPastEvents(
  events: EventType[],
  currentDateInput: Date | string
): EventType[] {
  const now = new Date(currentDateInput);

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
    .filter((event) => {
      const endDateTime = new Date(`${event.date}T${event.time.end}:00`);
      return endDateTime < now;
    })
    .sort((a, b) => {
      const aEnd = new Date(`${a.date}T${a.time.end}:00`);
      const bEnd = new Date(`${b.date}T${b.time.end}:00`);
      return bEnd.getTime() - aEnd.getTime();
    });
}
