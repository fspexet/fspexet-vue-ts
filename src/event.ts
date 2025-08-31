/**
 * Update this file with info about the Spex and it will
 * be correctly updated and displayed everywhere on the
 * website
 */

const KALLE_GLADER: SpexLocation = {
  name: "Kalle Glader",
  maps: "https://maps.app.goo.gl/bAT5aQCVxnEr4QkB8",
  address: "Hugo Grauers gata 4C, 411 33 Göteborg",
}

const FOCUS: SpexLocation = {
  name: "Focus",
  maps: "https://maps.app.goo.gl/Ts2zRVzNoDAZ9TsY9",
  address: "Kemivägen 11, 412 58 Göteborg",
  preposition: "på"
}

// Året för nollan slår om typ 1 juli varje år (det är inte alltid 181 dagar från 1 jan till 1 juli men det stämmer typ)
const nollanYear = new Date(new Date().valueOf() - 181 * 24 * 60 * 60 * 1000).getFullYear();

const AUTUMN_EVENT: SpexEvent = {
  semester: "autumn",
  tickets: {
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSclJ3yahpsin0XDOHUp1kQ0ewaYjjOgtKfbWTB7dtpTyiPsNw/viewform?usp=sharing&ouid=111267810821293790900"
  },
  location: FOCUS,
  performances: [
    {
      day: "2025-09-08",
      time: "18:00",
      note: "Nollanföreställning",
    },
    {
      day: "2025-09-09",
      time: "18:00",
    },
    {
      day: "2025-09-10",
      time: "18:00",
    }
  ],
  generalPerformanceNote: "F-nollan har bokningsförtur till första föreställningen. Övriga gäster kan boka innan det för att läggas på en väntlista för att få biljett i mån av plats. Besked meddelas två dagar innan första föreställningen.",
  prices: [
    {
      name: "F-nollan (endast 8/9)",
      price: 50,
      note: `Gäller F-nollan år ${nollanYear}`,
    },
    {
      name: "Nollan (endast 8/9)",
      price: 100
    },
    {
      name: "Student",
      price: 150,
      note: "Som student räknas alla som är till och med 24 år och/eller som har ett giltigt student-id.",
    },
    {
      name: "Ordinarie",
      price: 275
    },
  ]
}

const EVENT: SpexEvent = AUTUMN_EVENT;

export default EVENT;

export interface SpexEvent {
  /**
   * Set which semester the performances takes place to correcly
   * display "höstens föreställningar" or "vårens föreställningar"
   */
  semester: "spring" | "autumn";
  /**
   * Information about the tickets
   */
  tickets: SpexTickets;
  /**
   * The location where all performances take place. (Note: It is not
   * possible to have individual locations for every performance. TODO: Add
   * functionality for this if you need it)
   */
  location: SpexLocation;
  /**
   * List of days where there are performances
   */
  performances: SpexPerformance[];
  /**
   * This note will be displayed below the table of dates on the ticket-page
   */
  generalPerformanceNote?: string;
  /**
   * List of every price group
   */
  prices: SpexPrice[];
}

export interface SpexTickets {
  /**
   * Link to a Google Form
   */
  form_link: string;
}

export interface SpexLocation {
  /**
   * Display name of location
   */
  name: string;
  /**
   * Link to the location on Google maps
   */
  maps: string;
  /**
   * Human-readable address
   */
  address?: string;
  /**
   * I stället för att skriva "framförs i Focus" går det att sätta
   * `preposition` till "på" för att skriva "framförs på Focus".
   */
  preposition?: string;
}

export interface SpexPerformance {
  /**
   * Format: `yyyy-mm-dd`
   */
  day: string;
  /**
   * Format: `hh:mm`
   */
  time: string;
  /**
   * Note displayed under "Kommentar" column on ticket-page
   */
  note?: string;
  /**
   * Set to `true` when tickets for this day are sold out
   */
  sold_out?: boolean;
}

export interface SpexPrice {
  /**
   * Display name for this price group
   */
  name: string;
  /**
   * Price in SEK
   */
  price: number;
  /**
   * Footnote for this price group
   */
  note?: string;
}