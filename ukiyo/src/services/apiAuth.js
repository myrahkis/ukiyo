import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Couldn't login into your account!");

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error("Couldn't load current user.");

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error("Couldn't logout current user.");

  return null;
}

export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error("Couldn't sign up new user.");

  return data;
}

export async function updateUser({ password, fullName, ava }) {
  // upd  password or name
  let updData;

  if (password) updData = { password };
  if (fullName) updData = { data: { fullName, avatar: ava } };

  const { data, error } = await supabase.auth.updateUser(updData);

  if (error) throw new Error("Couldn't update the user.");

  if (!ava) return data;

  // upload ava
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageErr } = await supabase.storage
    .from("avatars")
    .upload(fileName, ava);

  if (storageErr) throw new Error("There was an error while uploading avatar.");

  // upd ava in use
  const { data: updUser, error: error2 } = supabase.auth.updateUser({
    data: {
      avatar: `https://pnornbaiwgyhxggydeci.supabase.co/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error("Couldn't update the user with new avatar.");

  return updUser;
}
