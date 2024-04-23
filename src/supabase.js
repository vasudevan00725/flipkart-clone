import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ktrtgvmjsdutdarrvpqd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cnRndm1qc2R1dGRhcnJ2cHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2OTIzNDgsImV4cCI6MjAyOTI2ODM0OH0.-oCHyJdaMhZUED-BdpbZLrLgTOli9KB5w_lHJ4GjpKU"
);
export default supabase;
