import Carousel from "../models/homecarousel";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();
export const createHomeCarousel = catchAsyncErrors(async (req, res, next) => {
  let images = req.body.images;

  let imageLinks = [];
  for (let i = 0; i < images?.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "SEI",
    });

    imageLinks.push({ public_id: result.public_id, url: result.secure_url });
  }
  req.body.images = imageLinks;
  const carousel = await Carousel.create(req.body);
  res.status(200).json({
    success: true,
  });
});

// get single carousel details
export const getCarouselDetails = async (req, res) => {
  try {
    const carousel = await Carousel.findById(req.query.id);
    if (!carousel) {
      res.status(400).json({
        success: false,
        message: "No carousel found With this id",
      });
    } else {
      res.status(200).json({
        success: true,
        carousel,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getAllCarousel = async (req, res) => {
  try {
    let carousel = await Carousel.find();
    res.status(200).json({
      success: true,
      carousel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const updateCarousel = async (req, res) => {
  try {
    let carousel = await Carousel.findById(req.query.id);
    if (!carousel) {
      res.status(404).json({
        success: false,
        message: "Carousel Not Found",
      });
    } else {
      let images = [];
      if (typeof req.body.images === "string") {
        images.push(req.body.images);
      } else {
        images = req.body.images;
      }

      if (images !== undefined) {
        // Deleting Images From Cloudinary
        for (let i = 0; i < carousel.images.length; i++) {
          await cloudinary.v2.uploader.destroy(carousel.images[i].public_id);
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "SEI",
            resource_type: "image",
          });
          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }

        req.body.images = imagesLinks;
      }
      carousel = await Carousel.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
        carousel,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCarousel = catchAsyncErrors(async (req, res, next) => {
  const carousel = await Carousel.findById(req.query.id);

  if (!carousel)
    return res.status(404).json({
      message: "Carousel Not Found",
    });

  for (let i = 0; i < carousel.images.length; i++) {
    await cloudinary.v2.uploader.destroy(carousel.images[i].public_id);
  }
  await Carousel.findByIdAndDelete(req.query.id);
  res.status(200).json({ success: true });
});
