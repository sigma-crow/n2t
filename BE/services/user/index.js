const usersModel = require('@/models/index').users;

const userService = {
  async checkEmail({ email }) {
    const query = {};
    query.where = { email };
    const result = await usersModel.findAll(query);
    return result.length === 0;
  },
  async singup({ email, name }) {
    const query = { email, name };
    const result = await usersModel.create(query);
    return result;
  },
};

module.exports = userService;
