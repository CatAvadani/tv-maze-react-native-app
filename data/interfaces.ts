interface RootObject {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  name: string;
  image: { medium: string };
  summary: string;
  genres: string[];
}

export interface CastMember {
  person: {
    id: number;
    name: string;
    image: { medium: string };
  };
  character: {
    name: string;
  };
}
