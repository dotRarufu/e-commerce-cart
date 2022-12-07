import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  constructor() {}

  getProfiles() {
    return [
      {
        name: 'Moe',
        id: '0',
        info: 'PLV Student',
        date: '1/1/2022',
        status: 'Watching TV',
        img: '../../../assets/moe.jpg',
      },
      {
        name: 'Joe',
        id: '1',
        info: 'PLV Student',
        date: '2/2/2022',
        status: 'Watching Anime',
        img: '../../../assets/joe.jpg',
      },
      {
        name: 'Mary',
        id: '2',
        info: 'PLV Student',
        date: '3/3/2022',
        status: 'Watching Netflix',
        img: '../../../assets/mary.jpg',
      },
    ];
  }
}
