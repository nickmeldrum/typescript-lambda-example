import { logInfo } from 'logger';
import { SimpleGatewayEvent } from 'types';

const handler: AWSLambda.Handler<SimpleGatewayEvent> = async event => {
    logInfo('starting lambda 2...');
    const body = { message: `Hello world, ${event.body}` };
    return {
        statusCode: 200,
        body: JSON.stringify(body),
    };
};

export { handler };
