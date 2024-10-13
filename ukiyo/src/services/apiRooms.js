import { MAX_ROWS } from "../utils/constants";
import supabase from "./supabase";

const supabaseUrl = "https://pnornbaiwgyhxggydeci.supabase.co";

export async function getRooms({ page }) {
  let query = supabase.from("rooms").select("*", { count: "exact" });

  // pagination
  if (page) {
    const from = (page - 1) * MAX_ROWS;
    const to = from + MAX_ROWS - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Couldn't load rooms!");
  }

  return { data, count };
}

export async function deleteRoom(id) {
  const { error } = await supabase.from("rooms").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Couldn't delete the room!");
  }

  return null;
}

export async function createEditRoom(newRoom, id) {
  const hasImgPath = newRoom.img?.startsWith?.(supabaseUrl);

  const imgName = `${Math.random()}-${newRoom.img.name}`.replaceAll("/", "");
  const imgPath = hasImgPath
    ? newRoom.img
    : `${supabaseUrl}/storage/v1/object/public/rooms-img/${imgName}`;

  // создать комнату только если нет id
  let query = supabase.from("rooms");

  // создать
  if (!id) query = query.insert([{ ...newRoom, img: imgPath }]);

  // редактировать
  if (id)
    query = query
      .update({ ...newRoom, img: imgPath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Couldn't add new room!");
  }

  if (hasImgPath) return data;

  const { error: imgError } = await supabase.storage
    .from("rooms-img")
    .upload(imgName, newRoom.img);

  if (imgError) {
    await supabase.from("rooms").delete().eq("id", data.id);
    throw new Error("Couldn't load the image!");
  }

  return data;
}
