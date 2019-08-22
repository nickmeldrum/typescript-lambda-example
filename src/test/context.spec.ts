import { context } from './context';

describe('test context', () => {
    test('getRemainingTimeInMillis should return 0', async () => {
        expect(context.getRemainingTimeInMillis()).toEqual(0);
    });

    test('done should be callable', async () => {
        expect(context.done).not.toThrow();
    });

    test('fail should be callable', async () => {
        expect(context.fail).not.toThrow();
    });

    test('succeed should be callable', async () => {
        expect(context.succeed).not.toThrow();
    });
});
