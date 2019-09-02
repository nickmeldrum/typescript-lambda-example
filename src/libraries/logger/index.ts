enum LOGLEVELS {
    DEBUG = 0,
    INFO = 1,
    WARNING = 2,
    ERROR = 3,
    PRISTINE = 10000000,
}

let level: LOGLEVELS = LOGLEVELS.INFO;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logToStdOut = (LEVEL: LOGLEVELS): ((...arguments_: any[]) => void) => (...arguments_: any[]): void => {
    if (LEVEL >= level) console.log(...arguments_); // eslint-disable-line no-console
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logToStdError = (LEVEL: LOGLEVELS): ((...arguments_: any[]) => void) => (...arguments_: any[]): void => {
    if (LEVEL >= level) console.error(...arguments_); // eslint-disable-line no-console
};

const setLevel = (LEVEL: LOGLEVELS): (() => void) => (): void => {
    level = LEVEL;
};

export const setLogLevelToDebug = setLevel(LOGLEVELS.DEBUG);
export const setLogLevelToInfo = setLevel(LOGLEVELS.INFO);
export const setLogLevelToWarning = setLevel(LOGLEVELS.WARNING);
export const setLogLevelToError = setLevel(LOGLEVELS.ERROR);
export const setLogLevelToPristine = setLevel(LOGLEVELS.PRISTINE);
export const logDebug = logToStdOut(LOGLEVELS.DEBUG);
export const logInfo = logToStdOut(LOGLEVELS.INFO);
export const logWarning = logToStdError(LOGLEVELS.WARNING);
export const logError = logToStdError(LOGLEVELS.ERROR);
