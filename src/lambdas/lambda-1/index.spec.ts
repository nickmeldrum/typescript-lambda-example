import { handler } from '.';

describe('handler', () => {
    test('should return 200', async () => {
        const context = ({} as unknown) as AWSLambda.Context;
        const response = await handler({ body: 'ohhi' }, context, () => {});
        expect(response.statusCode).toEqual(200);
    });
});
