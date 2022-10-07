import { StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed';
import { GeneralTabScreenProps } from '../../types';

export default function MediaScreen({ navigation }: GeneralTabScreenProps<'Media'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, this is your Media database.</Text>
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