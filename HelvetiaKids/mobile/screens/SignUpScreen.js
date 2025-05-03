import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import supabase from '../supabaseClient';

function SignUpScreen() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');

const handleSignUp = async () => {
const { user, error } = await supabase.auth.signUp({ email, password });
if (error) setMessage(`Error signing up: ${error.message}`);
else setMessage(`User signed up: ${user.email}`);
};

return (
<View>
<TextInput
placeholder="Email"
value={email}
onChangeText={setEmail}
/>
<TextInput
placeholder="Mot de passe"
value={password}
onChangeText={setPassword}
secureTextEntry
/>
<Button title="S'inscrire" onPress={handleSignUp} />
{message && <Text>{message}</Text>}
</View>
);
}

export default SignUpScreen;