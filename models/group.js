const mongoose = import('mongoose');

const { Schema } = mongoose;

const GroupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

GroupSchema.virtual('url').get(function () {
  return `/dogs/groups/${this.name}`;
});

module.exports = mongoose.model('Group', GroupSchema);
