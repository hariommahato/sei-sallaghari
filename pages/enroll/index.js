import SeiMap from "@/frontend/components/Map";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/BookNow.module.css";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineMail } from "react-icons/ai";
import { useCreateEnrollMutation } from "@/services/api";
import { useRouter } from "next/router";
import Spinner from "react-bootstrap/Spinner";
import Image from "next/image";

const Enroll = () => {
  const [createEnroll, { isError, isLoading, isSuccess }] =
    useCreateEnrollMutation();
  const router = useRouter();
  const [enrollData, setEnrollData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    school: "",
    course: "",
  });
  const [images, setImages] = useState("/favicon.io");
  const [imagePreview, setImagePreview] = useState("/favicon.io");
  const { firstname, lastname, email, number, school, course } = enrollData;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Detail Submitted  Successfully");
      router.push("/");
    }
  });
  console.log(isLoading, isError, isSuccess);
  const submitHandler = (e) => {
    e.preventDefault();
    if (firstname == "") {
      toast.error("Name Cannot Be Empty");
    }
    if (lastname == "") {
      toast.error("Lastname Cannot Be Empty");
    }
    if (email == "") {
      toast.error("Email Cannot Be Empty");
    }
    if (number == "") {
      toast.error("Number Cannot Be Empty");
    }
    if (school == "") {
      toast.error("School Cannot Be Empty");
    }
    if (course == "") {
      toast.error("Course Cannot Be Empty");
    }
    if (images == "") {
      toast.error("Image Cannot Be Empty");
    }
    const data = { firstname, lastname, email, number, school, course, images };

    createEnroll(data);
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
      setEnrollData({ ...enrollData, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      <Toaster />
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <div className={styles.innerDiv}>
          <h1 className={styles.heading}>BOOK SEAT NOW </h1>
        </div>
        <Row className={styles.row}>
          <Col>
            <div className="text-center">
              <h5>SEI INSTITUTE</h5>
              <h6>9843577214, 9841621432</h6>
              <h6>
                <AiOutlineMail />{" "}
                <span className="mx-1">seieducationalinstitute@gmail.com</span>
              </h6>
              <h5>Fill out the form, we'd get you back soon</h5>
            </div>

            <div className={styles.formContainer}>
              <Form>
                <div>
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    name="firstname"
                    value={firstname}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Form.Label>LastName</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Contact Number"
                    name="number"
                    value={number}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Form.Label>Your School / Colleges</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name of your school/college"
                    name="school"
                    value={school}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Form.Label>Course you want to enroll it </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={onChange}
                    name="course"
                  >
                    <option>Select Course</option>
                    <option value="Advanced Sciemce Classes">
                      Advanced Science Classes{" "}
                    </option>
                    <option value="Staff Nurese/HA/Lab/Pharmayc">
                      Staff Nurese/HA/Lab/Pharmacy
                    </option>
                    <option value="Management Course">Management Course</option>
                    <option value="All Level Computer Course">
                      All Level Computer Course
                    </option>
                    <option value="A-level Course">A-level Course</option>
                    <option value="Language Classes ">Language Classes </option>
                    <option value="Anchoring Classes">
                      Anchoring Classes{" "}
                    </option>
                  </Form.Select>
                </div>
                <div className="my-3">
                  <Form.Control type="file" name="images" onChange={onChange} />
                </div>
                <div>
                  <Image
                    src={imagePreview}
                    alt="Image"
                    width={100}
                    height={100}
                    className="my-3"
                  />
                  <Image
                    src={images}
                    alt="Image"
                    width={100}
                    height={100}
                    className="my-3"
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <Button
                    style={{ width: "100%", marginTop: "1rem" }}
                    onClick={submitHandler}
                    disabled={isLoading ? true : false}
                  >
                    {isLoading ? (
                      <Spinner animation="border" variant="" />
                    ) : (
                      "Submit Details"
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <SeiMap />
      </div>
    </>
  );
};

export default Enroll;
