const PageClient = require('../clients/page');
const PostLoginParameters = require('../parameters/post-login-parameters');

const login = async (req, res, next) => {
  const model = new PostLoginParameters(req);
  const page = new PageClient();

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
    password: model.login.password
  };

  const response = await page.login(options);

  return res.status(200)
    .json(response);
};

module.exports = { login };