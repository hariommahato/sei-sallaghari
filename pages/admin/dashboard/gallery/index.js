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
import {   useDeleteGalleryMutation, useGetGalleryQuery } from "@/services/api";

const Gallery = () => {
  const { data, isLoading } = useGetGalleryQuery();
  const router = useRouter();
  const [deleteGallery, { isSuccess, isError }] = useDeleteGalleryMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/gallery");
    }
  }, [isSuccess, toast]);
  
  const columns = [
    { field: "_id", headerName: " ID", minWidth: 200, flex: 0.5 },

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
                router.push(`/admin/dashboard/gallery/${params.row._id}`);
              }}
            >
              <FaEdit />
              Edit
            </Button>

            <Button
              onClick={(e) => deleteGallery(params.row._id)}
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
  console.log(data)
  const rows = [];
  data &&
    data?.gallery?.forEach((item) => {
      rows.push({
        _id: item?._id,
        Image: item.images?.map((item,i)=>{
          return item?.url
        }),
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
            disableSelectionOnClic
            autoHeight
            getRowId={(row) => row._id}
          />
        </>
      )}
    </>
  );
};

export default Gallery;
Gallery.getLayout = function PageLayout(page) {
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
