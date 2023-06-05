import { SignUp } from '@clerk/nextjs'
import { Group } from '@mantine/core'

const SignUpPage = () => (
  <Group position="center" mt="xl" h="100%">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" afterSignUpUrl="/signed-up" />
  </Group>
)
export default SignUpPage
