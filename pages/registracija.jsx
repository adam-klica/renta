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
import toast, { Toaster } from "react-hot-toast";
import { useSession, signIn, getSession } from "next-auth/react";

import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import { GoogleLoginButton } from "react-social-login-buttons";
import MainHeader from "../components/Header";

const theme = createTheme();

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  const { data: session } = useSession();

  const cookies = parseCookies;

  useEffect(() => {
    if (session) {
      toast("Login Success");
      router.push("/");
    }

    if (cookies?.user) {
      router.push("/");
    }
  }, [router]);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (password !== conPassword) {
        toast.error("Sifre se ne poklapaju!", {
          duration: 4000,
          position: "top-center",
          icon: "⚠️",
        });
        // console.log("passwords do not match")
        return;
      }

      const user = cookies?.user
        ? JSON.parse(cookies.user)
        : session?.user
        ? session?.user
        : "";

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/register`,
        { email, password, firstName, lastName },
        config
      );

      toast.success(data?.message);
    } catch (error) {
      console.log(error.response);
      toast.error("Netacni podaci. Pokusajte ponovo!");
    }
  };

  return (
    <Box>
      {props.ind != 1 && <MainHeader></MainHeader>}
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
              Registracija
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={SubmitHandler}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Ime"
                    autoFocus
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Prezime"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Adresa"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Sifra"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirm password"
                    label="Ponovite Sifru"
                    type="password"
                    id="confirm password"
                    autoComplete="current-password"
                    value={conPassword}
                    onChange={(e) => setConPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ mt: 2, mb: 2 }}>
                <GoogleLoginButton onClick={() => signIn("google")} />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Registracija
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/prijava" variant="body2">
                    <a
                      style={{ color: "#0645AD", textDecoration: "underline" }}
                    >
                      Vec imate profil? Prijavi se
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
export default Register;
