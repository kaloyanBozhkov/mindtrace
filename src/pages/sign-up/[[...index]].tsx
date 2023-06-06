import { SignUp } from '@clerk/nextjs'
import { Group } from '@mantine/core'

const SignUpPage = () => (
  <Group position="center" mt="xl">
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      afterSignUpUrl="/api/clerk/signed-up"
    />
  </Group>
)
export default SignUpPage
