import supabase from "./supabase";

export async function getRooms() {
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Couldn't load rooms!");
  }

  return data;
}

export async function deleteRoom(id) {
  const { error } = await supabase.from("rooms").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Couldn't delete the room!");
  }

  return null;
}

export async function createRoom(newRoom) {
  const { data, error } = await supabase
    .from("rooms")
    .insert([newRoom])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Couldn't add new room!");
  }

  return data;
}
