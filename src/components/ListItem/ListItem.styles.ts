import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  first: {
    borderTopWidth: 1,
  },
  label: {
    fontSize: 16,
  },
})
