import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 20,
    width: scale(300),
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    left: 10,
    flex: 1,
  },
  title: {
    marginLeft: 20,
    fontSize: 30,
  },
  checked: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  containerContent: {
    padding: 20,
    flex: 4,
  },
  text: {
    marginBottom: 10,
    paddingVertical: 10,
    fontSize: 18,
  },
  textDesc: {
    fontSize: 14,
  },
  textCheck: {
    marginBottom: 10,
    fontSize: 16,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  textDescCheck: {
    fontSize: 12,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  delete: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    fontSize: 15,
    right: 10,
    flex: 1,
  },
});

export default styles;
