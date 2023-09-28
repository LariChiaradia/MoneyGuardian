import { SafeAreaView } from 'react-native';


import HomePage from './src/telas/Home';

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
    <SafeAreaView>
      <HomePage />
    </SafeAreaView>
  );
}
