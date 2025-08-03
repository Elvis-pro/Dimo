import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  image: { type: String },
  downloadLinks: [{ type: String }],
  slug: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
