import React, { useContext } from 'react'
import { inject, observer } from 'mobx-react'
import { View, Text, Switch } from 'react-native'

import i18n from '../../i18n'
import { IRootStore } from '../../stores'
import { Theme } from '../../stores/Application'
import { ThemeContext } from '../../themes'
import ListItem from '../../components/ListItem'
import styles from './Settings.styles'

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

        {/* Dark mode */}
        <ListItem
          label={i18n.formatString(i18n.settings.darkModeLabel)}
          control={
            <Switch
              value={store.application.theme === 'dark' ? true : false}
              onValueChange={value => store.application.setTheme(value ? Theme.Dark : Theme.Light)}
            />
          }
        />
      </View>
    )
  }),
)

export default SettingsScreen
