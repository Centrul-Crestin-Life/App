import { StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed';
import { TineretTabScreenProps } from '../../types';

export default function AnnouncementScreen({ navigation }: TineretTabScreenProps<'Announcement'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, those are your Announcements.</Text>
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