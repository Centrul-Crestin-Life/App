import { StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed';
import { GeneralTabScreenProps } from '../../types';

export default function HomeScreen({ navigation }: GeneralTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, this is your Home screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});  