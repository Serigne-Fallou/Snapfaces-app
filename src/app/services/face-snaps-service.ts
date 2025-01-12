import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
  providedIn: 'root'
}) export class FaceSnapsService {
  private readonly faceSnaps: FaceSnap[] = [
      new FaceSnap(
        'Mon premier FaceSnap',
        new Date(),
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        'Ceci est un descriptif pour mon premier FaceSnap',
        0
      ).withLocation('Paris, France'),
      new FaceSnap(
        'Mon deuxième FaceSnap',
        new Date(),
        'https://cdn.pixabay.com/photo/2020/12/05/15/55/christmas-tree-5806329_1280.jpg',
        'Ceci est un descriptif pour mon deuxième FaceSnap',
        0
      ).withLocation('Paris, France'),
      new FaceSnap(
        'Mon dernier FaceSnap',
        new Date(),
        'https://cdn.pixabay.com/photo/2020/11/19/14/43/christmas-tree-5758765_1280.jpg',
        'Ceci est un descriptif pour mon dernier FaceSnap',
        0
      ).withLocation('Paris, France'),
      new FaceSnap(
        'Mon premier FaceSnap',
        new Date(),
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        'Ceci est un descriptif pour mon premier FaceSnap',
        0
      ).withLocation('Paris, France'),
      new FaceSnap(
        'Mon deuxième FaceSnap',
        new Date(),
        'https://cdn.pixabay.com/photo/2020/12/05/15/55/christmas-tree-5806329_1280.jpg',
        'Ceci est un descriptif pour mon deuxième FaceSnap',
        150
      ).withLocation('Paris, France'),
      new FaceSnap(
        'Mon dernier FaceSnap',
        new Date(),
        'https://cdn.pixabay.com/photo/2020/11/19/14/43/christmas-tree-5758765_1280.jpg',
        'Ceci est un descriptif pour mon dernier FaceSnap',
        0
      ),

    ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundfaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundfaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundfaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);

}

}
