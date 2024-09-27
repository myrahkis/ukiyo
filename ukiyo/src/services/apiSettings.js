import supabase from "./supabase";

export async function getSettings() {
  let { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) throw new Error("Couldn't load settings!");

  return settings;
}

export async function updateSettings(newSet) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSet)
    .eq("id", 1)
    .select();

  if (error) throw new Error("Couldn't update the setting!");

  return data;
}
