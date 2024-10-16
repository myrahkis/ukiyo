import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";
import { device } from "../../styles/adaptability";
import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

function UpdateSettingsForm() {
  const { isUpdating, updSettings } = useUpdateSettings();
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const isWorking = isLoading || isUpdating;

  function handleUpd(e, field) {
    const { value } = e.target;

    if (!value) return;

    updSettings({ [field]: value });
  }

  return (
    <Form padding="4rem 5.5rem">
      <Wrapper>
        <label>Minimum nights per booking</label>
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpd(e, "minBookingLength")}
          disabled={isWorking}
        />
      </Wrapper>
      <Wrapper>
        <label>Maximum nights per booking</label>
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpd(e, "maxBookingLength")}
          disabled={isWorking}
        />
      </Wrapper>
      <Wrapper>
        <label>Max guests per booking</label>
        <Input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpd(e, "maxGuestsPerBooking")}
          disabled={isWorking}
        />
      </Wrapper>
      <Wrapper>
        <label>Breakfast price</label>
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpd(e, "breakfastPrice")}
          disabled={isWorking}
        />
      </Wrapper>
    </Form>
  );
}

export default UpdateSettingsForm;
