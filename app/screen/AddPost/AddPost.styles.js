import {StyleSheet} from 'react-native';
import {heightByScreen, widthByScreen} from '../../utils/dimensions';
import {scale} from '../../utils/scaling';

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(82,87,92,0.8)',
    height: heightByScreen(100),
    width: widthByScreen(100),
    position: 'absolute',
  },
  button: {
    flex: 1,
    marginHorizontal: scale(4),
    height: heightByScreen(6),
  },
  buttonSuccess: {
    flex: 1,
    marginHorizontal: scale(4),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: scale(20),
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  input: {
    color: '#52575C',
  },
  subtitle: {
    marginHorizontal: scale(4),
    fontSize: 14,
    marginTop: scale(10),
    marginBottom: scale(24),
  },
  title: {
    marginVertical: scale(10),
    fontSize: 16,
  },
});

export default styles;
