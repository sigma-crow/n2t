const notesModel = require('@/models/index').notes;
const { Sequelize } = require('@models/index');
const { users } = require('@models');

const { Op } = Sequelize;

const noteService = {
  async create({ noteContext, userIdx, isPublic, path, folderIdx, noteName }) {
    const query = {
      note_context: noteContext,
      note_name: noteName,
      user_idx: userIdx,
      is_public: isPublic,
      path,
      parent_folder_idx: folderIdx,
    };
    const result = await notesModel.create(query);
    return result;
  },
  async get({ userIdx }) {
    const query = {};
    query.where = { user_idx: userIdx };
    const result = await notesModel.findAll(query);
    return result;
  },

  async getNoteById({ noteIdx, userIdx }) {
    const query = {};
    query.where = { user_idx: userIdx, note_idx: noteIdx };
    const result = await notesModel.findOne(query);
    return result;
  },

  async getPublicNoteById({ noteIdx }) {
    const query = {};
    query.where = { note_idx: noteIdx, is_public: true };
    const result = await notesModel.findOne(query);
    return result;
  },

  async updateNote({ noteContext, noteIdx, userIdx }) {
    const result = await notesModel.update(
      {
        note_context: noteContext,
      },
      {
        where: { user_idx: userIdx, note_idx: noteIdx },
      }
    );
    return result;
  },

  async getShearNote({ searchQuery }) {
    const query = {};
    query.where = {
      is_public: true,
      note_name: {
        [Op.like]: `%${searchQuery}%`,
      },
    };
    const result = await notesModel.findAll({
      where: {
        is_public: true,
        note_name: {
          [Op.like]: `%${searchQuery}%`,
        },
      },
      include: [
        {
          model: users,
          as: 'user',
        },
      ],
    });
    return result;
  },
};

module.exports = noteService;
