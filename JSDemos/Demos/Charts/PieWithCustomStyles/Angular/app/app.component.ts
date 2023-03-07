import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPieChartModule } from 'devextreme-angular';
import { registerGradient, registerPattern } from 'devextreme/common/charts';
import { Data, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service],
})

export class AppComponent {
  data: Data[];

  imagePatternSize = 12;

  shapePatternSize = 6;

  constructor(service: Service) {
    this.data = service.getData();
  }

  customizePoint = (point) => {
    const color = point.series.getPointsByArg(point.argument)[0].getColor();
    const pointSettings = { color };
    if (point.argument === 'Stroke Pattern') {
      pointSettings.color = { fillId: this.strokePattern(color) };
    }
    if (point.argument === 'Square Pattern') {
      pointSettings.color = { fillId: this.squarePattern(color) };
    }
    if (point.argument === 'Linear Gradient') {
      pointSettings.color = { fillId: this.linearGradient(color) };
    }
    if (point.argument === 'Radial Gradient') {
      pointSettings.color = { fillId: this.radialGradient(color) };
    }
    if (point.argument === 'Pattern with image') {
      pointSettings.color = { fillId: this.patternImage(color) };
    }

    return pointSettings;
  };

  customizeText = (info) => info.argument;

  hexToRgb = (hex: string, opacity = 1) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`;
  };

  gradient = (type, color1, color2) => registerGradient(type, {
    colors: [{
      offset: '20%',
      color: color1,
    }, {
      offset: '90%',
      color: color2,
    }],
  });

  linearGradient = (color) => this.gradient('linear', color, this.hexToRgb(color, 0.5));

  radialGradient = (color) => this.gradient('radial', this.hexToRgb(color, 0.5), color);

  patternImage = (color) => registerPattern({
    width: this.imagePatternSize,
    height: this.imagePatternSize,
    template: (container) => {
      container.innerHTML = ['<svg>',
        `<rect x=0 y=0 width=${this.imagePatternSize} height=${this.imagePatternSize} fill=${color} />`,
        `<image x=0 y=0 width=${this.imagePatternSize} height=${this.imagePatternSize}
          href='../../../../images/Charts/PieWithCustomStyles/diamond.png'
          opacity=0.6
        />`,
        '</svg>'].join('');
    },
  });

  strokePattern = (color) => registerPattern({
    width: this.shapePatternSize,
    height: this.shapePatternSize,
    template: (container) => {
      const halfSize = this.shapePatternSize / 2;
      const oneHalfSize = this.shapePatternSize * 1.5;
      const d = `M ${halfSize} ${-halfSize} L ${-halfSize} ${halfSize} M 0 ${this.shapePatternSize} L ${this.shapePatternSize} 0 M ${oneHalfSize} ${halfSize} L ${halfSize} ${oneHalfSize}`;

      container.innerHTML = ['<svg>',
        `<path stroke=${color} stroke-width=2 d="${d}" />`,
        '</svg>'].join('');
    },
  });

  squarePattern = (color) => registerPattern({
    width: this.shapePatternSize,
    height: this.shapePatternSize,
    template: (container) => {
      container.innerHTML = ['<svg>',
        `<rect x=0 y=0 width=${this.shapePatternSize} height=${this.shapePatternSize} stroke=${color} stroke-width=2 />`,
        '</svg>'].join('');
    },
  });
}

@NgModule({
  imports: [
    BrowserModule,
    DxPieChartModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
