import { device } from "../../styles/adaptability";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styled from "styled-components";

const StyledDurationChart = styled.div`
  border-radius: 1rem;
  grid-column: 3 / span 2;
  background-color: var(--lightest-bg-color);
  color: var(--dark-text-color);
  padding: 1.5rem 2rem;

  /* & > *:first-child {
    margin-bottom: 1.5rem; // ???
  } */

  @media ${device.laptop} {
    grid-column: 3 / -1;
    padding: 1rem 1.5rem;
  }

  @media ${device.tablet} {
    grid-column: 1 / -1;
    padding: 1rem 1.5rem;
  }

  @media ${device.mobile} {
    font-size: 1rem;
    grid-column: 1 / -1;
    padding: 1rem 1.5rem;
  }
`;

const PieWrapper = styled.div`
  width: 100%;
  height: 27.5rem;

  @media ${device.desktop} {
    width: 100%;
    height: 23rem;
  }

  @media ${device.laptop} {
    width: 100%;
    height: 16rem;
  }

  @media ${device.tablet} {
    width: 100%;
    height: 18rem;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 23rem;
  }
`;

const startData = [
  {
    duration: "1 night",
    value: 0,
    color: "var(--light-danger-color)",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#987124",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#6a8131",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#368959",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#008b84",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#2787a2",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#607eaa",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "var(--purple-color)",
  },
];

function prepareData(startDate, stays) {
  function incArrValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrValue(arr, "1 night");
      if (num === 2) return incArrValue(arr, "2 nights");
      if (num === 3) return incArrValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrValue(arr, "15-21 nights");
      if (num > 21) return incArrValue(arr, "22+ nights");

      return arr;
    }, startDate)
    .filter((obj) => obj.value > 0);

  return data;
}

function DurationChart({ confirmedStays }) {
  const data = prepareData(startData, confirmedStays);

  return (
    <StyledDurationChart>
      <h3>Stays duration summary</h3>
      <PieWrapper>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              nameKey="duration"
              dataKey="value"
              // innerRadius={55}
              // outerRadius={130}
              /* cx="50%"
              cy="43%" */
              // label
            >
              {data.map((entry, id) => (
                <Cell fill={entry.color} stroke={entry.color} key={id} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="middle"
              align="right"
              width="25%"
              layout="vertical"
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </PieWrapper>
    </StyledDurationChart>
  );
}

export default DurationChart;
