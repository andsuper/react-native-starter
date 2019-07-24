import React from 'react'

import i18n from '../../i18n'
import Screen from '../../components/Screen'
import Title from '../../components/Title'

const HomeScreen: React.FC<{}> = () => {
  return (
    <Screen>
      <Title>{i18n.formatString(i18n.home.title)}</Title>
    </Screen>
  )
}

export default HomeScreen
