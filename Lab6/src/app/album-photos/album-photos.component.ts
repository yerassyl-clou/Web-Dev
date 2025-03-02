import { Component } from '@angular/core';
import { Photo } from '../../models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
})
export class AlbumPhotosComponent {
  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
