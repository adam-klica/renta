import Link from "next/link";
import { scroller } from "react-scroll";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Button,
  Stack,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Spacer,
  Flex,
  MenuDivider,
} from "@chakra-ui/react";
import classes from "./Header.module.css";
import { useSession, signOut } from "next-auth/react";
import { AiOutlineLogin } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";

const MainHeader = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const vozilaHendler = () => {
    scroller.scrollTo("davaj", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <header style={{ position: "sticky", top: "0", zIndex: "100" }}>
      <Box
        bgGradient="linear(to-l,#00aacc, #31319c )"
        p={5}
        borderRadius="40px"
      >
        <Flex>
          <Box ml={8} p={1}>
            <Link href="/" activeClassName={classes.active}>
              <Text fontSize="xl" className={classes.text}>
                <a
                  style={{ cursor: "pointer" }}
                  className={
                    router.pathname == "/" ? classes.active : classes.passive
                  }
                >
                  Naslovna
                </a>
              </Text>
            </Link>
          </Box>
          <Box ml={8} p={1}>
            <Link href="/" activeClassName={classes.active}>
              <Text
                fontSize="xl"
                className={classes.text}
                onClick={vozilaHendler}
              >
                <a
                  style={{ cursor: "pointer" }}
                  className={
                    router.pathname == "/1" ? classes.active : classes.passive
                  }
                >
                  Sva Vozila
                </a>
              </Text>
            </Link>
          </Box>
          <Box activeClassName={classes.active} ml={8} p={1}>
            <Link href="/dodaj-vozilo">
              <Text fontSize="xl" className={classes.text}>
                <a
                  style={{ cursor: "pointer" }}
                  className={
                    router.pathname == "/dodaj-vozilo"
                      ? classes.active
                      : classes.passive
                  }
                >
                  Dodaj Vozilo
                </a>
              </Text>
            </Link>
          </Box>
          <Spacer />
          <Box mr={10}>
            {session === null && (
              <Box>
                <Stack direction="row">
                  <ButtonGroup size="sm">
                    <Link href="/registracija">
                      <Button variant="solid" rightIcon={<FiUserPlus />}>
                        Registracija
                      </Button>
                    </Link>
                    <Link href="/prijava">
                      <Button
                        className={classes.dugmePrijava}
                        variant="outline"
                        rightIcon={<AiOutlineLogin />}
                      >
                        <Text>Prijava</Text>
                      </Button>
                    </Link>
                  </ButtonGroup>
                </Stack>
              </Box>
            )}
            {session != null && (
              <Box justifyContent="end">
                <Menu>
                  <MenuButton as={Button} colorScheme="facebook">
                    {session.user.name}
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Podaci Korisnika">
                      <MenuItem>Profil</MenuItem>
                      <MenuItem>
                        <Link href="/korisnik/moja-vozila">
                          <a>Moja Vozila</a>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={() => signOut()}>Odjavi se</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Podrska">
                      <MenuItem>Kontakt</MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </header>
  );
};

export default MainHeader;
