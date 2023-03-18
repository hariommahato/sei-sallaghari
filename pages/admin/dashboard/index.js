import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/services/providers";
const Dashboard = () => {
  return <></>;
};
export default Dashboard;
Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <DashboardSidebar />
        {page}
      </Providers>
    </>
  );
};
