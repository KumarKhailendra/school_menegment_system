const mongoose = require('mongoose');

const contectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
      type: String,
      required: true,
  },
  text: {
      type: String,
      required: true,
  }
}, {
    timestamps: true
});

const Contectus = mongoose.models.contectus || mongoose.model("contectus", contectSchema);

export default Contectus;
