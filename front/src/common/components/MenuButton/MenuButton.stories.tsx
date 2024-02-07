import MenuButton from "./MenuButton";
import TodayIcon from "@mui/icons-material/Today";

export default {
  component: MenuButton,
  title: "MenuButton",
};

export const Default = {
  args: {
    type: "day",
    icon: <TodayIcon />,
  },
};
