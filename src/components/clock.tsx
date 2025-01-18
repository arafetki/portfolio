"use client";

import { formatInTimeZone } from "date-fns-tz";
import { useEffect, useState } from "react";

interface ClockProps extends React.HTMLAttributes<HTMLTimeElement> {
    timezone: string;
};

export default function Clock({timezone,...props}: ClockProps) {
    const [time, setTime] = useState<string>(()=>formatInTimeZone(
            new Date(),
            timezone,
            "HH:mm zzz"
        ));

    useEffect(()=>{
        const updateTime = () => {
            const formatedTime = formatInTimeZone(
                new Date(),
                timezone,
                "HH:mm zzz"
            );
            setTime(formatedTime);
        };
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    },[timezone])

    return (
        <time dateTime={time} {...props}>{time}</time>
    );

}