import supabase from "./supabase";

export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, rooms(name), guests(fullName, email)"
    );

  // filter
  if (filter) query = query.eq(filter.field, filter.value);

  // sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data: bookings, error } = await query;

  if (error) throw new Error("Couldn't load bookings!");

  return bookings;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, rooms(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) throw new Error("Couldn't load bookings!");

  return data;
}

// eg the last 30 days
// export async function getBookingAfterDate(date) {}
