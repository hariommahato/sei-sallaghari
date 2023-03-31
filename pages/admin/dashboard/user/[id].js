import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { useGetSingleUserQuery, useUpdateUserMutation } from "@/services/api";

import { Providers } from "@/services/providers";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetSingleUserQuery(id);
  const [
    updateUser,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateUserMutation();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userData;
  useEffect(() => {
    if (data) {
      const { username, email, password } = data?.user;
      setUserData({ username, email, password });
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/user");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };

    updateUser({ id, data });
  };

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
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
              border: "1px solid red",
              height: "auto",
              width: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update User </h5>
              <Form.Control
              type="text"
                name="username"
                value={username}
                onChange={onChange}
              ></Form.Control>
              <Form.Control
              type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="my-3"
              ></Form.Control>
              <Form.Control
                className="my-3"
                name="password"
                value={password}
                onChange={onChange}
                as={"textarea"}
              ></Form.Control>
           
              <Button
                id="createProductBtn"
                type="submit"
                disabled={updateLoading ? true : false}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                }}
              >
                Update User
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default User;
User.getLayout = function PageLayout(page) {
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
