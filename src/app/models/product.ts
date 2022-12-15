export interface IProduct {
  total: number;
  totalHits: number;
    hits: IHit[];
}

export interface IHit {
  id: number;
  pageURL: string;
  userImageURL: string;
  tags: string;
}
