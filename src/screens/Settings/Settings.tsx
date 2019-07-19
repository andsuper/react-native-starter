import React, { useContext } from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text, Button, Switch } from 'react-native'

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
        <Text style={[styles.title, { color: theme.color }]}>
          {i18n.formatString(i18n.settings.title)}
        </Text>

        <View style={styles.item}>
          <Text style={styles.itemText}> {i18n.formatString(i18n.settings.darkModeLabel)}</Text>
          <Switch
            value={store.application.theme === 'dark' ? true : false}
            onValueChange={value => store.application.setTheme(value ? Theme.Dark : Theme.Light)}
          />
        </View>
      </View>
    )
  }),
)

export default SettingsScreen
