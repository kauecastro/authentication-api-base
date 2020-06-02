class GetUserParameters {
  constructor(req) {
    this.user = {
      id: req.params.id
    };
  }

  validate() {
    let response = [];

    if(!this.user) {
      response.push('User is invalid!');
    }

    if(!this.user.id) {
      response.push('Id is invalid!');
    }

    return response;
  }
}

module.exports = GetUserParameters;