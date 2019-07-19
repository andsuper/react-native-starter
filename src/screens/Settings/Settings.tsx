import React, { useContext } from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text, Button } from 'react-native'

import i18n from '../../i18n'
import styles from './Settings.styles'
import { IRootStore } from '../../stores'
import { Theme } from '../../stores/Application'
import { ThemeContext } from '../../themes'

interface IProps {
  children: React.ReactChildren
  store: IRootStore
}

const SettingsScreen: React.FC<IProps> = inject('store')(
  observer(({ store }) => {
    const theme: any = useContext(ThemeContext)

    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.text, { color: theme.color }]}>
          {i18n.formatString(i18n.settings.headline)}
        </Text>
        <Button
          title="Change to dark theme"
          onPress={() => store.application.setTheme(Theme.Dark)}
        />
      </View>
    )
  }),
)

export default SettingsScreen
