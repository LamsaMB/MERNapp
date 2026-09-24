import express from 'express';
const router = express.Router();
import { getNotes, sendNote, deleteNote, modifyNote, getOneNote } from '../controllers/noteController.js';
export default router;

router.get('/',getNotes);
router.get('/:id', getOneNote);
router.post ('/', sendNote);
router.put('/:id', modifyNote);
router.delete('/:id', deleteNote);


