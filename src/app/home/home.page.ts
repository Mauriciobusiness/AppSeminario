import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArtistModalComponent } from '../artist-modal/artist-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) { }

  async openArtistModal() {
    const modal = await this.modalController.create({
      component: ArtistModalComponent
    });
    return await modal.present();
  }
}
