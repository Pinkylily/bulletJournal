import CalendarNavigation from "./CalendarNavigation";

export default {
  component: CalendarNavigation,
  title: "CalendarNavigation",
};

export const Default = {
  args: {
    date: 1709209776704,
    viewType: "day",
  },
};

export const Month = {
  args: {
    date: 1709209776704,
    viewType: "month",
  },
};

export const Year = {
  args: {
    date: 1709209776704,
    viewType: "year",
  },
};
