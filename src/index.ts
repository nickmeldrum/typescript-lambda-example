import { Handler, APIGatewayEvent } from 'aws-lambda';

const handler: Handler = async (event: APIGatewayEvent) => {
    const body = { message: `hello world ${event.httpMethod}` };
    return {
        statusCode: 200,
        body: JSON.stringify(body),
        isBase64Encoded: false,
    };
};

export { handler }; // eslint-disable-line import/prefer-default-export
