import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetCategoryDetailsQuery,
  useUpdateCategoryMutation,
} from "@/services/api";
import { Providers } from "@/services/providers";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
const Category = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetCategoryDetailsQuery(id);
  const [
    updateCategory,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateCategoryMutation();

  const [categoryData, setCategoryData] = useState({
    name: "",
  });

  const { name } = categoryData;

  useEffect(() => {
    if (data) {
      const { name } = data?.category;
      setCategoryData({
        name,
      });
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/category");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      name,
    };

    updateCategory({ id, data });
  };
  const onChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
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
              <h5>Update Category Data</h5>
              <div>
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
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
