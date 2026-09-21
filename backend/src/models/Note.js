import moogose from 'mongoose';
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

const Note = moogoose.model('Note', noteSchema);

export default Note;