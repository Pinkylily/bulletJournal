import EventItem from "./EventItem";

export default {
  component: EventItem,
  title: "EventItem",
};

export const WithOnlyStartDate = {
  args: {
    title: "Tâche planifié",
    startDate: 1709209776704,
    currentDate: 1709209776704,
    isDayDisplay: false,
  },
  argTypes: {
    endDate: { control: "disabled" },
  },
};

export const WithEndDate = {
  args: {
    title: "Tâche planifié",
    startDate: 1709209776704,
    currentDate: 1709209776704,
    isDayDisplay: false,
    endDate: 1709308654725,
  },
};
