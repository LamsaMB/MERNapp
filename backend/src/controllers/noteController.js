import Note from '../models/Note.js';

export async function getNotes(_, res) { //si u utilise pas req ou l'autre tu peux mettre _ a la place 
    try{
        const notes =  await Note.find().sort({createdAt: -1}); //-1 pour que ca s'affiche par ordre decroissant le plus ressent s'affiche en first
        res.status(200).json(notes);
    }
    catch(error){
        console.error("error in get all notes", error);
        res.status(500).json({message : error.message})
    }
}

export async function getOneNote (req, res){
    try{
        const id = req.params.id;
        const noteNeeded = await Note.findById(id);
        if(!noteNeeded){
            res.status(404).json({message : 'Say guissouma sa note bi deh'})
        }
        res.status(200).send(noteNeeded);
        
    }
    catch(error){
        res.status(404).json({message : 'Note introuvable'})
    }
};

export async function modifyNote(req, res) {
    try{
        const {title, content} = req.body;
        const noteModified = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if(!noteModified) {
            return res.status(404).json({message: "Note not found"});
        }
        else {
            res.status(200).json(noteModified);
        }
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}

export async function deleteNote(req, res) {
    try{
        const id = req.params.id;
        await Note.findByIdAndDelete(id)
        res.status(200).json({message : "Note supprimer avec succés"});
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}

export async function sendNote(req,res) {
    try{
        const {title, content} = req.body;
        console.log(title, content);
        const newNote = new Note ({title, content});
        const savedNote = await newNote.save();
        res.status(200).json("Note created successfully");
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}