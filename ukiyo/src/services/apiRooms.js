import supabase from "./supabase";

const supabaseUrl = "https://pnornbaiwgyhxggydeci.supabase.co";

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

export async function createEditRoom(newRoom, id) {
  // console.log(newRoom, id);

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
    console.error(error);
    throw new Error("Couldn't add new room!");
  }

  const { error: imgError } = await supabase.storage
    .from("rooms-img")
    .upload(imgName, newRoom.img);

  if (imgError) {
    await supabase.from("rooms").delete().eq("id", data.id);
    throw new Error("Couldn't load the image!");
  }

  return data;
}

// export async function updateRoom(id) {
//   const { data, error } = await supabase
//     .from("rooms")

//   if (error) {
//     console.error(error);
//     throw new Error("Couldn't update the room!");
//   }

//   return data;
// }
