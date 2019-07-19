import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  title: {
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 40,
    fontSize: 34,
    fontWeight: '800',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: '#D4D4D4',
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
    backgroundColor: '#FFF',
  },
  itemText: {
    fontSize: 16,
  },
})
