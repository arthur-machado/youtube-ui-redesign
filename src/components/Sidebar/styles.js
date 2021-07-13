import styled from "styled-components";
import {
  MdMenu,
  MdPlayCircleOutline,
  MdPlaylistPlay,
  MdHistory,
  MdExpandMore,
  MdSettings,
  MdInfoOutline,
} from "react-icons/md";
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { IoIosFlame } from "react-icons/io";

export const Container = styled.div`
  grid-area: SB;

  max-height: 100vh;
  padding: 30px 0 5px;
  background-color: ${({theme}) => theme.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-right: 1px solid var(--border);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  > section {
    margin-bottom: 1.2rem;
  }

  > div {
    margin-bottom: 1.2rem;
  }

  > div > svg {
    color: var(--muted);
    transition: 0.3s;
  }

  > div > svg:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const MenuIcon = styled(MdMenu)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  resize: none;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    width: 22px;
    height: 22px;

    margin: 10px 0;
    cursor: pointer;
  }
`;
export const LatestIcon = styled(AiOutlineCompass)``;
export const TrendingIcon = styled(IoIosFlame)``;
export const PlaylistsIcons = styled(MdPlayCircleOutline)``;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    width: 20px;
    height: 20px;

    margin: 10px 0;
    cursor: pointer;
  }
`;
export const ListIcon = styled(MdPlaylistPlay)``;
export const BackHistoryIcon = styled(MdHistory)``;
export const HistoryIcon = styled(AiOutlineClockCircle)``;
export const LikesIcon = styled(AiOutlineHeart)``;
export const DownArrowIcon = styled(MdExpandMore)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
export const Channels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ChannelPhoto = styled.div`
  margin: 8px 0;
  cursor: pointer;
  filter: brightness(75%);
  transition: 0.4s;
  > img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }

  &:hover {
    filter: brightness(100%);
  }

  &::after {
    width: 9px;
    height: 9px;
    position: absolute;
    left: 19px;
    bottom: 24px;
    ${(props) => (props.live || props.new ? 'content: ""' : "")};
    background-color: ${(props) =>
      props.live ? "var(--red-selected)" : "var(--blue)"};

    border-radius: 50%;
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;

  > svg {
    width: 23px;
    height: 23px;
    margin: 10px 0;
  }
`;
export const SetIcon = styled(MdSettings)``;
export const InfoIcon = styled(MdInfoOutline)``;
