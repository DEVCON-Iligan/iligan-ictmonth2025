import { useState, useEffect } from 'react';

export const useClientDate = () => {
    const [clientDate, setClientDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setClientDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return clientDate;
};