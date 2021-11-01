import { ID } from '@datorama/akita';

export interface Attraction {
  id: ID;
  title: string;
  description: string;
}

export function createAttraction(params: Partial<Attraction>) {
  return {} as Attraction;
}
