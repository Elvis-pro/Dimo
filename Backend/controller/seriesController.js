const Series = require("../models/series");

// GET all series
exports.getAllSeries = async (req, res) => {
  try {
    const seriesList = await Series.find();
    res.json(seriesList);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch series' });
  }
};

// POST a new series
exports.createSeries = async (req, res) => {
  try {
    const series = new Series(req.body);
    await series.save();
    res.status(201).json(series);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create series' });
  }
};
