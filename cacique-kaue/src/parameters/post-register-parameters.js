class PostRegisterParameters {
  constructor(req) {
    this.login = {
      name: req.params.name,
      cpf: req.params.cpf,
      username: req.params.username,
      password: req.params.password
    };
  }

  validate() {
    let response = [];

    if (!this.login) {
      response.push('Login is invalid!');
    }

    if (!this.login.username) {
      response.push('Username is invalid!');
    }

    if (!this.login.password) {
      response.push('Password is invalid!');
    }

    if (!this.login.cpf) {
      response.push('Password is invalid!');
    }

    if (!this.login.name) {
      response.push('Password is invalid!');
    }

    return response;
  }
}

module.exports = PostRegisterParameters;