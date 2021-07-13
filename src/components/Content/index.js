import React from "react";
import {
  Container,
  DiscoverLive,
  FavoriteChannels,
  CategorieTitle,
  LiveIcon,
  Title,
  ChannelsCategory,
  Videos,
  HeaderContent,
  HeartIcon,
  CategoryContent,
  TrendingIcon,
  LatestIcon,
  CategoryVideos,
} from "./styles";
import { ChannelPhoto } from "../Sidebar/styles";
import VideoCard from "../VideoCard";

export default function Content() {
  return (
    <Container>
      <HeaderContent>
        <DiscoverLive>
          <CategorieTitle>
            <Title>
              <LiveIcon />
              <h3>Discover Live</h3>
            </Title>

            <ChannelsCategory>
              <ChannelPhoto live>
                <img
                  src={
                    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  }
                  alt="Canal"
                />
              </ChannelPhoto>
              <ChannelPhoto live>
                <img
                  src={
                    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  }
                  alt="Canal"
                />
              </ChannelPhoto>
              <ChannelPhoto live>
                <img
                  src={
                    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  }
                  alt="Canal"
                />
              </ChannelPhoto>
            </ChannelsCategory>
          </CategorieTitle>
          <Videos>
            <VideoCard
              videoThumb={
                "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
              live
              viewers={1225}
              timestamp={12}
            />
            <VideoCard
              videoThumb={
                "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              live
              viewers={1225}
              timestamp={25}
            />
          </Videos>
        </DiscoverLive>
        <FavoriteChannels>
          <CategorieTitle>
            <Title>
              <HeartIcon />
              <h3>Favorite Channels</h3>
            </Title>

            <ChannelsCategory>
              <ChannelPhoto live>
                <img
                  src={
                    "https://images.unsplash.com/photo-1526915303387-35900bc4ff33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  }
                  alt="Canal"
                />
              </ChannelPhoto>
              <ChannelPhoto live>
                <img
                  src={
                    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  }
                  alt="Canal"
                />
              </ChannelPhoto>
              <ChannelPhoto live>
                <img
                  src={
                    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  }
                  alt="Canal"
                />
              </ChannelPhoto>
            </ChannelsCategory>
          </CategorieTitle>
          <Videos>
            <VideoCard
              videoThumb={
                "https://images.pexels.com/photos/1494665/pexels-photo-1494665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              live
              viewers={1225}
              timestamp={12}
            />
            <VideoCard
              videoThumb={
                "https://images.pexels.com/photos/3930068/pexels-photo-3930068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              live
              viewers={1225}
              timestamp={12}
            />
          </Videos>
        </FavoriteChannels>
      </HeaderContent>
      <CategoryContent>
        <Title>
          <TrendingIcon />
          <h3>Trending</h3>
        </Title>
        <CategoryVideos>
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/3034872/pexels-photo-3034872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            viewers={"2.5M"}
            timestamp={"2 days ago"}
            notVerified
          />
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/39391/landscape-nature-mountains-road-39391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            viewers={"2.5M"}
            timestamp={"2 days ago"}
          />
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/464438/pexels-photo-464438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            viewers={"2.5K"}
            timestamp={"5 days ago"}
          />
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            viewers={"2.5M"}
            timestamp={"2 days ago"}
          />
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            viewers={"2.5M"}
            timestamp={"2 days ago"}
            notVerified
          />
        </CategoryVideos>
      </CategoryContent>
      <CategoryContent>
        <Title>
          <LatestIcon />
          <h3>Latest</h3>
        </Title>
        <CategoryVideos>
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/3034872/pexels-photo-3034872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            viewers={"2.5K"}
            timestamp={"5 days ago"}
          />
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/39391/landscape-nature-mountains-road-39391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            viewers={"2.5K"}
            timestamp={"5 days ago"}
          />
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/464438/pexels-photo-464438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            viewers={"2.5K"}
            timestamp={"5 days ago"}
          />
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            viewers={"2.5K"}
            timestamp={"5 days ago"}
          />
          <VideoCard
            videoThumb={
              "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            viewers={"2.5K"}
            timestamp={"5 days ago"}
          />
        </CategoryVideos>
      </CategoryContent>
    </Container>
  );
}
