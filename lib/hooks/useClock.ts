import { useEffect, useState } from "react";

const useClock = () => {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    setInterval(() => {
      let date = new Date();

      let HH: any = date.getHours(),
        MM: any = date.getMinutes(),
        day: any = date.getDate(),
        month: any = date.getMonth(),
        year: any = date.getFullYear(),
        ampm = "";

      if (HH >= 12) {
        HH = HH - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }

      if (HH === 0) HH = 12;
      if (HH < 10) HH = `0${HH}`;
      if (MM < 10) MM = `0${MM}`;

      setHourDigital(HH);
      setMinutesDigital(MM);
      setAmPm(ampm);
      setDayNow(day);
      setMonthNow(months[month]);
      setYearNow(year);
    }, 1000);
  }, []);
  return {
    hourDigital,
    minutesDigital,
    amPm,
    dayNow,
    monthNow,
    yearNow,
  };
};

export default useClock;
