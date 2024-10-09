import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

function Settings() {
  return (
    <>
      <Heading>
        <h1>Update hotel settings</h1>
      </Heading>
      <div>
        <UpdateSettingsForm />
      </div>
    </>
  );
}

export default Settings;
