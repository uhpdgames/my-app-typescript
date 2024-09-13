import React from "react";
import * as Yup from "yup";
import { useAuth } from "../context/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";

type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("userName is required"),
  password: Yup.string().required("Password is required"),
});

type Props = {};

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const Login = (props: Props) => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({
    resolver: yupResolver(validation),
  });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  };

  return (
      <main className="home-page custom-min-h pt-[32px]">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleLogin)}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >

          <FormControl>
            <FormLabel htmlFor="userName">userName</FormLabel>
            <TextField
              id="userName"
              type="userName"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: "userName" }}
              {...register("userName")}
            />
            {errors.userName ? <p>{errors.userName.message}</p> : ""}
          </FormControl>
          <FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
            </Box>
            <TextField
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              {...register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : ""}
          </FormControl>

          <Button type="submit" fullWidth variant="contained">
            Sign in
          </Button>
          <Typography sx={{textAlign: "center"}}>
            <em>id: test | pass: test</em><br/>
            Don&apos;t have an account?{" "}
            <span>
              <Link
                  href="register"
                  variant="body2"
                  sx={{alignSelf: "center"}}
              >
                Sign up
              </Link>
            </span>
          </Typography>
        </Box>
      </Card>
      </main>
  );
};

export default Login;
