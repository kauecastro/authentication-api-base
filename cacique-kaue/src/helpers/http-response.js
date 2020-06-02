class HttpResponse {
  constructor(res) {
    this.res = res;
  }

  internalServerError(err) {
    return this.res.status(500).json({ sucess: false, message: `Internal server error! ${err} `});
  };

  badRequest(err) {
    return this.res.status(400).json({ sucess: false, message: `Bad request! ${err}` });
  };

  unauthorized(err) {
    return this.res.status(401).json({ sucess: false, message: `Unauthorized! ${err}` });
  };

  ok(data, others) {
    return this.res.status(200).json({ sucess: true, message: `ok!`, ...others, data});
  };
}

module.exports = HttpResponse;