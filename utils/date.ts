import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const getDateInTimeZone = (dateString: string) => {
  const userTimezone = dayjs.tz.guess();

  const formattedDate = dayjs(dateString)
    .tz(userTimezone)
    .format("MMM DD, YYYY · h:mma");

  return formattedDate;
};

export { getDateInTimeZone };
