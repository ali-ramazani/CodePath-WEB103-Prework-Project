import { createClient } from '@supabase/supabase-js';

const URL = 'https://wgmurpldrkoienzqexis.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbXVycGxkcmtvaWVuenFleGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2OTU5NTYsImV4cCI6MjA2NzI3MTk1Nn0.59St7gI4S_EnIL8j3jrSx-QURywO2JzeRQqAfqjODms';

export const supabase = createClient(URL, API_KEY);
