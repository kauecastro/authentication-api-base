const axios = require('axios');
const config = require('../config');

class PageClient {
  getUsers() {
    return axios.get(`${config.PAGE_URL}/user/all`)
      .then(response => response.data);
  };

  async getUser(id) {
    return axios.get(`${config.PAGE_URL}/user/${id}`)
      .then(response => response.data);
  };

  async postUser(user) {
    return axios.post(`${config.PAGE_URL}/user/${user}`)
      .then(response => response.data);
  };

  async deleteUser(id) {
    return axios.delete(`${config.PAGE_URL}/user/${id}`)
      .then(response => response.data);
  };

  async putUser(id) {
    return axios.put(`${config.PAGE_URL}/user/${id}`)
      .then(response => response.data);
  };

  async register(options) {
    return axios.post(`${config.PAGE_URL}/login`, options)
      .then(response => response.data);
  }

  async login(options) { 
    return axios.post(`${config.PAGE_URL}/login/login`, options)
      .then(response => response.data);
  }

}

module.exports = PageClient;