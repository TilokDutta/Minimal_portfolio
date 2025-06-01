"use client"

import { Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export default function Sizeindicator() {
    const size = useBreakpointValue({
        base:'base',
        sm:'sm',
        md:'md',
        lg:'lg',
        xl:'xl',
        '2xl':'2xl',
    })
    if (process.env.NODE_ENV !== 'development') return null;
  return (
    <Box
        bg={'gray.200'}
        borderWidth={'1px'}
        borderRadius={'lg'}
        borderColor={'gray.300'}
        padding={4}
        position={'fixed'}
        bottom={4}
        right={4}
        _dark={{
            bg:'gray.700',
            borderColor:'gray.600',
        }}
    >
        {size}
    </Box>
  )
}