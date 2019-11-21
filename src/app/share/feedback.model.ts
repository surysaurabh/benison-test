export interface Feedback {
    name: string,
    id: number;
    project: string;
    rating: number;
    comments: string;
    managerRating?: number;
    managerComments?: string;
  }