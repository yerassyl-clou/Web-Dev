export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface BaseResponse {
  albums: Album[];
}
