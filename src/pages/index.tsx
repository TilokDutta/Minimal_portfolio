import { CNLink } from '@/components/chakra-next'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import MyContainer from "@/components/ui/container";
import { siteConfig } from "@/lib/configs/siteConfig";
import { IconType } from "react-icons";
import { FaAws, FaCss3, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaLinkedin, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaRegCalendarDays, FaXTwitter } from "react-icons/fa6";
import { IoLogoJavascript, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiLogoFirebase, BiLogoFlask, BiLogoMongodb, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPrisma } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { projectsData } from "@/lib/data/project.data";
import { worksData } from '@/lib/data/work.data';

export default function Home() {
  return (
    <MyContainer>
      <Flex
      gap={4}
        flexDirection={{
          base:'column',
          lg:'row'
        }}
        >
        <Box
          width={{
            base: "100%",
            lg:'40%',
          }}
        >
          <About />
        </Box>
        <Stack gap={10} flex={1}>
          <TechStack />
          <Projects />
          <Work />
          <Contact />
        </Stack>
      </Flex>

    </MyContainer>
  );
}

const About = () => {
  const socials: {
    Icon: IconType;
    href: string;
    title: string;
  }[] = [
    {
      Icon: FaGithub,
      href: siteConfig.social.githubHref,
      title: "Github",
    },
    {
      Icon: FaXTwitter,
      href: siteConfig.social.twitterHref,
      title: "Twitter",
    },
    {
      Icon: FaLinkedin,
      href: siteConfig.social.linkedinHref,
      title: "LinkedIn",
    },
  ];
  return (
    <Stack
      id={'about'}
      p={6}
      gap={4}
      borderWidth={"1px"}
      borderColor={"gray.subtle"}
      borderRadius={"md"}
      bg={"bg"}
      height={"fit-content"}
      position={{ lg: "sticky" }}
      top={{md:24}}
    >
      <Heading as={"h1"} fontSize={"xl"} color={"brand"}>
        {siteConfig.profile.name}
      </Heading>
      <Text fontSize={"md"} color={"brand.secondary"}>
        {siteConfig.profile.about}
      </Text>
      <Center>
        {socials.map((item) => (
          <Link key={item.title} href={item.href} >
            <Button key={item.title} variant={"ghost"} height = {10} width={10} borderRadius={"full"}>
              <item.Icon />
            </Button>
          </Link>
        ))}
      </Center>
      <Flex
        direction={'column'}
        gap={4}
        justifyContent={'space-between'}
      >
        {/* exp & locatio */}
        <Flex
          gap={2}
          justifyContent={'space-between'}
        >
          <Flex direction="column" flex={1}>
            <Heading
              as="h3" fontSize="sm" fontWeight="bold"
              lineHeight="short"

            >
              {siteConfig.profile.experience}
            </Heading>
            <Text fontSize="xs" color="brand.secondary">
              Experience
            </Text>
          </Flex>
          <Flex direction="column" flex={1} textAlign={'right'}>
            <Heading
              as="h3" fontSize="sm" fontWeight="bold"
              lineHeight="short"

            >
              {siteConfig.profile.location}
            </Heading>
            <Text fontSize="xs" color="brand.secondary">
              Location
            </Text>
          </Flex>
        </Flex>
        {/* hire me */}
        <Button borderRadius={'md'}>
          <IoMdCheckmarkCircleOutline/>
          Hire Me
        </Button>
      </Flex>
    </Stack>
  );
};


