const handler: AWSLambda.Handler = async (event: AWSLambda.APIGatewayEvent) => {
    const body = { message: `Hello world! You used: ${event.httpMethod}.` };
    return {
        statusCode: 200,
        body: JSON.stringify(body),
        isBase64Encoded: false,
    };
};

export { handler };
