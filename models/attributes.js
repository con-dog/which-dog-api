const mongoose = import('mongoose');

const { Schema } = mongoose;

const AttributeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

AttributeSchema.virtual('url').get(function () {
  return `/dogs/attributes/${this.name}`;
});

module.exports = mongoose.model('Attribute', AttributeSchema);
