import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://your-project-ref.supabase.co'; // Remplace par l'URL de ton projet Supabase
const SUPABASE_ANON_KEY = 'your-anon-key'; // Remplace par ta clé API anonyme

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;