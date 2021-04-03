import UI from './UI.js';

export default class Sliders {
  constructor() {
    this.inputs = {};
    this.hueOffset = UI.getCSSVar('--hue-offset');
    this.init();
  }
  init() {
    UI.$$('ul.controls > li > section > input.slider').forEach(item => {
      const { id, min, max } = item;
      this.inputs[id] = { min, max };
    });
    UI.$('#colour').addEventListener('input', (e) => {
      const hueTwo = (Number(e.target.value) + Number(this.hueOffset)) % this.inputs['colour'].max;
      UI.docElem().style.setProperty('--hue-one', e.target.value);
      UI.docElem().style.setProperty('--hue-two', hueTwo);
    });

    UI.$('#border-radius').addEventListener('input', (e) => {
      UI.docElem().style.setProperty('--border-radius', e.target.value + '%');
    });

    UI.$('#shape').addEventListener('input', (e) => {
      UI.docElem().style.setProperty('--shape', e.target.value + "deg");
    });

    UI.$('#speed').addEventListener('input', (e) => {
      const { min, max } = this.inputs['speed'];
      const speed = Number(max) + Number(min) - Number(e.target.value);
      UI.docElem().style.setProperty('--speed', speed.toFixed(2).toString() + "s");
    });
  }
}