import React from 'react'
import { inject } from 'mobx-react'
import { Switch } from 'react-native'

import i18n from '../../i18n'
import { IRootStore } from '../../stores'
import { Theme } from '../../stores/Application'
import ListItem from '../../components/ListItem'
import Title from '../../components/Title'
import Screen from '../../components/Screen'

interface IProps {
  store: IRootStore
}

const SettingsScreen: React.FC<IProps> = ({ store }) => {
  return (
    <Screen>
      <Title>{i18n.formatString(i18n.settings.title)}</Title>

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
    </Screen>
  )
}

export default inject('store')(SettingsScreen)
