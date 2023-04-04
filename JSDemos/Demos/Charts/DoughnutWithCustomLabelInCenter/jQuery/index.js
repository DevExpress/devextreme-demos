$(() => {
  const formatNumber = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format;
  const commonSettings = {
    innerRadius: 0.65,
    resolveLabelOverlapping: 'shift',
    sizeGroup: 'piesGroup',
    legend: {
      visible: false,
    },
    type: 'doughnut',
    series: [{
      argumentField: 'commodity',
      valueField: 'total',
      label: {
        visible: true,
        connector: {
          visible: true,
        },
        format: 'fixedPoint',
        backgroundColor: 'none',
        customizeText(e) {
          return `${e.argumentText}\n${e.valueText}`;
        },
      },
    }],
    centerTemplate(pieChart, container) {
      const total = pieChart
        .getAllSeries()[0]
        .getVisiblePoints()
        .reduce((s, p) => s + p.originalValue, 0);
      const { country } = pieChart.getAllSeries()[0].getVisiblePoints()[0].data;

      const circle = createCircle(100, 100, '#eee', pieChart.getInnerRadius() - 6);
      const image = createImage(70, 58, 60, 40, `../../../../images/flags/${country.replace(/\s/, '').toLowerCase()}.svg`);
      const text = createText(100, 120, '#494949', 'middle', 18, [country, formatNumber(total)]);

      container.appendChild(circle);
      container.appendChild(image);
      container.appendChild(text);
    },
  };

  function createCircle(x, y, color, radius) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('fill', color);
    circle.setAttribute('r', radius);

    return circle;
  }

  function createImage(x, y, width, height, href) {
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');

    image.setAttribute('x', x);
    image.setAttribute('y', y);
    image.setAttribute('width', width);
    image.setAttribute('height', height);
    image.setAttribute('href', href);

    return image;
  }

  function createText(x, y, color, textAnchor, fontSize, contents) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.setAttribute('fill', color);
    text.setAttribute('text-anchor', textAnchor);
    text.setAttribute('font-size', fontSize);

    const tspan1 = createTSpan(x, 0, contents[0]);
    const tspan2 = createTSpan(x, 20, contents[1], 600);

    text.appendChild(tspan1);
    text.appendChild(tspan2);

    return text;
  }

  function createTSpan(x, dy, content, fontWeight) {
    const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');

    tspan.setAttribute('x', x);
    tspan.setAttribute('dy', dy);
    tspan.setAttribute('font-weight', fontWeight);
    tspan.textContent = content;

    return tspan;
  }

  $('#countries')
    .dxPieChart($.extend({}, commonSettings, {
      dataSource: {
        store: data,
        filter: ['country', '=', 'France'],
      },
    }));

  $('#waterLandRatio')
    .dxPieChart($.extend({}, commonSettings, {
      dataSource: {
        store: data,
        filter: ['country', '=', 'Germany'],
      },
    }));
});
