import { SignIn } from '@clerk/nextjs'
import { Group } from '@mantine/core'

const SignInPage = () => (
  <Group position="center" mt="xl" align="center">
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      afterSignUpUrl="/api/clerk/signed-up"
    />
  </Group>
)
export default SignInPage
