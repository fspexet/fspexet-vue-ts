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