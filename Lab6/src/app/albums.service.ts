import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, BaseResponse } from '../models';
import { map } from 'rxjs';

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

  getAlbum(id: number) {
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
}
