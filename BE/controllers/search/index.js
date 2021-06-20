const noteService = require('@services/note');

const searchContoller = {
  async searchPublicNote(req, res) {
    const { query } = req.query;
    const result = await noteService.getShearNote({ searchQuery: query });

    if (!result) {
      res.status(400).json({
        result: false,
        message: 'Search Fail',
      });
      return;
    }
    res.json({
      result: true,
      message: 'Search Success',
      notes: result,
    });
  },

  async getNote(req, res) {
    const { idx: noteIdx } = req.query;
    const result = await noteService.getPublicNoteById({ noteIdx });
    if (!result) {
      res.status(400).json({
        result: false,
        message: 'Fail',
      });
      return;
    }
    const bolbData = Buffer.from(result.dataValues.note_context).toString('utf8');
    res.json({
      result: true,
      message: 'Success',
      note: {
        ...result.dataValues,
        note_context: bolbData,
      },
    });
  },
};
module.exports = searchContoller;
