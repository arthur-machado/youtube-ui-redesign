import styled from "styled-components";
import { MdPersonOutline, MdCheck } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  > img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 0.2s;
    cursor: pointer;
  }

  > img:hover {
    transform: scale(1.05);
  }
`;
export const VideoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0;
  > div > span {
    font-size: 13px;
    font-weight: 300;
    color: var(--muted);
  }
`;
export const Viewers = styled.div`
  display: flex;
  align-items: center;
`;
export const PeopleIcon = styled(MdPersonOutline)`
  width: 21px;
  height: 21px;
  color: var(--red-selected);
`;
export const Timestamp = styled.div`
  display: flex;
  align-items: center;
`;

export const VideoTitle = styled.h3`
  margin: 12px 0;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ChannelInfo = styled.div`
  display: flex;
`;
export const ChannelName = styled.span`
  font-size: 14px;
  color: var(--muted);
`;
export const VerifiedChannel = styled(MdCheck)`
  width: 15px;
  height: 15px;
  margin-left: 5px;
  color: #22802A;
`;
