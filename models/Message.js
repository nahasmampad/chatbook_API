const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const messageSchema = new mongoose.Schema(
  {
    conversationId:{
        type:String
    },
    sender:{
        type:String
    },
    text:{
        type:String
    }
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
