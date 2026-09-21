import Note from '../models/noteModel.js';

export function getNotes(req, res) {
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}

export function modifyNote(req, res) {
    res.status(200).json({message : 'Note modifier avec succes'})
}

export function deleteNote(req, res) {
    res.status(200).json({message : "Note supprimer avec succes"})
}

export function sendNote(req,res) {
    res.status(200).json({message : 'Note envoyer avec succes'})
}