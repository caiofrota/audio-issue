export class Microphone {
  private audioCtx: AudioContext = new AudioContext();
  private stream: MediaStream | undefined;
  private buff: ArrayBuffer | undefined;

  async record() {
    this.stream = await navigator.mediaDevices.getUserMedia({audio: {channelCount: 1}, video: false});
    const microphone = this.audioCtx.createMediaStreamSource(this.stream);
    const filter = this.audioCtx.createBiquadFilter();
    microphone.connect(filter);
    filter.connect(this.audioCtx.destination);
  }

  async stop() {
    this.stream?.getAudioTracks().forEach((track) => track.stop());
  }
}

const microphone = new Microphone();
export default microphone;

