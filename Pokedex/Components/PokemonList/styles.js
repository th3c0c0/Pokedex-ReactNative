import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 0,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: '#666',
    marginHorizontal: 10,
    marginVertical: 10,
    overflow:'hidden',
    width:80,
  },
});
