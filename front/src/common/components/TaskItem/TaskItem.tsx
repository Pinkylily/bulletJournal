import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import BadgeItem from "../BadgeItem/BadgeItem";

interface ITaskItemProps {
  title: string;
}

const TaskItem: React.FunctionComponent<ITaskItemProps> = ({ title }) => {
  return (
    <ListItem>
      <BadgeItem />
      <ListItemText primary={title} primaryTypographyProps={{ noWrap: true }} />
    </ListItem>
  );
};

export default TaskItem;
