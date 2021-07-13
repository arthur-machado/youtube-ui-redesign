import styled from "styled-components";
import { CgMediaPodcast } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineCompass } from "react-icons/ai";
import { IoIosFlame } from "react-icons/io";

export const Container = styled.div`
  grid-area: CNT;
  height: 100%;
  padding: 25px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--border);
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    margin: 0 15px;
  }
`;

export const DiscoverLive = styled.div`
  width: 50%;
`;
export const FavoriteChannels = styled.div`
  width: 50%;
`;
export const CategorieTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const LiveIcon = styled(CgMediaPodcast)`
  color: var(--red-selected);
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const HeartIcon = styled(AiOutlineHeart)`
  color: var(--red-selected);
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const Title = styled.div`
  display: flex;

  > h3 {
    font-size: 18px;
  }
`;
export const ChannelsCategory = styled.div`
  display: flex;
  > div {
    margin: 0 10px;
  }
`;

export const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 24px;
`;

export const CategoryContent = styled.div`
  margin: 3rem 0;
`;
export const TrendingIcon = styled(IoIosFlame)`
  color: var(--red-selected);
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const LatestIcon = styled(AiOutlineCompass)`
  color: var(--red-selected);
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const CategoryVideos = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 24px;
`;