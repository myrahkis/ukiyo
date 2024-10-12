/* eslint-disable react/prop-types */
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const StyledSalesChart = styled.div`
  grid-column: 1 / -1;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);
  border-radius: 1rem;
  padding: 1.5rem 2rem;

  // changing grid line colours
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--main-color);
  }
`;

function SalesChart({ bookings, numDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  //   console.log(allDates);

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });

  console.log(data);

  return (
    <StyledSalesChart>
      <h2>Sales</h2>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" tick={{ fill: "var(--dark-text-color)" }} />
          <YAxis unit="$" tick={{ fill: "var(--dark-text-color)" }} />
          <CartesianGrid strokeDasharray="2" />
          {/* contentStyle={{ backgroundColor: "var(--light-bg-color)" }} */}
          <Tooltip />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="var(--dark-emphasis-color)"
            fill="var(--success-emphasis-color)"
            strokeWidth={1.5}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke="var(--dark-emphasis-color)"
            fill="var(--emphasis-color)"
            strokeWidth={1.5}
            name="Extras sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
