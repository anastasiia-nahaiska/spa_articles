import { v4 as uuidv4 } from 'uuid';

export const getNeewArrayWithId = (length: number) => {
  return Array(length)
    .fill('')
    .map(() => ({
      id: uuidv4(),
    }));
};
