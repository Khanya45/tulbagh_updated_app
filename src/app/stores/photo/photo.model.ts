import { ID } from '@datorama/akita';

export interface Photo {
  id: ID;
  uniqueId: string;
}

export function createPhoto(params: Partial<Photo>) {
  return {} as Photo;
}
