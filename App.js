import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {

  //Fonte Utilizada 
  // const [fonteCarregada] = useFonts({
  //   "MontserratRegular": Montserrat_400Regular,
  //   "MontserratBold": Montserrat_700Bold,
  // });

  // if (!fonteCarregada) {
  //   return <View />
  // }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
