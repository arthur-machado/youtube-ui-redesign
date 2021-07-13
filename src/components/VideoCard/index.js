import React from "react";
import {
  Container,
  VideoInfo,
  Viewers,
  PeopleIcon,
  Timestamp,
  VideoTitle,
  ChannelInfo,
  ChannelName,
  VerifiedChannel,
} from "./styles";

export default function VideoCard(props) {
  return (
    <Container>
      <img src={props.videoThumb} alt="Video" />
      <VideoInfo>
        <Viewers>
          {props.live ? (
            <>
              <PeopleIcon />

              <span>{props.viewers} watching now</span>
            </>
          ) : (
            <span>{props.viewers} views</span>
          )}
        </Viewers>
        <Timestamp>
          {props.live ? (
            <span>{props.timestamp} minutes now</span>
          ) : (
            <span>{props.timestamp}</span>
          )}
        </Timestamp>
      </VideoInfo>
      <VideoTitle>Veniam labore minim deserunt labore qui irure.</VideoTitle>
      <ChannelInfo>
        <ChannelName>Youtube</ChannelName>
        {!props.notVerified && <VerifiedChannel />}
      </ChannelInfo>
    </Container>
  );
}
