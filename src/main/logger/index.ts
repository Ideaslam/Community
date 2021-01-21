import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf, colorize } = format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const dbUserLogger = createLogger({
    format: combine(
        colorize(),
        label({ label: 'DB Drivers' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' }),
    ]
});
 

export {dbUserLogger};
