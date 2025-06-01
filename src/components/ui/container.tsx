import { Container, ContainerProps } from "@chakra-ui/react";

export default function MyContainer({ children, ...props }: ContainerProps) {
  return(
    <Container 
        maxW={'5xl'}
        px={{
            base:2,
            md:4,
        }}
        mx={'auto'}
        {...props}
    >
        {children}
    </Container>
  )
}
