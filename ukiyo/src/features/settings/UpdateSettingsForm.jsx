import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

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
    <Form padding="">
      <div>
        <label>Minimum nights per booking</label>
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpd(e, "minBookingLength")}
          disabled={isWorking}
        />
      </div>
      <div>
        <label>Maximum nights per booking</label>
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpd(e, "maxBookingLength")}
          disabled={isWorking}
        />
      </div>
      <div>
        <label>Max guests per booking</label>
        <Input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpd(e, "maxGuestsPerBooking")}
          disabled={isWorking}
        />
      </div>
      <div>
        <label>Breakfast price</label>
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpd(e, "breakfastPrice")}
          disabled={isWorking}
        />
      </div>
    </Form>
  );
}

export default UpdateSettingsForm;
