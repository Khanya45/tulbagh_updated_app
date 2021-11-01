import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @ViewChild('blogSlides', { static: false }) blogSlides: any;
  @ViewChild('eventSlides', { static: false }) eventSlides: any;
  @ViewChild('photoSlides', { static: false }) photoSlides: any;
  @Input() blogs: any;
  @Input() events: any;
  @Input() photos: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  onChange(ev: any) {
    const { value } = ev.detail;

    if (value === 'blog') {
      setTimeout(() => this.blogSlides.swiperRef.update(), 100);
    } else if (value === 'event') {
      setTimeout(() => this.eventSlides.swiperRef.update(), 100);
    } else if (value === 'gallery') {
      setTimeout(() => this.photoSlides.swiperRef.update(), 100);
    }
  }

  goToEvent(event) {
    this.navCtrl.navigateForward('event-details', {
      state: { event },
    });
  }
}
