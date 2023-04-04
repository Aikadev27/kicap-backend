const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.connect("mongodb://127.0.0.1:27017/Kicap");

mongoose.plugin(slug);
