import {
  Box,
  Flex,
} from '@chakra-ui/react';

export default function Nav() {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Zoom</Box>
        </Flex>
      </Box>
    </>
  );
}