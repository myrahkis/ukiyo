import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";

function Dashboard() {
  return (
    <>
      <Heading>
        <h1>Dashboard</h1>
        <DashboardFilter />
      </Heading>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
