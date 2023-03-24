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
import { useDeleteCarouselMutation,  useGetHomeCarouselQuery } from "@/services/api";

const Carousel = () => {
  const { data, isLoading } = useGetHomeCarouselQuery();
  const router = useRouter();
  const [deleteCarousel, { isSuccess, isError }] = useDeleteCarouselMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/carousel");
    }
  }, [isSuccess, toast]);
  const enroll = React.useMemo(() => data, []);
  const newData = new Date("2023-03-18T12:48:45.147Z");
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
                router.push(`/admin/dashboard/carousel/${params.row._id}`);
              }}
            >
              <FaEdit />
              Edit
            </Button>

            <Button
              onClick={(e) => deleteCarousel(params.row._id)}
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
    data?.carousel?.forEach((item) => {
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

export default Carousel;
Carousel.getLayout = function PageLayout(page) {
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
