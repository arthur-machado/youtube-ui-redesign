import React from "react";
import {
  Container,
  YoutubeIcon,
  TopBarMenu,
  AddVideoIcon,
  DashIcon,
  Notifications,
  ProfileImage,
  SearchInput,
  ChangeThemeIcon
} from "./styles";

export default function TopBar(props) {
  return (
    <Container>
      <YoutubeIcon />

      <SearchInput>
          <input type="text" placeholder="Type to search"/>
      </SearchInput>

      <TopBarMenu>
        <div>
          <AddVideoIcon />
          <DashIcon />
          <Notifications />
          <ChangeThemeIcon onClick={props.toggleTheme}/>
        </div>

        <ProfileImage>
          <img
            src="https://avatars.githubusercontent.com/u/50958424?v=4"
            alt="User"
          />
        </ProfileImage>
      </TopBarMenu>
    </Container>
  );
}
