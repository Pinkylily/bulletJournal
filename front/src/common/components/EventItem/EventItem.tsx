import { Box, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import BadgeItem from "../BadgeItem/BadgeItem";

interface IEventItemProps {
  title: string;
  isDayDisplay: boolean;
  currentDate: number;
  startDate: number;
  endDate?: number;
}

interface IDateDisplayProps {
  currentDateInNumber: number;
  dateInNumber: number;
  isDayDisplay: boolean;
}

const DateDisplay: React.FC<IDateDisplayProps> = ({
  currentDateInNumber,
  dateInNumber,
  isDayDisplay,
}) => {
  const currentDate = new Date(currentDateInNumber);
  const date = new Date(dateInNumber);

  const isInNextMonthOrDay =
    date.getFullYear() !== currentDate.getFullYear() ||
    (date.getDate() !== currentDate.getDate() && isDayDisplay) ||
    (date.getMonth() !== currentDate.getMonth() && !isDayDisplay);

  const suffix = isInNextMonthOrDay ? "*" : "";

  const dateLabel = isDayDisplay
    ? `${date.getHours()}h`
    : `${date.getUTCDate()}`;

  return <Typography variant="body1">{`${dateLabel}${suffix}`}</Typography>;
};

const EventItem: React.FC<IEventItemProps> = ({
  title,
  currentDate,
  startDate,
  endDate,
  isDayDisplay,
}) => {
  return (
    <ListItem>
      <Stack mr={1}>
        <DateDisplay
          currentDateInNumber={currentDate}
          dateInNumber={startDate}
          isDayDisplay={isDayDisplay}
        />
        {endDate && (
          <DateDisplay
            currentDateInNumber={currentDate}
            dateInNumber={endDate}
            isDayDisplay={isDayDisplay}
          />
        )}
      </Stack>
      <Box display={"flex"} alignItems={"center"}>
        <BadgeItem />
        <ListItemText
          sx={{ marginLeft: "10px" }}
          primary={title}
          primaryTypographyProps={{ noWrap: true }}
        />
      </Box>
    </ListItem>
  );
};

export default EventItem;
