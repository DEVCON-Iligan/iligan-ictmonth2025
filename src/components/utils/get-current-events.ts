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

export function getOngoingEvents(
  events: EventType[],
  currentDateInput: Date | string
): EventType[] {
  const currentDate = new Date(currentDateInput);

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
      const [startHour, startMinute] = event.time.start.split(':').map(Number);
      const [endHour, endMinute] = event.time.end.split(':').map(Number);

      const eventDate = new Date(event.date);

      const startDateTime = new Date(eventDate);
      startDateTime.setHours(startHour, startMinute, 0, 0);

      const endDateTime = new Date(eventDate);
      endDateTime.setHours(endHour, endMinute, 0, 0);

      return currentDate >= startDateTime && currentDate <= endDateTime;
    });
}
