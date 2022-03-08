const mongoose = require("mongoose");

// establishing connection with mongodb server
const connect = async () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/chatAppDataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// blueprint or schema for every document of collection
const eventSchema = new mongoose.Schema(
  {
    eventType: {
      type: String,
      required: [true, "enter event type"],
    },
    userName: {
      type: String,
      required: [true, "enter user assosiated with event"],
    },
    time: {
      type: Number,
      required: [true, "enter time"],
    },
    eventContent: {
      type: String,
      required: [true, "enter content assosiated to event"],
    },
  },
  {
    versionKey: false,
  }
);

// model for mongodb
const Event = mongoose.model("event", eventSchema);

module.exports = { connect, Event };
