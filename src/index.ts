import { Handler, APIGatewayEvent } from 'aws-lambda'; // eslint-disable-line import/no-unresolved

const handler: Handler = async (event: APIGatewayEvent) => {
    const body = { message: `Hello world! You used: ${event.httpMethod}.` };
    return {
        statusCode: 200,
        body: JSON.stringify(body),
        isBase64Encoded: false,
    };
};

export { handler };
