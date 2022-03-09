import { Request, Response, NextFunction } from "express";
import { LocationWithTimezone } from "../entity/timezones";

export const getLocationsWithTimezones = (req: Request, res: Response, next: NextFunction) => {
    let locations: LocationWithTimezone[] = [
        {
            location: 'Germany',
            timezoneName: 'Central European Time',
            timezoneAbbr: 'CET',
            utcOffset: 1
        }
    ];

    res.status(200).json(locations);
};