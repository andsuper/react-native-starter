import React from 'react'
import { inject } from 'mobx-react'
import { Switch } from 'react-native'

import { version } from '../../../package.json'
import i18n from '../../i18n'
import { IRootStore } from '../../stores'
import { Theme } from '../../stores/Application'
import List from '../../components/List/List'
import ListItem from '../../components/ListItem'
import Screen from '../../components/Screen'
import Title from '../../components/Title'
import ThemedText from '../../components/ThemedText'

interface IProps {
  store: IRootStore
}

const SettingsScreen: React.FC<IProps> = ({ store }) => {
  return (
    <Screen>
      <Title>{i18n.formatString(i18n.settings.title)}</Title>

      <List>
        {/* Dark mode */}
        <ListItem
          label={i18n.formatString(i18n.settings.darkModeLabel)}
          right={
            <Switch
              value={store.application.theme === 'dark' ? true : false}
              onValueChange={value => store.application.setTheme(value ? Theme.Dark : Theme.Light)}
            />
          }
        />

        {/* Version */}
        <ListItem
          label={i18n.formatString(i18n.settings.versionLabel)}
          right={<ThemedText>{version}</ThemedText>}
        />
      </List>
    </Screen>
  )
}

export default inject('store')(SettingsScreen)
