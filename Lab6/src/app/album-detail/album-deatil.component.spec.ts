import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDeatilComponent } from './album-deatil.component';

describe('AlbumDeatilComponent', () => {
  let component: AlbumDeatilComponent;
  let fixture: ComponentFixture<AlbumDeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDeatilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
