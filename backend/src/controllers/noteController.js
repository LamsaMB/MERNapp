export function getNotes(req, res) {
    res.send('Hello from server piw');
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