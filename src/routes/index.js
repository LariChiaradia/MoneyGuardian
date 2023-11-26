import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomePage from '../telas/Home';
import Login from '../telas/Login';
import Cadastro from '../telas/Cadastro';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
