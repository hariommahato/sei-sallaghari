import Gallery from "../models/gallery";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();
export const createGallery = catchAsyncErrors(async (req, res, next) => {
  let images = req.body.images;

  let imageLinks = [];
  for (let i = 0; i < images?.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      
      folder: "SEI",
    });

    imageLinks.push({ public_id: result.public_id, url: result.secure_url });
  }
  req.body.images = imageLinks;
  const gallery = await Gallery.create(req.body);
  res.status(200).json({
    success: true,
  });
});

// get single carousel details
export const getGalleryDetails = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.query.id);
    if (!gallery) {
      res.status(400).json({
        success: false,
        message: "No Gallery found With this id",
      });
    } else {
      res.status(200).json({
        success: true,
        gallery,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const getAllGallery = async (req, res) => {
  try {
    let gallery = await Gallery.find();
    res.status(200).json({
      success: true,
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const updateGallery = async (req, res) => {
  try {
    let gallery = await Gallery.findById(req.query.id);
    if (!gallery) {
      res.status(404).json({
        success: false,
        message: "Gallery Not Found",
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
        for (let i = 0; i < gallery.images.length; i++) {
          await cloudinary.v2.uploader.destroy(gallery.images[i].public_id);
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
      gallery = await Gallery.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
        gallery,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteGallery = catchAsyncErrors(async (req, res, next) => {
  const gallery = await Gallery.findById(req.query.id);

  if (!gallery)
    return res.status(404).json({
      message: "Gallery Not Found",
    });

  for (let i = 0; i < gallery.images.length; i++) {
    await cloudinary.v2.uploader.destroy(gallery.images[i].public_id);
  }
  await Gallery.findByIdAndDelete(req.query.id);
  res.status(200).json({ success: true });
});
