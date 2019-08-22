import { context } from './test/context';
import { handler } from '.';

describe('handler', () => {
    test('should return 200', async () => {
        const response = await handler({}, context, () => {});
        expect(response.statusCode).toEqual(200);
    });
});
