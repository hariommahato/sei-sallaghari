import About from "../models/about";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createAbout = catchAsyncErrors(async (req, res, next) => {
  const { images, description } = req.body;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "SEI",
    width: "150",
    crop: "scale",
  });

  const about = await About.create({
    description,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getAboutDetials = catchAsyncErrors(async (req, res, next) => {
  const about = await About.findById(req.query.id);
  res.status(200).json({
    success: true,
    about,
  });
});

export const getAllAbout = catchAsyncErrors(async (req, res, next) => {
  const about = await About.find();
  res.status(200).json({
    success: true,
    about,
  });
});

export const updateAbout = catchAsyncErrors(async (req, res, next) => {
  const data = await About.findById(req.query.id);
  const { images, description } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.description = description;
   
  }

  if (images !== "") {
    const result = await cloudinary.v2.uploader.upload(images, {
      folder: "SEI",
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

export const deleteAbout = catchAsyncErrors(async (req, res, next) => {
  const about = await About.findById(req.query.id);
  if (!about) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = about.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await About.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
