import React from 'react'

import i18n from '../../i18n'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

const HomeScreen: React.FC<{}> = () => {
  return (
    <Layout>
      <Title>{i18n.formatString(i18n.home.title)}</Title>
    </Layout>
  )
}

export default HomeScreen
