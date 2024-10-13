import { getTime, isToday } from "date-fns";
import { MAX_ROWS } from "../utils/constants";
import { getToday } from "../utils/helpers";
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

export async function deleteBooking(id) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) throw new Error(`Couldn't delete booking ${id}!`);

  return null;
}

// eg the last 30 days
// date must be ISOString
export async function getBookingAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) throw new Error(`Couldn't load bookings after ${date}!`);

  return data;
}

// date must be ISOString
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday({ end: true }));

  // console.log(getToday());
  // console.log(data);
  if (error) throw new Error(`Couldn't load stays after ${date}!`);

  return data;
}

export async function getStaysTodaysActivity() {
  let { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .order("created_at");
  // .or(
  //   `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
  // )

  // console.log(todayData);

  if (error) throw new Error(`Couldn't load stay's today's activity!`);

  return data;
}
