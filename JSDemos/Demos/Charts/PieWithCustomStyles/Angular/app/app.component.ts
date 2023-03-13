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

  gradient = (type: string, color1: string, color2: string) => registerGradient(type, {
    colors: [{
      offset: '20%',
      color: color1,
    }, {
      offset: '90%',
      color: color2,
    }],
  });

  linearGradient = (color: string) => this.gradient('linear', color, this.hexToRgb(color, 0.5));

  radialGradient = (color: string) => this.gradient('radial', this.hexToRgb(color, 0.5), color);

  patternImage = (color: string) => registerPattern({
    width: this.imagePatternSize,
    height: this.imagePatternSize,
    template: (container) => {
      const rect = this.createRect(this.imagePatternSize, color, '', 0);
      const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      image.setAttribute('x', '0');
      image.setAttribute('y', '0');
      image.setAttribute('width', this.imagePatternSize.toString());
      image.setAttribute('height', this.imagePatternSize.toString());
      image.setAttribute('href', '../../../../images/Charts/PieWithCustomStyles/diamond.png');
      image.setAttribute('opacity', '0.6');

      container.appendChild(rect);
      container.appendChild(image);
    },
  });

  strokePattern = (color: string) => registerPattern({
    width: this.shapePatternSize,
    height: this.shapePatternSize,
    template: (container) => {
      const halfSize = this.shapePatternSize / 2;
      const oneHalfSize = this.shapePatternSize * 1.5;
      const d = `M ${halfSize} ${-halfSize} L ${-halfSize} ${halfSize} M 0 ${
        this.shapePatternSize
      } L ${
        this.shapePatternSize
      } 0 M ${oneHalfSize} ${halfSize} L ${halfSize} ${oneHalfSize}`;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      path.setAttribute('stroke', color);
      path.setAttribute('stroke-width', '2');
      path.setAttribute('d', d);
      container.appendChild(path);
    },
  });

  squarePattern = (color: string) => registerPattern({
    width: this.shapePatternSize,
    height: this.shapePatternSize,
    template: (container) => {
      const rect = this.createRect(this.shapePatternSize, '', color, 2);
      container.appendChild(rect);
    },
  });

  createRect = (size: number, fill: string, stroke: string, strokeWidth: number) => {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', size.toString());
    rect.setAttribute('height', size.toString());
    rect.setAttribute('fill', fill);
    rect.setAttribute('stroke', stroke);
    rect.setAttribute('stroke-width', strokeWidth.toString());

    return rect;
  };
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
