import styled from "styled-components";
import { AiFillYoutube } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CgMenuGridO, CgDarkMode } from "react-icons/cg";
import { MdNotificationsNone } from "react-icons/md";

export const Container = styled.div`
  grid-area: SRC;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px 25px;
  position: sticky;
  z-index: 2;
`;

export const YoutubeIcon = styled(AiFillYoutube)`
  width: 35px;
  height: 35px;
  color: var(--red-selected);
  cursor: pointer;
`;

export const TopBarMenu = styled.div`
  display: flex;
  align-items: center;

  > div > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;

    margin: 0 10px;
  }
`;

export const AddVideoIcon = styled(IoIosAddCircleOutline)``;
export const DashIcon = styled(CgMenuGridO)``;
export const Notifications = styled(MdNotificationsNone)``;
export const ChangeThemeIcon = styled(CgDarkMode)``;

export const ProfileImage = styled.div`
  margin-left: 25px;
  > img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

export const SearchInput = styled.div`
  width: 50%;
  > input {
    background-color: ${({ theme }) => theme.background};
    border: 0;
    outline: 0;
    text-align: center;
    font-weight: bold;
    padding-bottom: 10px;
    width: 100%;
    color: ${({ theme }) => theme.text};
    font-size: 32px;
    transition: border 0.6s ease-out;
    ::placeholder {
      font-size: 18px;
      font-weight: 700;
    }

    :focus {
      border-bottom: 1px solid var(--blue);
    }
  }
`;
