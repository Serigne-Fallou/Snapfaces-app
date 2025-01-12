import { Component, Input} from '@angular/core';
import { FaceSnap } from './../models/face-snap';
import { TitleCasePipe, NgClass, NgStyle, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FaceSnapsService } from './../services/face-snaps-service';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [

    TitleCasePipe,
    NgClass,
    NgStyle,
    DatePipe

  ],
templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  snapButtonText = 'Oh Snap!';
  userHasSnapped = false;

  constructor(private FaceSnapsService: FaceSnapsService, private router: Router ) {}

  OnSnap() {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
    }

  unSnap() {
    this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`faceSnap/${this.faceSnap.id}`);
  }


}


