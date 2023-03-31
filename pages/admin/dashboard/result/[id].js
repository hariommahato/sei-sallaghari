import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetResultDetailsQuery,
  useUpdateResultMutation,
} from "@/services/api";
import { Providers } from "@/services/providers";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";


const Result = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetResultDetailsQuery(id);
  const [
    updateResult,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateResultMutation();

  const [resultData, setResultData] = useState({
    name: "",
    section: "",
    mark: "",
  });

  const { name, section, mark } = resultData;

  useEffect(() => {
    if (data) {
      const { name, section, mark } = data?.result;
      setResultData({
        name,
        section,
        mark,
      });
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/result");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      name,
      section,
      mark,
    };

    updateResult({ id, data });
  };
  const onChange = (e) => {
    setResultData({ ...resultData, [e.target.name]: e.target.value });
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
              marginTop: "0",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update Contact Data</h5>
              <div>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-1">
                <Form.Label>Section</Form.Label>
                <Form.Control
                  name="section"
                  value={section}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-1">
                <Form.Label>Mark</Form.Label>
                <Form.Control
                  name="mark"
                  value={mark}
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

export default Result;
Result.getLayout = function PageLayout(page) {
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
