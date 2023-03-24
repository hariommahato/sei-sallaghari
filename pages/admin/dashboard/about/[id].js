import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetAboutDetailsQuery,
  useUpdateAboutMutation,
} from "@/services/api";

import { Providers } from "@/services/providers";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Enroll = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetAboutDetailsQuery(id);
  const [
    updateAbout,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateAboutMutation();

  const [aboutData, setAboutData] = useState({
    description: "",
  });
  const [images, setImages] = useState("");
  const { description } = aboutData;
  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    if (data) {
      const { description, images } = data?.about;
      setAboutData({
        description,
        images,
      });
      setImagePreview(images?.url);
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/about");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      description,
      images,
    };
    console.log(data);
    updateAbout({ id, data });
  };
  const onChange = (e) => {
    if (e.target.name === "images") {
      const profile = new FileReader();
      profile.onload = () => {
        if (profile.readyState === 2) {
          setImages(profile.result);
          setImagePreview(profile.result);
        }
      };
      profile.readAsDataURL(e.target.files[0]);
    } else setAboutData({ ...aboutData, [e.target.name]: e.target.value });
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
              <h5>Update About Data</h5>
              <div>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  value={description}
                  onChange={onChange}
                ></Form.Control>
              </div>

              <div>
                <Image
                  src={imagePreview}
                  alt=" Preview"
                  width={100}
                  height={100}
                  className="my-3"
                />
              </div>
              <div>
                <Image
                  src={images}
                  alt=" Preview"
                  width={100}
                  height={100}
                  className="my-3"
                />
              </div>
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

export default Enroll;
Enroll.getLayout = function PageLayout(page) {
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
