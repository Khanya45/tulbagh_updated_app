import { ID } from '@datorama/akita';

export interface Liked {
  id: ID;
  title: string;
  image200Url: string;
  category: string;
}

export function createLiked(params: Partial<Liked>) {
  return {} as Liked;
}
