/* eslint-disable no-console */
import {
    setLogLevelToDebug,
    setLogLevelToInfo,
    setLogLevelToWarning,
    setLogLevelToError,
    setLogLevelToPristine,
    logDebug,
    logInfo,
    logWarning,
    logError,
} from '.';

describe('logger', () => {
    let spiedConsoleLog: jest.SpyInstance;
    let spiedConsoleError: jest.SpyInstance;

    beforeEach(() => {
        spiedConsoleLog = jest.spyOn(global.console, 'log');
        spiedConsoleError = jest.spyOn(global.console, 'error');
        spiedConsoleLog.mockImplementation(() => {});
        spiedConsoleError.mockImplementation(() => {});
    });

    afterEach(() => {
        spiedConsoleLog.mockRestore();
        spiedConsoleError.mockRestore();
        setLogLevelToPristine();
    });

    describe('arguments', () => {
        beforeEach(() => {
            setLogLevelToDebug();
        });

        test('can log 1 string argument', () => {
            logInfo('oh hai');
            expect(console.log).toHaveBeenCalledWith('oh hai');
        });

        test('can log a string, number and an object argument', () => {
            logInfo('oh hai', 5, { foo: 'bar' });
            expect(console.log).toHaveBeenCalledWith('oh hai', 5, { foo: 'bar' });
        });
    });

    describe('stderr or stdout', () => {
        beforeEach(() => {
            setLogLevelToDebug();
        });

        test('logDebug outputs to stdout and not stderr', () => {
            logDebug('debugtests');
            expect(console.log).toHaveBeenCalled();
            expect(console.error).not.toHaveBeenCalled();
        });

        test('logInfo outputs to stdout and not stderr', () => {
            logInfo('infotest');
            expect(console.log).toHaveBeenCalled();
            expect(console.error).not.toHaveBeenCalled();
        });

        test('logWarning outputs to stderr and not stdout', () => {
            logWarning('warningtest');
            expect(console.log).not.toHaveBeenCalled();
            expect(console.error).toHaveBeenCalled();
        });

        test('logError outputs to stderr and not stdout', () => {
            logError('errtest');
            expect(console.log).not.toHaveBeenCalled();
            expect(console.error).toHaveBeenCalled();
        });
    });

    describe('level is pristine', () => {
        beforeEach(() => {
            setLogLevelToPristine();
        });

        test('should not log debug to stdout', () => {
            logDebug('debug > pristine: hi');
            expect(console.log).not.toHaveBeenCalledWith('debug > pristine: hi');
        });

        test('should not log info to stdout', () => {
            logInfo('info > pristine: hi');
            expect(console.log).not.toHaveBeenCalledWith('info > pristine: hi');
        });

        test('should not log warning to stderr', () => {
            logWarning('warning > pristine: hi');
            expect(console.error).not.toHaveBeenCalledWith('warning > pristine: hi');
        });

        test('should not log error to stderr', () => {
            logError('error > pristine: hi');
            expect(console.error).not.toHaveBeenCalledWith('error > pristine: hi');
        });
    });

    describe('level is debug', () => {
        beforeEach(() => {
            setLogLevelToDebug();
        });

        test('should log debug to stdout', () => {
            logDebug('debug > debug: hi');
            expect(console.log).toHaveBeenCalledWith('debug > debug: hi');
        });

        test('should log info to stdout', () => {
            logInfo('info > debug: hi');
            expect(console.log).toHaveBeenCalledWith('info > debug: hi');
        });

        test('should log warning to stderr', () => {
            logWarning('warning > debug: hi');
            expect(console.error).toHaveBeenCalledWith('warning > debug: hi');
        });

        test('should log error to stderr', () => {
            logError('error > debug: hi');
            expect(console.error).toHaveBeenCalledWith('error > debug: hi');
        });
    });

    describe('level is info', () => {
        beforeEach(() => {
            setLogLevelToInfo();
        });

        test('should NOT log debug to stdout', () => {
            logDebug('debug > info: hi');
            expect(console.log).not.toHaveBeenCalledWith('debug > info: hi');
        });

        test('should log info to stdout', () => {
            logInfo('info > info: hi');
            expect(console.log).toHaveBeenCalledWith('info > info: hi');
        });

        test('should log warning to stderr', () => {
            logWarning('warning > info: hi');
            expect(console.error).toHaveBeenCalledWith('warning > info: hi');
        });

        test('should log error to stderr', () => {
            logError('error > info: hi');
            expect(console.error).toHaveBeenCalledWith('error > info: hi');
        });
    });

    describe('level is warning', () => {
        beforeEach(() => {
            setLogLevelToWarning();
        });

        test('should NOT log debug to stdout', () => {
            logDebug('debug > warning: hi');
            expect(console.log).not.toHaveBeenCalledWith('debug > warning: hi');
        });

        test('should NOT log info to stdout', () => {
            logInfo('info > warning: hi');
            expect(console.log).not.toHaveBeenCalledWith('info > warning: hi');
        });

        test('should log warning to stderr', () => {
            logWarning('warning > warning: hi');
            expect(console.error).toHaveBeenCalledWith('warning > warning: hi');
        });

        test('should log error to stderr', () => {
            logError('error > warning: hi');
            expect(console.error).toHaveBeenCalledWith('error > warning: hi');
        });
    });

    describe('level is error', () => {
        beforeEach(() => {
            setLogLevelToError();
        });

        test('should NOT log debug to stdout', () => {
            logDebug('debug > error: hi');
            expect(console.log).not.toHaveBeenCalledWith('debug > error: hi');
        });

        test('should NOT log info to stdout', () => {
            logInfo('info > error: hi');
            expect(console.log).not.toHaveBeenCalledWith('info > error: hi');
        });

        test('should NOT log warning to stderr', () => {
            logWarning('warning > error: hi');
            expect(console.error).not.toHaveBeenCalledWith('warning > error: hi');
        });

        test('should log error to stderr', () => {
            logError('error > error: hi');
            expect(console.error).toHaveBeenCalledWith('error > error: hi');
        });
    });
});
/* eslint-enable no-console */
