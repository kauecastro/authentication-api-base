const jwt = require('jsonwebtoken');

const mock = {
	user: {
		username: 'galeriapage',
		password: '123456'
	}
};

const login = async (req, res, next) => {
  const { username, password } = req.body
	const { user } = mock;

  if (!username || !password) {
    return res.status(403)
      .json({ 
				status: false, 
				message: 'Invalid fields. You must pass username and password.', 
				code: 'INVALID_FIELDS' 
			});
  }

  if (user.password !== password || user.username !== username) {
    return res.status(403)
      .json({ 
				status: false, 
				message: 'Username/Passord are incorrect.',
				code: 'INCORRECT_CREDENTIALS'
			})
  }

  const jwtObj = {
    username: user.name
  };

  const options = {
    expiresIn: '10h'
  };

  const token = jwt.sign(jwtObj, 'shhhhhh', options);

  return res.status(200)
    .json({ status: true, message: 'Success', data: token });
}

const verify = async (req, res, next) => {
  if (!req.headers.authorization)
    res.status(403)
      .json({ status: false, message: 'No credentials sent.', code: 'NO_CREDENTIALS_SENT' });

	const token = req.headers.authorization.replace('Bearer ', '');

	console.log(token)

  try {
    await jwt.verify(token, 'shhhhhh');
  } catch (error) {
    return res.status(400)
      .json({ status: false, message: 'Token is not valid.', code: 'INVALID_TOKEN' })
  }

  return res.status(200)
    .json({ status: true, message: 'Token is valid.' })
}

module.exports = { login, verify }