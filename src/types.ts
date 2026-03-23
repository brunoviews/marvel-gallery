export interface Comic {
  id: string;
  title: string;
  date: string;
  path: string;
}

export interface Character {
  id: string;
  name: string;
  description?: string;
  path: string;
  favourite?: boolean;
  comics?: Comic[];
}

export type SetLikedCharacters = React.Dispatch<React.SetStateAction<string[]>>;
