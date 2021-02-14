import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: [true, "Leave me message!"],
    },
    haveRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
