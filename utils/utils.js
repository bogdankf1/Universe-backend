const requestHandler = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    // console.log(JSON.parse(body))
    return JSON.parse(body)
  }
}

module.exports.requestHandler = requestHandler