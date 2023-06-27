import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieIcon from "@mui/icons-material/Movie";
import { useLocation, useNavigate } from "react-router-dom";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 0px 30px;
  color: #f6cc38;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  // padding-left: 72px;
  font-family: "Bebas Neue", cursive;
  cursor: pointer;
  align-items: center;
  letter-spacing: 1px;
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
`;

function Navbar() {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <ContainerMain>
        <Header>
          <AppName
            onClick={() => {
              navigate("/");
            }}
          >
            <MovieIcon fontSize="large" sx={{ paddingRight: "5px" }} />
            WATCHit
          </AppName>
          <nav>
            <ul>
              <li
                onClick={() => {
                  navigate("/");
                }}
                disabled
              >
                HOME
              </li>
            </ul>
          </nav>
        </Header>
      </ContainerMain>
    </>
  );
}

export default Navbar;
