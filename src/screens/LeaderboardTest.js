import React, { useState } from "react";
import { useEffect } from "react";
import { View, Alert, Image, Text } from "react-native";

// import { colors } from "../../config";
import Leaderboard from "react-native-leaderboard";
import api from "../BaseURL";

const Leader = () => {
  const [globalData, setGlobalData] = useState([
    {
      name: "Max",
      score: null,
      iconUrl:
        "https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094043-stock-illustration-profile-icon-male-avatar.jpg",
    },
    {
      name: "Adam",
      score: 12,
      iconUrl:
        "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png",
    },
    {
      name: "Black",
      score: 244,
      iconUrl: "http://ttsbilisim.com/wp-content/uploads/2014/09/20120807.png",
    },
    {
      name: "Erika",
      score: 0,
      iconUrl:
        "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-eskimo-girl.png",
    },
    {
      name: "Jimmy",
      score: 20,
      iconUrl: "https://static.witei.com/static/img/profile_pics/avatar4.png",
    },
    {
      name: "Joe",
      score: 69,
      iconUrl:
        "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-braindead-zombie.png",
    },
    {
      name: "Micheal",
      score: 101,
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz",
    },
    {
      name: "Tim Thomas",
      score: 41,
      iconUrl:
        "http://conserveindia.org/wp-content/uploads/2017/07/teamMember4.png",
    },
    {
      name: "John Davis",
      score: 80,
      iconUrl:
        "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-afro-guy.png",
    },
    {
      name: "Tina Turner",
      score: 22,
      iconUrl:
        "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png",
    },
    {
      name: "Harry Reynolds",
      score: null,
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSlzi6GEickw2Ft62IdJTfXWsDFrOIbwXhzddXXt4FvsbNGhp",
    },
    {
      name: "Betty Davis",
      score: 25,
      iconUrl:
        "https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg?w=300&h=300",
    },
    {
      name: "Lauren Leonard",
      score: 30,
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-",
    },
  ]);
  const [friendData, setFriendData] = useState([
    {
      name: "Joe Roddy",
      score: 69,
      iconUrl:
        "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-braindead-zombie.png",
    },
    {
      name: "Ericka Johannesburg",
      score: 101,
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz",
    },
    {
      name: "Tim Thomas",
      score: 41,
      iconUrl:
        "http://conserveindia.org/wp-content/uploads/2017/07/teamMember4.png",
    },
  ]);
  const [filter, setFilter] = useState(0);
  const [userRank, setUserRank] = useState(1);
  const [user, setUser] = useState({
    name: "Jimmy",
    score: 69,
  });

  const alert = (title, body) => {
    Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
      cancelable: false,
    });
  };

  const sort = (data) => {
    const sorted =
      data &&
      [...data].sort((item1, item2) => {
        return item2.score - item1.score;
      });
    const userRank = sorted.findIndex((item) => {
      return item.name === user.name;
    });
    setUserRank(userRank + 1);
    return sorted;
  };

  useEffect(() => {
    fetchData();
  }, []);
  fetchData = async () => {
    try {
      const response = await api.get("points/getPoints");
      console.log(response.result);
      this.setStat({ data: response.data, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setStat({ isLoading: false });
    }
  };

  const renderHeader = () => {
    return (
      <View
        colors={[, "#1da2c6", "#1695b7"]}
        style={{
          backgroundColor: "#119abf",
          padding: 15,
          paddingTop: 35,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25, color: "white" }}>Leaderboard</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              flex: 1,
              textAlign: "right",
              marginRight: 40,
            }}
          >
            {ordinalSuffixOf(userRank)}
          </Text>
          <Image
            style={{ flex: 0.66, height: 60, width: 60, borderRadius: 60 / 2 }}
            source={{
              uri: "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png",
            }}
          />
          <Text
            style={{ color: "white", fontSize: 25, flex: 1, marginLeft: 40 }}
          >
            {user.score}pts
          </Text>
        </View>
        {/* <ButtonGroup
          onPress={(x) => {
            setFilter(x);
          }}
          selectedIndex={filter}
          buttons={["Global", "Friends"]}
          containerStyle={{ height: 30 }}
        /> */}
      </View>
    );
  };

  const ordinalSuffixOf = (i) => {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  };

  const props = {
    labelBy: "name",
    sortBy: "score",
    data: filter > 0 ? friendData : globalData,
    icon: "iconUrl",
    onRowPress: (item, index) => {
      alert(item.name + " clicked", item.score + " points, wow!");
    },
    sort: sort,
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {renderHeader()}
      <Leaderboard {...props} />
    </View>
  );
};

export default Leader;
