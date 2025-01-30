import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")
const isMorning = "9:00"
const isAfternoon = "13:00"
const isNight = "18:00"

export function hoursLoad({ date }) {
  hours.innerHTML = ""
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
        hour,
        avaliable: isHourPast,
    }
  });

  opening.forEach(({hour, avaliable}) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(avaliable ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === isMorning){
        hourHeaderAdd("Manhã")
    } else if (hour === isAfternoon){
        hourHeaderAdd("Tarde")
    } else if (hour === isNight){
        hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}
