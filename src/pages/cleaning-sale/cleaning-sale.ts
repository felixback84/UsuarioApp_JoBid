import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';

import { CleaningContractorPage } from '../cleaning-contractor/cleaning-contractor';
import { IndexPage } from '../index/index';
/**
 * Generated class for the CleanigSalePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-sale',
  templateUrl: 'cleaning-sale.html',
})
export class CleaningSalePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningSalePage');
  }
  goCleaningContractor(){
  	this.navCtrl.setRoot(CleaningContractorPage);
  }

  goIndex(){
    this.navCtrl.setRoot(IndexPage);
  }
  showInfoCleaning(id = 0){
    var contenido='';
    contenido +='<div class="col-40"><img src="assets/img/professions/cleaning.png"></div>';
    contenido +='<div class="col-60"><h4>Estefania lorem</h4><img src="assets/img/Estrellas.png">';
    contenido +='<p><span class="ItemPService"><img src="assets/img/okBlue.png"> <span> Certificate</span>,</span><span class="ItemPService"><img src="assets/img/okBlue.png"> <span>  Insurance</span></span></p></div>';
    contenido += "<h5>Presentation</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus consectetur atque at accusantium sequi, ipsum ut! Excepturi, alias porro, laboriosam fugit doloribus quisquam quia autem est quos voluptatibus. Consequatur vel porro animi quae quam recusandae dignissimos quos quaerat illo eaque sed saepe libero incidunt autem ab veritatis id magni perferendis, amet ex deleniti? Quo autem, sit, non, saepe aperiam magnam nisi, impedit modi ab nihil eum tempore maxime aspernatur optio ratione iste! Alias porro molestiae quod, incidunt, exercitationem facilis id perferendis distinctio natus delectus, voluptas sunt ullam tempore ad necessitatibus nobis ipsam omnis consequuntur vitae labore ipsa voluptatem autem aperiam officiis? Totam doloremque, minus fuga distinctio aperiam non perspiciatis dolorum. Culpa facere sint modi? Dolore doloribus labore velit quidem corrupti, corporis, culpa quam ipsam necessitatibus numquam. Pariatur at qui ducimus, similique, delectus repellendus commodi incidunt nulla ex illo, sed a accusamus, quam quaerat ab libero earum praesentium enim numquam exercitationem dolorum nihil. Natus qui illo ipsa quaerat totam iste fugit id, fugiat, commodi iure porro amet non sint quod earum quo. Ex beatae ea suscipit sapiente dolorem earum, dicta soluta qui cumque debitis aliquam laborum molestias et error eos eaque at aperiam, hic nemo saepe nisi modi officiis. Quod eius aperiam tenetur rerum corrupti, repellat asperiores nihil laborum facere sequi porro molestias repellendus. Eligendi cumque repudiandae adipisci, eveniet delectus tempora iure, amet culpa beatae maiores veritatis odio quisquam eum illum recusandae soluta. Voluptate suscipit accusantium, iure non cum autem, laborum illum eveniet pariatur. Illum dolorum eos reprehenderit, voluptatum atque repellat asperiores dignissimos modi quia nobis cumque ducimus maiores deserunt quibusdam! Iusto rem voluptates sit delectus vitae animi, harum sed, unde atque in odio cumque eaque dolorum placeat sequi porro, itaque incidunt. Ducimus quibusdam natus placeat repellat sit eaque, nisi rerum soluta delectus nemo facilis dolor sequi suscipit dolorum, qui.</p>";
    contenido += id+'';
    contenido +='<h5>Gallery</h5>';
    contenido +='<img src="assets/img/gallery.png" alt="">';
    contenido +='<img src="assets/img/gallery.png" alt="">';
    contenido +='<img src="assets/img/gallery.png" alt="">';
    contenido +='<img src="assets/img/gallery.png" alt="">';
    contenido +='<h5>Comments</h5><div class="comments">';
    contenido +='<h6>Luis Lorem <img src="assets/img/Estrellas.png" alt=""></h6>';
    contenido +='<p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>';
    contenido +='</div><div class="comments">';
    contenido +='<h6>Melisa Lorem <img src="assets/img/Estrellas.png" alt=""></h6>';
    contenido +='<p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>';
    contenido +='</div>';

    let alert = this.alertCtrl.create({
      // title: 'Estefania Lorem',
      message: contenido,
      buttons: ['OK']
    });
    alert.present();
  }
}
