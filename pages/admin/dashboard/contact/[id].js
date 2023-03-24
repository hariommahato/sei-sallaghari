import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetContactDetailsQuery,
  useUpdateContactMutation,
} from "@/services/api";

import { Providers } from "@/services/providers";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetContactDetailsQuery(id);
  const [
    updateContact,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateContactMutation();
  {
    console.log(data);
  }
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    message: "",
  });

  const { firstname, lastname, email, number, message } = contactData;

  useEffect(() => {
    if (data) {
      const { firstname, lastname, email, number, message } = data?.contact;
      setContactData({
        firstname,
        lastname,
        email,
        number,
        message,
      });
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/contact");
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
      message,
    };

    updateContact({ id, data });
  };
  const onChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
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
              width: "100%",
              display: "flex",
              marginTop:"0",
              justifyContent:"center"
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update Contact Data</h5>
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
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  value={message}
                  onChange={onChange}
                ></Form.Control>
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

export default Contact;
Contact.getLayout = function PageLayout(page) {
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
