import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
  { path: 'faceSnap/:id', component: SingleFaceSnapComponent },
  { path: 'faceSnap', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent }, // Redirection vers la page d'accueil
];
