import { device } from "../styles/adaptability";
import styled from "styled-components";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";

const H1 = styled.h1`
  @media ${device.mobile} {
    width: 100%;
    text-align: start;
  }
`

function Dashboard() {
  return (
    <>
      <Heading>
        <H1>Dashboard</H1>
        <DashboardFilter />
      </Heading>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
