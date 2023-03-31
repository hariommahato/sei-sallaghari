import SeiMap from "@/frontend/components/Map";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { useCreateContactMutation } from "@/services/api";
import { useRouter } from "next/router";
import { object, string, number, date, InferType } from 'yup';
import { toast, Toaster } from "react-hot-toast";



const Contact = () => {
  const [createContact, { isError, isLoading, isSuccess }] =
    useCreateContactMutation();
  const router = useRouter();
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    message: "",
  });

  const { firstname, lastname, email, number, message } = contactData;


  useEffect(() => {
    if (isSuccess) {
      toast.success("Message  Submitted  Successfully");
      router.push("/");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();

    if(firstname===""){
      toast.error("Please fill up name")
    }
    if(lastname===""){
      toast.error("Please fill up lastname")
    }
    if(email===""){
      toast.error("Please fill up Email")
    }
    if(number===""){
      toast.error("Please fill up number")
    } if(message===""){
      toast.error("Please fill up message")
    }
    
    const data = { firstname, lastname, email, number, message };
    createContact(data);
  };
  const onChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Toaster />
      <div className={styles.mainDiv}>
        <div className={styles.innerDiv}>
          <h1 className={styles.heading}>CONTACT US</h1>
        </div>
        <Row className={styles.row}>
          <Col>
            <div style={{ textAlign: "center" }}>
              <h5>SEI INSTITUTE</h5>
              <h6>9843577214, 9841621432</h6>
              <h6>
                <AiOutlineMail />{" "}
                <span className="mx-1">seieducationalinstitute@gmail.com</span>
              </h6>
              <h5>Have any questions ? We'd love to hear for you.</h5>
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
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Message/Queries"
                    name="message"
                    value={message}
                    onChange={onChange}
                  />
                </div>

                <div style={{ width: "100%" }}>
                  <Button
                    style={{ width: "100%", marginTop: "1rem" }}
                    onClick={submitHandler}
                  >
                    Submit Details
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

export default Contact;
