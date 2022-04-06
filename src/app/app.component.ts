import { Component } from '@angular/core';
import Player from "@vimeo/player";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vimeoapp';

  player!: Player;

  ngAfterViewInit() {
    this.player = new Player('handstick', {
      id: 19231868,
      width: 640,

      // Use default values for settings, to test typings
      autopause: true,
      autoplay: false,
      background: false,
      byline: true,
      color: '#00adef',
      controls: false,
      dnt: false,
      interactiveparams: 'key1=value1,key2=value2',
      keyboard: true,
      loop: false,
      muted: false,
      pip: false,
      playsinline: true,
      portrait: true,
      responsive: false,
      speed: false,
      title: false,
      transparent: true,
    });
    this.player
    .loadVideo('http://vimeo.com/video/76979871')


  }

  play(): void {
    this.player.play();
  }

  pause(): void {
    this.player.pause();
  }

  stop(): void {
    this.player.pause();
  }

  changeVideo(url:string) {
    this.player
    .loadVideo(url)
  }

}
