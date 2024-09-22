import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pnornbaiwgyhxggydeci.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBub3JuYmFpd2d5aHhnZ3lkZWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMjk5ODYsImV4cCI6MjA0MjYwNTk4Nn0.CprmFxgo0ajyfBoIIe0JQ3HBxeQ_p8e1isCaUL31Ff4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
