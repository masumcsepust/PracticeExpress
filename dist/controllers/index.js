"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocationsWithTimezones = void 0;
const getLocationsWithTimezones = (req, res, next) => {
    let locations = [
        {
            location: 'Germany',
            timezoneName: 'Central European Time',
            timezoneAbbr: 'CET',
            utcOffset: 1
        }
    ];
    res.status(200).json(locations);
};
exports.getLocationsWithTimezones = getLocationsWithTimezones;
//# sourceMappingURL=index.js.map