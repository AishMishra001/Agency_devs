import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 border-2 border-gray-400 rounded-full" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/web-dev">Product Design</HoveredLink>
            <HoveredLink to="/interface-design">Game Development</HoveredLink>
            <HoveredLink to="/seo">Mern Stack Development</HoveredLink>
            <HoveredLink to="/branding">App Development</HoveredLink>
            <HoveredLink to="/branding">Web3</HoveredLink>
            <HoveredLink to="/branding">Ui/Ux</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          {/* Add children here if needed */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/hobby">Hobby</HoveredLink>
            <HoveredLink to="/individual">Individual</HoveredLink>
            <HoveredLink to="/team">Team</HoveredLink>
            <HoveredLink to="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarDemo;
