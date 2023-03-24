import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/services/providers";
import { FaEdit } from "react-icons/fa";

import React, { useEffect } from "react";

import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useDeleteAboutMutation, useGetAboutQuery } from "@/services/api";

const About = () => {
  const { data, isLoading } = useGetAboutQuery();
  const router = useRouter();
  const [deleteAbout, { isSuccess, isError }] = useDeleteAboutMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/about");
    }
  }, [isSuccess, toast]);
  const enroll = React.useMemo(() => data, []);

  const newData = new Date("2023-03-18T12:48:45.147Z");

  const columns = [
    { field: "_id", headerName: " ID", minWidth: 200, flex: 0.5 },
    {
      field: "Description",
      headerName: "Description",
      type: "String",
      minWidth: 200,
      flex: 0.3,
    },
    
    {
      field: "Image",
      headerName: "Image",
      type: "String",
      minWidth: 250,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 200,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={() => {
                router.push(`/admin/dashboard/about/${params.row._id}`);
              }}
            >
              <FaEdit />
              Edit
            </Button>

            <Button
              onClick={(e) => deleteAbout(params.row._id)}
              className="mx-3"
              variant="danger"
            >
              {/* <DeleteIcon /> */}Delete
            </Button>
          </>
        );
      },
    },
  ];
  const rows = [];
  data &&
    data?.about?.forEach((item) => {
      rows.push({
        _id: item?._id,
        Description: item?.description,
       
        Image: item.images?.url,
      });
    });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <DataGrid
            rows={rows}
            columns={columns}
            // pageSize={15}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
            getRowId={(row) => row._id}
          />
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
