import { Alert, Button, Center, Heading, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next'
import { useState } from 'react';

const Start: NextPage = () => {
  return (
    <Center>
      <Stack padding="4" spacing="4" width="md">
        <Center>
          <Heading size="xl">Team Healthcheck</Heading>
        </Center>
        <Button variant="solid">Join a session</Button>
        <Button variant="outline">Create a session</Button>
      </Stack>
    </Center>
  );
}

export default Start