const TechStack = () =>{
  const items = [
    { name: 'TypeScript', badge: <BiLogoTypescript /> },
    { name: 'JavaScript', badge: <IoLogoJavascript /> },
    { name: 'React', badge: <FaReact /> },
    { name: 'Next', badge: <RiNextjsFill /> },
    { name: 'Tailwind', badge: <BiLogoTailwindCss /> },
    { name: 'Flask', badge: <BiLogoFlask /> },
    { name: 'HTML5', badge: <FaHtml5 /> },
    { name: 'CSS3', badge: <FaCss3 /> },
    { name: 'Node', badge: <FaNodeJs /> },
    { name: 'Express', badge: <SiExpress /> },
    { name: 'Python', badge: <FaPython /> },
    { name: 'MongoDB', badge: <BiLogoMongodb /> },
    { name: 'AWS', badge: <FaAws /> },
    { name: 'OpenAI', badge: <AiOutlineOpenAI /> },
    { name: 'Firebase', badge: <BiLogoFirebase /> },
    { name: 'Git', badge: <FaGitAlt /> },
    { name: 'Docker', badge: <FaDocker /> },
    { name: 'Prisma', badge: <SiPrisma /> },
  ]
  return (
    <Stack gap={4} id={"techStack"}>
      <Heading as={"h2"} fontSize={"xl"} color={"brand"}>
        Tech Stack
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3 }} gap={4}>
        {items.map((tech, index) => {
          return (
            <Button
              key={index}
              variant={"outline"}
              _hover={{ bg: "brand.muted" }}
              color={"brand"}
              borderColor={"gray.subtel"}
            >
              {tech.badge}
              {tech.name}
            </Button>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
}
const Projects = () =>{
  return (
    <Stack gap={4} id={"projects"}>
      <Heading as={"h2"} fontSize={"xl"} color={"brand"}>
        Projects
      </Heading>
{projectsData.map((project, index) => {
        return (
          <CNLink
            key={index}
            href={project.href}
            borderWidth={'1px'}
            borderColor={'gray.subtel'}
            _focus={{
              textDecoration: 'none',
              boxShadow: 'none',
              borderColor: 'brand.emphasized',
              border: 'none',
            }}
            borderRadius={'md'}
            p={6}
            _hover={{ textDecoration: 'none', bgColor: 'brand.muted' }}
            target="_blank"
          >
            <Stack alignItems="start">
              <Heading as="h3" fontSize="lg" color={'brand'} fontWeight="bold" textAlign="start">
                {project.title}
              </Heading>
              <Text color="brand.secondary" fontSize={'md'}>
                {project.description}
              </Text>
            </Stack>
          </CNLink>
        )
      })}
    </Stack>
  )
}
const Work = () =>{
  return (
    <Stack gap={4} id="work">
      <Heading as={'h2'} fontSize={'2xl'} color={'brand'}>
        Work
      </Heading>
      <Stack
        gap={5}
        p={6}
        borderWidth={'1px'}
        borderColor={'gray.subtel'}
        borderRadius={'lg'}
        separator={<Separator opacity={1} color={'brand'} />}
      >
        {worksData.map((work, index) => {
          return (
            <Stack gap={4} key={index} direction="column">
              <Flex justify={'space-between'} alignItems={'end'}>
                <Heading as="h3" fontSize="lg" color={'brand'} fontWeight="bold" textAlign="start">
                  {work.company}
                <Text fontSize="md" color="brand.secondary">
                  {work.role}
                </Text>
                </Heading>
                <HStack borderWidth={'1px'} p={2} borderRadius={'lg'} borderColor={'gray.subtel'}>
                  <FaRegCalendarDays size={14} />
                  <Text fontSize={'xs'} color={'brand'}>
                    {work.fromDate} - {work.toDate}
                  </Text>
                </HStack>
              </Flex>
              <Stack
                fontSize={'md'}
                color={'brand.secondary'}
                as={'ul'}
                listStyleType={'disc'}
                ml={4}
              >
                {work.deliverable.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </Stack>
            </Stack>
          )
        })}
      </Stack>
    </Stack>
  )
}
const Contact = () =>{
  return (
    <Stack gap={6} marginBottom={10} id="contact">
      <Heading as={'h2'} fontSize={{ base: 'xl', md: '2xl' }} color={'brand'}>
        Contact
      </Heading>
      <Box borderWidth={'1px'} p={5} borderRadius={'lg'} borderColor={'gray.subtel'}>
        <Text textAlign={'center'} fontSize={'md'} color={'brand.secondary'}>
          Best way to reach me is through:{' '}
          <CNLink
            _hover={{ color: 'brand' }}
            fontWeight={'bolder'}
            color={'brand.secondary'}
            _focus={{ boxShadow: 'none' }}
            href={siteConfig.contact.emailHref}
          >
            {siteConfig.contact.email}
          </CNLink>
        </Text>
      </Box>
    </Stack>
  )
}