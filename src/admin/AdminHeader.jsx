import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../reducer/users";

export default function HeaderCompo() {
  const users = useSelector(selectUser);
// console.log("redux users data :",users[0].username);
  const [showBasic, setShowBasic] = useState(false);
  const menuItems = {
    "/home": "Home",
    "/about": "About us",
    "/contact": "Contact Us",
  };
  const DynamicMenuData = Object.entries(menuItems).map(([key, value], i) => {
    return (
      <MDBNavbarItem key={key}>
        <Link className="nav-link" to={key}>
          {value}
        </Link>
      </MDBNavbarItem>
    );
  });
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light" style={{boxShadow: "0 4px 5px 0 rgba(0,0,0,.07), 0 0px 0px rgba(0,0,0,.05)"}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              {/* <MDBNavbarItem>
                <Link className="nav-link" to="/">
                  Home{" "}
                </Link>
              </MDBNavbarItem> */}

              {DynamicMenuData}

              <MDBDropdown style={{ marginLeft: "auto" }}>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Account
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link className="nav-link" to="/logout">
                        Logout
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
