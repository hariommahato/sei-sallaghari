import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/services/providers";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCreateCategoryMutation } from "@/services/api";

const Category = () => {
  const [createCategory, { isError, isLoading, isSuccess }] =
    useCreateCategoryMutation();
  const [categoryData, setCategoryData] = useState({
    name: "",
  });
  const router = useRouter();
  const { name } = categoryData;

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/category");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { name };
    console.log(data)
    createCategory(data);
  };

  const onChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
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
                Add Category Data
              </h5>

              <div className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Category Name"
                  name="name"
                  value={name}
                  onChange={onChange}
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

export default Category;
Category.getLayout = function PageLayout(page) {
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
