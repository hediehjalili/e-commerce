"use client";
import React from "react"; // Removed unused import: useState
import {
  Box,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Box
        width={"400px"}
        height={"500px"}
        padding={"20px"}
        display="flex"
        flexDirection={"column"}
        marginTop={"100px"}
        gap={"20px"}
      >
        <Typography variant="h4" component="h4">
          ساخت حساب کاربری
        </Typography>
        <Typography variant="h6" component="h6">
          اطلاعات کاربری خود را وارد کنید
        </Typography>
        <TextField
          size="small"
          fullWidth
          name="email"
          label="ایمیل یا نام کاربری"
          variant="standard"
          maxRows={4}
          multiline
          type="email"
        />
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <FormControlLabel control={<Checkbox />} label="مرا بخاطر بسپار" />
          <MuiLink component={Link} href="#">
            پسورد خود را فراموش کرده ام ؟
          </MuiLink>
        </Box>
        <Button variant="contained">ساخت حساب کاربری</Button>
      </Box>
    </Stack>
  );
}
