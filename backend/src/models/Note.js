import mongoose from 'mongoose';
//Note a moi même il faut toujours creer le schema avant de creer le model

const noteSchema = mongoose.Schema(
    {
        title : {
            type: String,
            required: true
        },
        content : {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

const Note = mongoose.model('Note', noteSchema);

export default Note;