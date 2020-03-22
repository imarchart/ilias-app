import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/models/books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  books = [];

  constructor(private modalCtrl: ModalController,
    private http: HttpClient,
    public router: Router,
    public navCtrl: NavController
    ) {}

    ionViewWillEnter() {
      this.http.get('https://api.myjson.com/bins/1gk23m')
      .subscribe((data: any) => {
        console.log(data);
        for(let i = 0; i < data.books.length; i++) {
        let b = new Book(data.books[i].title, data.books[i].author);
        console.log(b);
        this.books.push(b);
        }
      });
    };

}
