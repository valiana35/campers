import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={css.box}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h2 className={css.title}>Camper rental</h2>
          </Typography>
          <Typography
            className={css.nav}
            variant="h6"
            component="nav"
            sx={{ flexGrow: 1 }}
          >
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
              View Now
            </NavLink>
            <NavLink to="/favorites" className={buildLinkClass}>
              Favorites
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
