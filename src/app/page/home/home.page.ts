import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  images=[
    "https://scontent.frgn14-1.fna.fbcdn.net/v/t39.30808-6/376751494_751848380287292_7761359995433089971_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=WqVYy7Dti4YAX_W1IcY&_nc_ht=scontent.frgn14-1.fna&oh=00_AfDCuvFkZeMzEXeW_7vWByCPH07lUQiCmOhX5UxC0hbKKQ&oe=65043597",
    "https://scontent.frgn14-1.fna.fbcdn.net/v/t39.30808-6/376812262_751848500287280_3277999420699763804_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=cTkWf_Y_iR4AX_0vW_T&_nc_ht=scontent.frgn14-1.fna&oh=00_AfAnHgFHQQBnJqbd5XXOoAaIMudpAdt4P5Q1m3w4oWNVOQ&oe=65058012",
    "https://scontent.frgn14-1.fna.fbcdn.net/v/t39.30808-6/376766784_751848616953935_9160861070322363092_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=J2FZxlyfR-kAX_6vDoR&_nc_ht=scontent.frgn14-1.fna&oh=00_AfDlMQV_d5tHgMISHKuB6lRWrvTTYXFUZ2pA1lqnA2ngBA&oe=6505FC6A",
    "https://scontent.frgn14-1.fna.fbcdn.net/v/t39.30808-6/376876186_751848833620580_4091036773893418422_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=jJd4sv6K5VcAX--eV-F&_nc_ht=scontent.frgn14-1.fna&oh=00_AfB4Szk8knOlo5NmN2LNbLRp9DrtQMUb9VTKvUX_4rnuDQ&oe=65060CB9"
  ]
  swiperSliderChange(slider:any){
    console.log(slider);
  }
  

}
