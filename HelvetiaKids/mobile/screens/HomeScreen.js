import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
return (
<View>
<Text>Bienvenue sur HelvetiaKids !</Text>
<Button title="À propos" onPress={() => navigation.navigate('About')} />
<Button title="Tableau de bord" onPress={() => navigation.navigate('Dashboard')} />
<Button title="Cours" onPress={() => navigation.navigate('Courses')} />
<Button title="S'inscrire" onPress={() => navigation.navigate('Sign Up')} />
</View>
);
}

export default HomeScreen;