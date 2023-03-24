import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/services/providers";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCreateAboutMutation } from "@/services/api";

const About = () => {
  const [createAbout, { isError, isLoading, isSuccess }] =
    useCreateAboutMutation();
  const [aboutData, setAboutData] = useState({
    description: "",
  });
  const router = useRouter();
  const { description } = aboutData;
  const [images, setImages] = useState("../favicon.io");
  const [imagePreview, setImagePreview] = useState("/favicon.io");

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/about");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { description, images };
    createAbout(data);
  };

  const onChange = (e) => {
    if (e.target.name === "images") {
      const profile = new FileReader();
      profile.onload = () => {
        if (profile.readyState === 2) {
          setImagePreview(profile.result);
          setImages(profile.result);
        }
      };
      profile.readAsDataURL(e.target.files[0]);
    } else {
      setAboutData({ ...aboutData, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div  style={{
            width:"60%",
            margin:"auto",
            display:"flex",
            marginTop:"0",
            justifyContent:"center"
          }}>
            <form onSubmit={submitHandler}>
              <h5 style={{ textAlign: "center", padding: "1rem" }}>
                Add About Data
              </h5>

             
              <div className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  value={description}
                  as={"textarea"}
                  onChange={onChange}
                />
              </div>
              <div className="my-3">
                <Form.Control
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={onChange}
                  multiple
                />
              </div>

              <div >
                <Image
                  src={imagePreview}
                  alt="Product Preview"
                  œ
                  width={50}
                  height={50}
                />
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

export default About;
About.getLayout = function PageLayout(page) {
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
