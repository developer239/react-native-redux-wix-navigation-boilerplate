import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Toast } from 'native-base'
import { FormikHelpers } from 'formik'
import { wait } from '../../../../services/wait'
import { Container } from '../../../../components'
import { H1 } from '../../../../components/Text'
import { withNativeBaseRoot } from '../../../../hocs'
import { SignInForm } from '../../../../forms/SignIn'
import { goToHomeScreen } from '../../../../navigation'
import { USER_KEY } from '../../../../config'
import { ISignInFormValues } from '../../../../forms/SignIn/types'

export const SIGN_IN_SCREEN = {
  name: 'app.SignIn',
}

const SignInScreenComponent = () => {
  const handleSubmit = async (
    { email, password }: ISignInFormValues,
    { resetForm }: FormikHelpers<ISignInFormValues>
  ) => {
    // Fake server response delay
    await wait(1000)

    if (password !== 'password') {
      resetForm()
      return Toast.show({
        text: 'Wrong password!',
        type: 'danger',
        position: 'top',
      })
    }

    await AsyncStorage.setItem(USER_KEY, email)
    await goToHomeScreen()
  }

  return (
    <Container isCenter marginHorizontal={20}>
      <H1>Sign In</H1>
      <SignInForm onSubmit={handleSubmit} />
    </Container>
  )
}

export const SignInScreen = withNativeBaseRoot(SignInScreenComponent)

// TODO: https://github.com/mridgway/hoist-non-react-statics
// @ts-ignore
SignInScreen.options = () => ({
  topBar: {
    visible: false,
  },
})
