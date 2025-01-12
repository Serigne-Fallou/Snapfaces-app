import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent,
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private FaceSnapsService: FaceSnapsService,) {}

  ngOnInit() {
    this.faceSnaps = this.FaceSnapsService.getFaceSnaps();
  }


  }
