exports.handler = async event => {
  const body = { message: 'hello world' }
  return {
    statusCode: 200,
    body: JSON.stringify(body),
    isBase64Encoded: false
  }
}
