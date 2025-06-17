import { useState, useEffect } from 'react';

interface EventTime {
    start: string | null;
    end: string | null;
}

export const useEventRegistration = (date: string, time?: EventTime) => {
    const [isRegistrationValid, setIsRegistrationValid] = useState(false);

    let startTime = null;
    let endTime = null;

    useEffect(() => {
        const currentDateTime = new Date();
        try {
            const eventDate = new Date(date);

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
    }, [date, time]);

    return isRegistrationValid;
};