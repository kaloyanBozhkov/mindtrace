import { SignIn } from '@clerk/nextjs'
import { Group } from '@mantine/core'

const SignInPage = () => (
  <Group position="center" mt="xl" align="center" h="100%">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" afterSignUpUrl="/signed-up" />
  </Group>
)
export default SignInPage
