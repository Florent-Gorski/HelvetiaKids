import React, { useState } from 'react';
import supabase from '../supabaseClient';

function SignUp() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignUp = async (e) => {
e.preventDefault();
const { user, error } = await supabase.auth.signUp({ email, password });
if (error) console.log('Error signing up:', error.message);
else console.log('User signed up:', user);
};

return (
<form onSubmit={handleSignUp}>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Email"
required
/>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="Mot de passe"
required
/>
<button type="submit">S'inscrire</button>
</form>
);
}

export default SignUp;