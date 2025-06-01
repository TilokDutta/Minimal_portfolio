import { Box, Button, Flex, HStack, Link, Stack } from "@chakra-ui/react";
import MyContainer from "./ui/container";
import { Avatar } from "./ui/avatar";
import { siteConfig } from "@/lib/configs/siteConfig";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  IoBriefcaseOutline,
  IoHomeOutline,
  IoMailOpenOutline,
  IoMenu,
} from "react-icons/io5";
import { PiProjectorScreen } from "react-icons/pi";
import { ColorModeButton, useColorMode } from "./ui/color-mode";

export default function Navbar() {
  return (
    <MyContainer position={"sticky"} top={3} mb={10} zIndex={1}>
      <Box
        borderWidth={"1px"}
        borderColor={"gray.subtle"}
        borderRadius={"md"}
        bg={"bg"}
        py={4}
      >
        <MobileNavbar />
        <DesktopNavbar />
      </Box>
    </MyContainer>
  );
}

const MobileNavbar = () => {
    const {toggleColorMode} = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Stack>
      <Flex hideFrom={"lg"} justifyContent={"space-between"}  px={8}>
        {/* avatar */}
        <Avatar
          name={siteConfig.profile.name}
          src={siteConfig.profile.avatar}
          size={"md"}
        />
        {/* social tag */}
        <Button variant={"outline"} px={4} py={2} size={"lg"} fontWeight={'bold'}>
          @{siteConfig.social.linkedinHandle}
        </Button>
        {/* menu */}
        <Button variant={"ghost"} onClick={toggleMenu}>
          {isMenuOpen ? <RxCross2 /> : <IoMenu />}
        </Button>
      </Flex>
      {isMenuOpen && (
        <Stack gap={2}  px={2} pt={2}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              p={2}
              color="brand"
              _hover={{ bg: "brand.muted", textDecoration: "none" }}
              borderRadius={'md'}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <ColorModeButton onClick={toggleColorMode} variant={'outline'}/>
        </Stack>
      )}
    </Stack>
  );
};
const DesktopNavbar = () => {
    const {toggleColorMode} = useColorMode();
    return (
        <Flex hideBelow={"lg"} justifyContent={"space-between"}  px={8}>
        <HStack gap={4}>
            {/* avatar */}
            <Avatar
            name={siteConfig.profile.name}
            src={siteConfig.profile.avatar}
            size={"md"}
            />
            {/* social tag */}
            <Button variant={"outline"} px={4} py={2} size={"lg"} fontWeight={'bold'}>
            @{siteConfig.social.linkedinHandle}
            </Button>
        </HStack>
        <HStack gap={2}  p={2}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              p={2}
              color="brand"
              _hover={{ bg: "brand.muted", textDecoration: "none" }}
              borderRadius={'md'}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <ColorModeButton onClick={toggleColorMode}/>
        </HStack>
      </Flex>
  );
};

type NavLink = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

const navItems: NavLink[] = [
  {
    label: "Home",
    icon: <IoHomeOutline />,
    href: "#about",
  },
  {
    label: "Projects",
    icon: <PiProjectorScreen />,
    href: "#projects",
  },
  {
    label: "Work",
    icon: <IoBriefcaseOutline />,
    href: "#work",
  },
  {
    label: "Contact",
    icon: <IoMailOpenOutline />,
    href: "#contact",
  },
];
