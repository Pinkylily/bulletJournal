import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ITaskItemProps {
  title: string;
}

const TaskBadge = styled("div", {
  name: "MUITaskBadge",
})(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  borderRadius: "2px",
  height: "26px",
  width: "4px",
  marginRight: "10px",
}));

const TaskItem: React.FunctionComponent<ITaskItemProps> = ({ title }) => {
  return (
    <ListItem>
      <TaskBadge />
      <ListItemText primary={title} primaryTypographyProps={{ noWrap: true }} />
    </ListItem>
  );
};

export default TaskItem;
