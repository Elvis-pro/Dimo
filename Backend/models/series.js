import mongoose from 'mongoose';

const episodeSchema = new mongoose.Schema({
  title: String,
  downloadLink: String
});

const seasonSchema = new mongoose.Schema({
  seasonNumber: Number,
  episodes: [episodeSchema]
});

const seriesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  image: { type: String },
  slug: { type: String, unique: true, required: true },
  seasons: [seasonSchema],
  createdAt: { type: Date, default: Date.now }
});

const Series = mongoose.model('Series', seriesSchema);

export default Series;
