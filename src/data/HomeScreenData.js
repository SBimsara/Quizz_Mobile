import {
  Feather,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
export default [
  {
    id: "0",
    image: <Feather name="book-open" size={42} color="white" />,
    name: "Subjects",
    navigate: "Subject",
  },
  {
    id: "1",
    image: <MaterialIcons name="leaderboard" size={42} color="white" />,
    name: "Leaderboard",
    navigate: "Leaderboard",
  },
  {
    id: "2",
    image: <FontAwesome5 name="award" size={42} color="white" />,
    name: "Achievements",
    navigate: "Achievements",
  },
  {
    id: "3",
    image: <Entypo name="list" size={42} color="white" />,
    name: "Summary",
    navigate: "Summary",
  },
  {
    id: "4",
    image: <Ionicons name="settings-outline" size={42} color="white" />,
    name: "Settings",
    navigate: "Settings",
  },
  {
    id: "5",
    image: <MaterialIcons name="groups" size={46} color="white" />,
    name: "About",
    navigate: "About",
  },
];
