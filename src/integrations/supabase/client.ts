// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vtkuimakubfshuaettuv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0a3VpbWFrdWJmc2h1YWV0dHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczODcyNzcsImV4cCI6MjA2Mjk2MzI3N30.PHX8hGuaSnUOWT1IqKGgoAWVQmftir2FGg-syGwwgK0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);