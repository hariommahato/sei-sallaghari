import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetEnrollDetailsQuery,
  useUpdateEnrollMutation,
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
  const { data, isError, isLoading } = useGetEnrollDetailsQuery(id);
  const [
    updateEnroll,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateEnrollMutation();
  {
    console.log(data);
  }
  const [enrollData, setEnrollData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    school: "",
    course: "",
  });
  const [images, setImages] = useState("");
  const { firstname, lastname, email, number, school, course } = enrollData;
  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    if (data) {
      const { firstname, lastname, email, number, school, course, images } =
        data?.enroll;
      setEnrollData({
        firstname,
        lastname,
        email,
        number,
        school,
        course,
        images,
      });
      setImagePreview(images?.url);
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push('/admin/dashboard/enroll')
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      number,
      school,
      course,
      images,
    };

    updateEnroll({ id, data });
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
    } else setEnrollData({ ...enrollData, [e.target.name]: e.target.value });
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
              <h5>Update Blog Data</h5>
              <div>
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  name="firstname"
                  value={firstname}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-1">
                <Form.Label>LastName</Form.Label>
                <Form.Control
                  name="lastname"
                  value={lastname}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={email}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-1">
                <Form.Label>ContactNumber</Form.Label>
                <Form.Control
                  name="number"
                  value={number}
                  onChange={onChange}
                ></Form.Control>
              </div>

              <div className="my-1">
                <Form.Label>School</Form.Label>
                <Form.Control
                  name="school"
                  value={school}
                  onChange={onChange}
                ></Form.Control>
              </div>

              <div className="my-1">
                <Form.Label>Course</Form.Label>

                <Form.Control
                  name="course"
                  value={course}
                  onChange={onChange}
                ></Form.Control>
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

              <div>
                <Image
                  src={imagePreview}
                  alt=" Preview"
                  width={100}
                  height={100}
                  className="my-3"
                />
                <Image
                  src={images}
                  alt=" Preview"
                  width={100}
                  height={100}
                  className="my-3"
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
