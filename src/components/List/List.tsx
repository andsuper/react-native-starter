import React from 'react'
import { View } from 'react-native'

interface IProps {
  children: React.ReactNode
}

const List: React.FC<IProps> = ({ children, ...rest }) => {
  let elements: any = React.Children.toArray(children)

  if (elements.length === 1) {
    elements = React.cloneElement(elements[0] as React.ReactElement, {
      isFirst: true,
      isLast: true,
    })
  } else if (elements.length > 0) {
    const lastElement = elements[elements.length - 1]

    elements = [React.cloneElement(elements[0] as React.ReactElement, { isFirst: true })]
      .concat(elements.slice(1, -1))
      .concat(React.cloneElement(lastElement as React.ReactElement, { isLast: true }))
  }

  return <View {...rest}>{elements}</View>
}

export default List
