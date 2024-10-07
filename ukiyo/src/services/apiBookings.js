import { MAX_ROWS } from "../utils/constants";
import supabase from "./supabase";

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, rooms(name), guests(fullName, email)",
      { count: "exact" }
    );

  // filter
  if (filter) query = query.eq(filter.field, filter.value);

  // sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // pagination
  if (page) {
    const from = (page - 1) * MAX_ROWS;
    const to = from + MAX_ROWS - 1;

    query = query.range(from, to);
  }

  const { data: bookings, error, count } = await query;

  if (error) throw new Error("Couldn't load bookings!");

  return { bookings, count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, rooms(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) throw new Error(`Couldn't load booking ${id}!`);

  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select();

  if (error) throw new Error(`Couldn't update booking ${id}!`);

  return data;
}

// eg the last 30 days
// export async function getBookingAfterDate(date) {}
