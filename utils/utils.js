const requestHandler = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    return JSON.parse(body);
  }
}

module.exports.requestHandler = requestHandler