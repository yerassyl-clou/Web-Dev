import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, BaseResponse, Photo } from '../models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private client: HttpClient) {}

  getAlbums() {
    return this.client
      .get<Album[]>('https://jsonplaceholder.typicode.com/albums')
      .pipe(map((albums) => ({ albums })));
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(
      `${'https://jsonplaceholder.typicode.com/albums'}/${id}`
    );
  }

  addAlbum(album: Album) {
    return this.client.post<Album>(
      `${'https://jsonplaceholder.typicode.com/albums'}`,
      album
    );
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
  }
}
