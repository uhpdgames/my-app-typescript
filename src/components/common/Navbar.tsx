import {useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {UserProfile} from "../../models/User";


const Navbar = () => {
  const location = useLocation();


  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);



  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if(token && user){
      setToken(token);
      setUser(JSON.parse(user));
    }
  } , [])


  //const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };


  return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Stack spacing={2} direction="row">
            <Button variant="text"><Link  to='/'>Recipes</Link>  </Button>
            {/*<Button variant="outlined"> <Link  underline="none" href='register'>Register</Link></Button>*/}
            {/*<Button variant="outlined"> <Link  underline="none" href='login'>Login</Link></Button>*/}
          </Stack>
          {/*<Tooltip title="Account settings">*/}
          {/*  <IconButton*/}
          {/*      onClick={handleClick}*/}
          {/*      size="small"*/}
          {/*      sx={{ ml: 2 }}*/}
          {/*      aria-controls={open ? 'account-menu' : undefined}*/}
          {/*      aria-haspopup="true"*/}
          {/*      aria-expanded={open ? 'true' : undefined}*/}
          {/*  >*/}
          {/*    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>*/}
          {/*  </IconButton>*/}
          {/*</Tooltip>*/}
        </Box>

      </React.Fragment>
  );
};

export default Navbar;
