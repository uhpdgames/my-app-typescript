import {  useLocation } from "react-router-dom";
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

import Link from '@mui/material/Link';


const Navbar = () => {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Stack spacing={2} direction="row">
            <Button variant="text"><Link  underline="none" href='/'>Recipes</Link>  </Button>
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
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>

          <Divider />


          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
  );
};

export default Navbar;
