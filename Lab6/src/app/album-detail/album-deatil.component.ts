import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ALBUMS, Album } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-deatil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-deatil.component.html',
  styleUrl: './album-deatil.component.css',
})
export class AlbumDetailComponent {
  album: Album | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.album = ALBUMS.find((album) => album.id === albumId);
  }
}
