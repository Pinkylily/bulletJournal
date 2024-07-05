import React from "react";
import { Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Unstable_Grid2";
import { ViewType } from "../../types/CalendarTypes";

interface ICalendarNavigationProps {
  date: number;
  viewType: ViewType;
}

const CalendarNavigation: React.FunctionComponent<ICalendarNavigationProps> = ({
  date,
  viewType,
}) => {
  const getDate = (date: number, viewType: ViewType) => {
    const newDate = new Date(date);
    if (viewType === "day") {
      return newDate.toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    if (viewType === "month") {
      return `${new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(newDate)} ${newDate.getFullYear()}`;
    }
    return `${newDate.getFullYear()}`;
  };

  return (
    <Grid container spacing={12}>
      <Grid>
        <Button startIcon={<ArrowBackIosNewIcon />} color={"inherit"} />
      </Grid>
      <Grid>
        <Typography variant="h6">{getDate(date, viewType)}</Typography>
      </Grid>
      <Grid>
        <Button startIcon={<ArrowForwardIosIcon />} color={"inherit"} />
      </Grid>
    </Grid>
  );
};

export default CalendarNavigation;
