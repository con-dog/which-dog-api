const mongoose = import('mongoose');

const { Schema } = mongoose;

const GroupSchema = new Schema({
  name: {
    type: String,
    enum: [
      'Herding',
      'Hound',
      'Miscellaneous',
      'Non-Sporting',
      'Sporting',
      'Terrier',
      'Toy',
      'Working',
    ],
    required: true,
  },
  description: { type: String, required: true },
});

GroupSchema.virtual('url').get(function () {
  return `/dogs/groups/${this.name}`;
});

module.exports = mongoose.model('Group', GroupSchema);
