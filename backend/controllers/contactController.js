import asycnHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

//@desc     Create new contact object
//@route    POST /api/contacts/contact
//@access   Public
const postNewContactInfo = asycnHandler(async (req, res) => {
  const { name, phone, email, message } = req.body;

  const contactInfo = await Contact.create({
    name,
    phone,
    email,
    message,
  });

  if (contactInfo) {
    res.status(201).json({
      _id: contactInfo._id,
      name: contactInfo.name,
      phone: contactInfo.phone,
      email: contactInfo.email,
      message: contactInfo.message,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Contact Information");
  }
});

//@desc     Delete contact information by id
//@route    DELETE /api/contacts/:id
//@access   Private/Admin
const deleteContactInfo = asycnHandler(async (req, res) => {
  const contactInfo = await Contact.findById(req.params.id);
  if (contactInfo) {
    await contactInfo.remove();
    res.json({ message: "Contact Information Deleted" });
  } else {
    res.status(404);
    throw new Error("Contact Information not found.");
  }
});

//@desc     Update contact to haveRead
//@route    PUT /api/contacts/contact/:id
//@access   Private/Admin
const updateContactInfo = asycnHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    contact.haveRead = Boolean(req.body.haveRead);

    const updateContact = await contact.save();

    res.json({
      _id: updateContact._id,
      haveRead: updateContact.haveRead,
    });
  } else {
    res.status(404);
    throw new Error("Contact not found.");
  }
});

//@desc     List all contact informations
//@route    POST /api/contacts/
//@access   Private/Admin
const getAllContactInfo = asycnHandler(async (req, res) => {
  const contactInfos = await Contact.find({});
  res.json(contactInfos);
});

//@desc     Get contact info by ID
//@route    GET /api/contacts/:id
//@access   Private/Admin
const getContactInfoById = asycnHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (contact) {
    return res.json(contact);
  } else {
    res.status(404);
    throw new Error("Contact not found");
  }
});

export {
  postNewContactInfo,
  deleteContactInfo,
  getAllContactInfo,
  updateContactInfo,
  getContactInfoById,
};
