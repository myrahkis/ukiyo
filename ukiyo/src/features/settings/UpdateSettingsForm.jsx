import { useSettings } from "./useSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  return (
    <form>
      <div>
        <label>Minimum nights per booking</label>
        <input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          //   disabled={isLoading}
        />
      </div>
      <div>
        <label>Maximum nights per booking</label>
        <input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          //   disabled={isLoading}
        />
      </div>
      <div>
        <label>Max guests per booking</label>
        <input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          //   disabled={isLoading}
        />
      </div>
      <div>
        <label>Breakfast price</label>
        <input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          //   disabled={isLoading}
        />
      </div>
    </form>
  );
}

export default UpdateSettingsForm;
