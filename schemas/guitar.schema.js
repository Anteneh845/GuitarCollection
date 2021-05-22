const {model, Schema, ObjectId} = require("mongoose");

const reviewSchema = new Schema({
    review: {type: String, required: true},
    reviewedBy: {
        // userId: {type: ObjectId, required: true},
        name: {type: String, required: true}
    },
    createdDate: {type: Date, default: Date.now()}
})

const guitarSchema = new Schema({
    type: {type: String, required: true, enum: ["Electric", "Acoustic", "Classical"]},
    brand: {type: String, required: true},
    year: {type: Number, required: true},
    link: {type: String, required: true},
    stringType: {type: String, enum: ["Steel", "Nylon"], default: "Steel"},
    reviews: [reviewSchema]
});

model("Guitar", guitarSchema);