import React, { ReactNode } from 'react'

import ThemedText from '../ThemedText'
import styles from './Title.styles'

interface IProps {
  children: ReactNode
}

const Title: React.FC<IProps> = ({ children }) => {
  return <ThemedText style={styles.text}>{children}</ThemedText>
}

export default Title
