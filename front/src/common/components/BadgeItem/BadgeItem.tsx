import { styled } from "@mui/material";

const BadgeItem = styled("div", {
  name: "MUIBadgeItem",
})(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  borderRadius: "2px",
  height: "calc(100% - 20px)",
  width: "4px",
  position: "absolute",
}));

export default BadgeItem;
