import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DashboardScreen from './screens/DashboardScreen';
import CoursesScreen from './screens/CoursesScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="About" component={AboutScreen} />
<Stack.Screen name="Dashboard" component={DashboardScreen} />
<Stack.Screen name="Courses" component={CoursesScreen} />
<Stack.Screen name="Sign Up" component={SignUpScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;