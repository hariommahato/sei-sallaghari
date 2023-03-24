import Contact from "../models/contact";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";

cloudinaryConfig();

export const createContact = catchAsyncErrors(async (req, res, next) => {
  const { firstname, lastname, email, number, message } = req.body;

  const contact = await Contact.create({
    firstname,
    lastname,
    email,
    number,
    message,
  });

  res.status(200).json({ success: true });
});
// get Details
export const getContactDetails = catchAsyncErrors(async (req, res, next) => {
  const contact = await Contact.findById(req.query.id);
  res.status(200).json({
    success: true,
    contact,
  });
});

export const getAllContact = catchAsyncErrors(async (req, res, next) => {
  const contact = await Contact.find();
  res.status(200).json({
    success: true,
    contact,
  });
});

export const updateContact = catchAsyncErrors(async (req, res, next) => {
  const data = await Contact.findById(req.query.id);
  const { firstname, lastname, email, number, message } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.firstname = firstname;
    data.lastname = lastname;
    data.email = email;
    data.number = number;
    data.message = message;
  }
  await data.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteContact = catchAsyncErrors(async (req, res, next) => {
  const contact = await Contact.findById(req.query.id);
  if (!contact) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  
  await Contact.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
