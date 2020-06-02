const PageClient = require('../clients/page');
const HttpResponse = require('../helpers/http-response');
const GetUserParameters = require('../parameters/get-user-parameters');
const PostRegisterParameters = require('../parameters/post-register-parameters');

const getAll = async (req, res, next) => {
  const page = new PageClient();
  const httpResponse = new HttpResponse(res);
  
  const response = await page.getUsers();

  const { total, totalInPage } = response;

  const others = { total, totalInPage };

  return httpResponse.ok(response.data, others);
}

const get = async (req, res, next) => {
  const model = new GetUserParameters(req);
  const page = new PageClient();
  const httpResponse = new HttpResponse(res);

  const errorMessage = model.validate();

  if (errorMessage.length > 0) {
    return res.status(400)
      .json({
        status: false,
        message: errorMessage
      });
  }

  const response = await page.getUser(model.user.id);

  return httpResponse.ok(response.data);
}

const register = async (req, res, next) => {
  const model = new PostRegisterParameters(req);
  const page = new PageClient();
  const httpResponse = new HttpResponse(res);

  const errorMessage = model.validate();
  
  if (errorMessage.length > 0) {
    return res.status(400)
      .json({
        status: false,
        message: errorMessage
      });
  }

  const options = {
    username: model.login.username,
    password: model.login.password,
  };

  const response = await page.register(options);

  const { total, totalInPage } = response;

  const others = { total, totalInPage };

  return httpResponse.ok(response.data, others);
};

module.exports = { getAll, get, register };