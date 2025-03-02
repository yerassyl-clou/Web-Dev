import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './album-deatil.component.html',
  styleUrls: ['./album-deatil.component.css'],
})
export class AlbumDetailComponent {
  album: Album | undefined;
  isEditing = false;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(albumId).subscribe((album) => {
      this.album = album;
      this.editedTitle = album.title;
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveTitle() {
    if (this.album) {
      this.album.title = this.editedTitle;
      this.toggleEdit();
    }
  }
}
