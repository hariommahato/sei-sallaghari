import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetCarouselDetailsQuery,
  useUpdateCarouselMutation,
} from "@/services/api";

import { Providers } from "@/services/providers";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Carousel = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetCarouselDetailsQuery(id);

  const [
    updateCarousel,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateCarouselMutation();

  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);

  console.log(imagePreview, images);
  useEffect(() => {
    if (data) {
      const { images } = data?.carousel?.images;
      setImages(images);
      setOldImages(data?.carousel?.images);
      setImagePreview(data?.carousel?.images);
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/carousel");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      images,
    };
    updateCarousel({ id, data });
  };
  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagePreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Toaster />
          <div
            style={{
              height: "auto",
              width: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update Carousel Data</h5>

              <div>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={onChange}
                  multiple
                />
              </div>

              <div>
                {oldImages?.map((item, i) => {
                  return (
                    <Image
                      key={i}
                      src={item?.url}
                      alt=" Preview"
                      width={100}
                      height={100}
                      className="my-3"
                    />
                  );
                })}

                {imagePreview?.map((item, i) => {
                  return (
                    <Image
                      key={i}
                      src={item}
                      alt=" Preview"
                      width={100}
                      height={100}
                      className="my-3"
                    />
                  );
                })}
              </div>

              <Button
                type="submit"
                disabled={updateLoading ? true : false}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                }}
              >
                Update Data
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Carousel;
Carousel.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <div style={{ display: "flex" }}>
          <DashboardSidebar />
          {page}
        </div>
      </Providers>
    </>
  );
};
