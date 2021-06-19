const authsModel = require('@/models/index').auths;

const authService = {
  async checkId({ id }) {
    const query = {};
    query.where = { id };
    const result = await authsModel.findAll(query);
    return result.length === 0;
  },

  async singup({ id, pass, userIdx }) {
    const query = { id, password: pass, user_idx: userIdx };
    const result = await authsModel.create(query);
    return result;
  },
};

module.exports = authService;
