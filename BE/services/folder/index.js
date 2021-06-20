const folderModel = require('@/models/index').folders;

const folderService = {
  async createRoot({ userIdx }) {
    const query = { name: 'root', is_root: true, path: '/', parent_folder_idx: -1, user_idx: userIdx };
    const result = await folderModel.create(query);
    return result;
  },

  async findRootByID({ userIdx }) {
    const query = {};
    query.where = { user_idx: userIdx, is_root: true };
    const result = folderModel.findOne(query);
    return result;
  },
};

module.exports = folderService;
