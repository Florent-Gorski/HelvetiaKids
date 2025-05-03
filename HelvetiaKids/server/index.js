
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoint to fetch courses
app.get('/api/courses', async (req, res) => {
const { data, error } = await supabase.from('courses').select('*');
if (error) return res.status(500).json({ error: error.message });
res.json(data);
});

// Endpoint for user signup
app.post('/api/signup', async (req, res) => {
const { email, password } = req.body;
const { user, error } = await supabase.auth.signUp({ email, password });
if (error) return res.status(500).json({ error: error.message });
res.json({ user });
});

app.listen(process.env.PORT || 5000, () => {
console.log('Server running on port 5000');
});