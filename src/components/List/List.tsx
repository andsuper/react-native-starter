import React, { ReactNode } from 'react'
import { View } from 'react-native'

interface IProps {
  children: ReactNode | ReactNode[]
}

// @TODO: Improve types
const List: React.FC<IProps> = ({ children, ...rest }) => {
  let elements: any = React.Children.toArray(children)

  if (elements.length === 1) {
    elements = React.cloneElement(elements[0], { isFirst: true, isLast: true })
  } else if (elements.length > 0) {
    const lastElement = elements[elements.length - 1]

    elements = [React.cloneElement(elements[0], { isFirst: true })]
      .concat(elements.slice(1, -1))
      .concat(React.cloneElement(lastElement, { isLast: true }))
  }

  return <View {...rest}>{elements}</View>
}

export default List
