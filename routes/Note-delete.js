const express = require('express');
const router = express.Router();
const {userNotes} = require('../data/Data.js');
const { authenticateToken } = require('../data/Auth.js');
router.delete('/note/delete/:User_id/:Note_id',authenticateToken,(req,res)=>{
    userNotes.findOneAndDelete({User_id:req.params.User_id,id:req.params.Note_id})
    .exec()
    .then((deletedNote) => {
        if (!deletedNote) {
          return res.status(404).json({ message: 'Note not found' });
        }
        return res.status(200).json({ message: 'Note deleted successfully' });
    })
    .catch((error) => {
    return res.status(500).json({ error: error.message });
    });
})
module.exports=router;