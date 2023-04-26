export interface Course {
  id: string;
  name: string;
  isTopRated: boolean;
  length: number;
  date: Date;
  description: string;
  authors: string[];
}

export interface Author {
  id: string;
  name: string;
}
