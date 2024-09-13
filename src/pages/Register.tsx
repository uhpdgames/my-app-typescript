import {
    Box,
    Button,
    FormControl,
    FormLabel,

    TextField,
    Typography,
  } from "@mui/material";
  
  import MuiCard from "@mui/material/Card";
  import { styled } from "@mui/material/styles";
  import { useForm } from "react-hook-form";
  import * as Yup from "yup";
  import { useAuth } from "../context/useAuth";
  import { yupResolver } from "@hookform/resolvers/yup";
  import {Link} from "react-router-dom";
  
  type Props = {};
  
  type RegisterFormsInputs = {
    email: string;
    userName: string;
    password: string;
  };
  
  const validation = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  
  const Register = (props: Props) => {
    const { registerUser } = useAuth();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation) });
  
    const handleRegister = (form: RegisterFormsInputs) => {
      registerUser(form.email, form.userName, form.password);
    };
  
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
  
    return (
      <>
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign up
          </Typography>
          <Box
            noValidate
            component="form"
            onSubmit={handleSubmit(handleRegister)}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="userName">Full name</FormLabel>
              <TextField fullWidth id="userName" {...register("userName")} />
              {errors.userName ? (
                <p className="text-white">{errors.userName.message}</p>
              ) : (
                ""
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                autoComplete="email"
                variant="outlined"
                {...register("email")}
              />
              {errors.email ? (
                <p className="text-white">{errors.email.message}</p>
              ) : (
                ""
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                {...register("password")}
              />
              {errors.password ? (
                <p className="text-white">{errors.password.message}</p>
              ) : (
                ""
              )}
            </FormControl>
          
            <Button type="submit" fullWidth variant="contained">
              Sign up
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <span>
                <Link href="/login">
                  Sign in
                </Link>
              </span>
            </Typography>
          </Box>
        </Card>
      </>
    );
  };
  
  export default Register;
  