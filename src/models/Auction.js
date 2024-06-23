import mongoose from "mongoose";

const AuctionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  product: {
    type: ProductSchema,
    required: true,
  },
  initialPrice: {
    type: Number,
    required: true,
  },
  finalPrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: true,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
  status: {
    type: String,
    default: "active",
  },
});

export default mongoose.model("Auction", AuctionSchema);

const ProductSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
});