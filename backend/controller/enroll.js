import Enroll from "../models/enroll";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";

cloudinaryConfig();

export const createEnroll = catchAsyncErrors(async (req, res, next) => {
  const { firstname, lastname, email, number, school, course,images } = req.body;
  {console.log(req.body)}

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "SeiInstitute",
    width: "150",
    crop: "scale",
  });

  const enroll = await Enroll.create({
    firstname,
    lastname,
    email,
    number,
    school,
    course,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getEnrollDetails = catchAsyncErrors(async (req, res, next) => {
  const enroll = await Enroll.findById(req.query.id);
  res.status(200).json({
    success: true,
    enroll,
  });
});

export const getAllEnroll = catchAsyncErrors(async (req, res, next) => {
  const enroll = await Enroll.find();
  res.status(200).json({
    success: true,
    enroll,
  });
});

export const updateEnroll = catchAsyncErrors(async (req, res, next) => {
  const data = await Enroll.findById(req.query.id);
  const { firstname, lastname, email, number, school, course } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.firstname = firstname;
    data.lastname = lastname;
    data.email = email;
    data.number = number;
    data.school = school;
    data.course = course;
  }

  if (images !== "") {
    const result = await cloudinary.v2.uploader.upload(images, {
      folder: "Consultancy",
      width: "150",
      crop: "scale",
    });
    await cloudinary.v2.uploader.destroy(data?.images?.public_id);
    data.images = { public_id: result.public_id, url: result.secure_url };
  }

  await data.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteEnroll = catchAsyncErrors(async (req, res, next) => {
  const enroll = await Enroll.findById(req.query.id);
  if (!enroll) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = enroll.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await Enroll.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
