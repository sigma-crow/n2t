const noteService = require('@services/note');
const folderModel = require('@/services/folder');

const noteController = {
  async createNote(req, res) {
    const { isPublic, noteName } = req.body;
    const { user_idx: userIdx } = req.user;
    const rootFolder = await folderModel.findRootByID({ userIdx });
    const { folder_idx: folderIdx } = rootFolder;
    const result = await noteService.create({
      noteContext: '',
      userIdx,
      isPublic,
      path: '/',
      folderIdx,
      noteName,
    });
    if (!result) {
      res.status(400).json({
        result: false,
        mesesage: 'Create Fail',
      });
      return;
    }
    res.json({
      result: true,
      message: 'Create Success',
    });
  },

  async getNote(req, res) {
    const { user_idx: userIdx } = req.user;
    const notes = await noteService.get({ userIdx });
    const response = {};
    if (!notes) {
      response.result = false;
      response.mesesage = 'Get Note Fail';
      res.status(400).json(response);
      return;
    }
    response.result = true;
    response.mesesage = 'Get Note Success';
    response.notes = notes;
    res.json(response);
  },

  async getNoteById(req, res) {
    const { idx } = req.params;
    const { user_idx: userIdx } = req.user;
    const note = await noteService.getNoteById({ noteIdx: idx, userIdx });
    const response = {};
    if (!note) {
      response.result = false;
      response.mesesage = 'Fail';
      res.status(400).json(response);
      return;
    }
    response.result = true;
    response.message = 'Success';
    const result = Buffer.from(note.dataValues.note_context).toString('utf8');
    response.note = { ...note, noteContext: result };
    res.json(response);
  },

  async noteUpdate(req, res) {
    const { noteContext, noteIdx } = req.body;
    const { user_idx: userIdx } = req.user;
    const result = await noteService.updateNote({ noteContext, noteIdx, userIdx });
    const response = {};
    if (!result) {
      response.result = false;
      response.mesesage = 'Fail';
      res.status(400).json(response);
      return;
    }
    response.result = true;
    response.message = 'Success';
    res.json(response);
  },
};

module.exports = noteController;
