import React from "react";
import {
  Container,
  MenuIcon,
  Categories,
  LatestIcon,
  TrendingIcon,
  PlaylistsIcons,
  Actions,
  ListIcon,
  BackHistoryIcon,
  HistoryIcon,
  LikesIcon,
  DownArrowIcon,
  Channels,
  ChannelPhoto,
  Settings, 
  SetIcon,
  InfoIcon
} from "./styles";

export default function Sidebar() {
  return (
    <Container>
      <section>
        <MenuIcon />
      </section>

      <Categories>
        <LatestIcon />
        <TrendingIcon />
        <PlaylistsIcons />
      </Categories>

      <Actions>
        <ListIcon />
        <BackHistoryIcon />
        <HistoryIcon />
        <LikesIcon />
        <DownArrowIcon />
      </Actions>

      <Channels>
        <ChannelPhoto live >
          <img
            src={
              "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            }
            alt="Canal"
          />
        </ChannelPhoto>
        <ChannelPhoto new>
          <img
            src={
              "https://images.unsplash.com/photo-1516392808102-5a95cfaed210?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            alt="Canal"
          />
        </ChannelPhoto>
        <ChannelPhoto>
          <img
            src={
              "https://images.unsplash.com/photo-1526915303387-35900bc4ff33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            }
            alt="Canal"
          />
        </ChannelPhoto>
        <ChannelPhoto new>
          <img
            src={
              "https://images.unsplash.com/photo-1611774833580-40f2f588eaa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80"
            }
            alt="Canal"
          />
        </ChannelPhoto>
        <ChannelPhoto>
          <img
            src={
              "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            }
            alt="Canal"
          />
        </ChannelPhoto>
        <DownArrowIcon />
      </Channels>

      <Settings>
          <SetIcon />
          <InfoIcon />
      </Settings>
    </Container>
  );
}
