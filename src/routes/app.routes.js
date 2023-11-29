import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomePage from "../telas/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
