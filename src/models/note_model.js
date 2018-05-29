import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  // zIndex: Number,
  text: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

// create model class
const NoteModel = mongoose.model('Note', NoteSchema);

// create PostModel class from schema
export default NoteModel;
