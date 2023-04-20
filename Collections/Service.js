const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  state: {
    require: true,
    type: String,
  },
});
module.exports = mongoose.model("Service", PostSchema);
