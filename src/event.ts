// Året för nollan slår om typ 1 juli varje år (det är inte alltid 181 dagar från 1 jan till 1 juli men det stämmer typ)
const nollanYear = new Date(new Date().valueOf() - 181 * 24 * 60 * 60 * 1000).getFullYear();

const AUTUMN_EVENT: SpexEvent = {
  semester: "autumn",
  tickets: {
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSclJ3yahpsin0XDOHUp1kQ0ewaYjjOgtKfbWTB7dtpTyiPsNw/viewform?usp=sharing&ouid=111267810821293790900"
  },
  location: {
    name: "Kalle Glader",
    maps: "https://maps.app.goo.gl/bAT5aQCVxnEr4QkB8",
    address: "Hugo Grauers gata 4C, 411 33 Göteborg",
  },
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
  semester: "spring" | "autumn";
  tickets: SpexTickets;
  location: SpexLocation;
  performances: SpexPerformance[];
  generalPerformanceNote?: string;
  prices: SpexPrice[];
}

export interface SpexTickets {
  form_link: string;
}

export interface SpexLocation {
  name: string;
  maps: string;
  address?: string;
}

export interface SpexPerformance {
  day: string;
  time: string;
  note?: string;
  sold_out?: boolean;
}

export interface SpexPrice {
  name: string;
  price: number;
  note?: string;
}