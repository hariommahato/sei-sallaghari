import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/services/providers";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCreateHomeCarouselMutation } from "@/services/api";

const Carousel = () => {
  const [createHomeCarousel, { isError, isLoading, isSuccess }] =
    useCreateHomeCarouselMutation();
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/carousel");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { images };
    createHomeCarousel(data);
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagePreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
          setImagePreview((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div
            style={{
              width: "60%",
              margin: "auto",
              display: "flex",
              marginTop: "0",
              justifyContent: "center",
            }}
          >
            <form onSubmit={submitHandler}>
              <h5 style={{ textAlign: "center", padding: "1rem" }}>
                Add Carousel Data
              </h5>

              <div className="my-3">
                <Form.Control
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={onChange}
                  multiple
                />
              </div>
              <div>
              {imagePreview?.map((item,i)=>{
                return <Image
                key={i}
                  src={item}
                  alt="Product Preview"
                  width={50}
                  height={50}
                />
              })}
              
             
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={isLoading ? true : false}
                style={{ width: "100%", marginTop: "2rem" }}
              >
                submit
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
