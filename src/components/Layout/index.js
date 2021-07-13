import React from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";
import { Container } from "./styles";

export default function Layout(props) {
  return (
    <Container>
      <Sidebar />
      <TopBar toggleTheme={props.toggleTheme}/>
      <Content />
    </Container>
  );
}
