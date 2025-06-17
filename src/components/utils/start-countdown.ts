type CountdownFormatted = {
  timeString: string; // "DD:HH:MM:SS"
  isCompleted: boolean;
};

export function startCountdownFormatted(
  date: string,
  time: string,
  onUpdate: (result: CountdownFormatted) => void
): () => void {
  const target = new Date(`${date}T${time}:00`);

  const interval = setInterval(() => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      onUpdate({
        timeString: '00:00:00:00',
        isCompleted: true,
      });
      clearInterval(interval);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => String(num).padStart(2, '0');

    const timeString = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    onUpdate({
      timeString,
      isCompleted: false,
    });
  }, 1000);

  return () => clearInterval(interval);
}
