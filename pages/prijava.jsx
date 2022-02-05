import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { parseCookies } from "nookies";
import { GoogleLoginButton } from "react-social-login-buttons";
import MainHeader from "../components/Header";

const theme = createTheme();

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const cookies = parseCookies();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      toast.success("Prijava uspjesna!");
      router.push("/");
    }

    if (cookies?.user) {
      router.push("/");
    }
  }, [router]);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/login`,
        { email, password },
        config
      );

      toast.success(data.message);
      cookie.set("token", data?.token);
      cookie.set("user", JSON.stringify(data?.user));
      router.push("/");
    } catch (error) {
      toast.error("Netacni podaci. Pokusajte ponovo!");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <Box>
      {props.ind != 1 && <MainHeader />}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Prijava
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={SubmitHandler}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Adresa"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Sifra"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Grid container sx={{ mt: 2, mb: 2 }}>
                <GoogleLoginButton onClick={() => signIn("google")} />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Prijava
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/registracija" variant="body2">
                    <a
                      style={{ color: "#0645AD", textDecoration: "underline" }}
                    >
                      Nemate profil? Registrujte se ovdje
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Toaster />
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Login;
