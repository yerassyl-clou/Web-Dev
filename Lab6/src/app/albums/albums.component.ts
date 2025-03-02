import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Album } from '../../models';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  albums: Album[] = [];
  newAlbum: Album;

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbum = {} as Album;
    this.newAlbum.userId = 5;
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((album) => album.id !== id);
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe((baseResponse) => {
      this.albums = baseResponse.albums;
    });
  }

  addAlbums() {
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => {
      console.log(album);
      this.albums.unshift(album);
    });
  }
}
