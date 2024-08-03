interface RootObject {
  score: number;
  show: Show;
}

interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: null | number;
  averageRuntime: null | number;
  premiered: null | string;
  ended: null | string;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | Network2 | null;
  webChannel: WebChannel | WebChannel2 | null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: null | string;
  updated: number;
  _links: Links;
}

interface Links {
  self: Self;
  previousepisode?: Previousepisode;
}

interface Previousepisode {
  href: string;
  name: string;
}

interface Self {
  href: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Externals {
  tvrage: null | number;
  thetvdb: null | number;
  imdb: null | string;
}

interface WebChannel2 {
  id: number;
  name: string;
  country: null;
  officialSite: null;
}

interface WebChannel {
  id: number;
  name: string;
  country: null;
  officialSite: string;
}

interface Network2 {
  id: number;
  name: string;
  country: Country;
  officialSite: null;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Rating {
  average: null | number;
}

interface Schedule {
  time: string;
  days: string[];
}
