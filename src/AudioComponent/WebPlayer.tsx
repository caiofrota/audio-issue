export class WebPlayer {
  private audio: HTMLAudioElement;

  constructor () {
    this.audio = new Audio();
    this.audio.src = "https://onedrive.live.com/download?cid=BF36D99BF1E21AEA&resid=BF36D99BF1E21AEA%21255469";
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}

const webPlayer = new WebPlayer();
export default webPlayer;

