import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Flex, Button } from '../../components'
import { H1 } from '../../components/Text'

const NestedScreenA = ({ componentId }) => {

  return (
    <Flex>
      <H1>Nested Screen B</H1>
      <Button
        onPress={() => Navigation.pop(componentId)}
      >
        Go Back
      </Button>
    </Flex>
  )
}

NestedScreenA.options = () => ({
  topBar: {
    title: {
      text: 'Nested Screen A',
    },
  },
})

export default NestedScreenA
