import { StyleSheet } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Header  from "../../components/Header.tsx"

export default function HomeScreen() {
  return (

    <ScrollView>
      <Header />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
});
