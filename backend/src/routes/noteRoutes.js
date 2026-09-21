import express from 'express';
const router = express.Router();
import { getNotes, sendNote, deleteNote, modifyNote } from '../controllers/noteController.js';
export default router;

router.get('/',getNotes);
router.post ('/', sendNote);
router.put('/:id', modifyNote);
router.delete('/:id', deleteNote);


