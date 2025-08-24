import { SpexEvent, SpexPerformance } from "./event";

export function formatDurationAsArray(duration: Date) {
  let millis = duration.valueOf();
  millis = Math.max(0, millis);
  millis = Math.abs(millis);

  const days = Math.floor(millis / 1000 / 60 / 60 / 24);
  const hours = Math.floor(millis / 1000 / 60 / 60 - days * 24);
  const minutes = Math.floor(millis / 1000 / 60 - days * 24 * 60 - hours * 60);
  const seconds = Math.floor(millis / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
  
  const output = [];
  output.push(`${days}`);
  output.push(`${hours.toString().padStart(2, "0")}`);
  output.push(`${minutes.toString().padStart(2, "0")}`);
  output.push(`${seconds.toString().padStart(2, "0")}`);
  return output;
}

const DAYS = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
];

const MONTHS = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
]

export function getPrettyDay(performance: SpexPerformance) {
  const date = new Date(performance.day + "T" + performance.time + "Z");

  const day = DAYS[date.getUTCDay()];
  const dateNumber = date.getUTCDate();
  const month = MONTHS[date.getUTCMonth()];

  return `${day} ${dateNumber} ${month}`;
}

export function prettySemester(event: SpexEvent) {
  if (event.semester === "autumn") {
    return "Höst";
  }
  else if (event.semester === "spring") {
    return "Vår";
  }
  else {
    throw new Error("Invalid semester: " + event.semester);
  }
}