import { Injectable } from '@angular/core';

export class FontSize {
  size: number;

  text: string;
}

export class LineHeight {
  lineHeight: number;

  text: string;
}

export class Font {
  text: string;
}

export class FontStyle {
  icon: string;

  style: string;

  hint: string;
}

export class TextAlign {
  icon: string;

  alignment: string;

  hint: string;
}

export class TextAlignExtended extends TextAlign {
  text: string;
}

export class ListType {
  icon: string;

  alignment: string;

  hint: string;
}

const fontSizes: FontSize[] = [
  { size: 10, text: '10px' },
  { size: 12, text: '12px' },
  { size: 14, text: '14px' },
  { size: 16, text: '16px' },
  { size: 18, text: '18px' },
];

const lineHeights: LineHeight[] = [
  { lineHeight: 1, text: '1' },
  { lineHeight: 1.35, text: '1.35' },
  { lineHeight: 1.5, text: '1.5' },
  { lineHeight: 2, text: '2' },
];

const fonts: Font[] = [
  { text: 'Arial' },
  { text: 'Courier New' },
  { text: 'Georgia' },
  { text: 'Impact' },
  { text: 'Lucida Console' },
  { text: 'Tahoma' },
  { text: 'Times New Roman' },
];

const fontStyles: FontStyle[] = [
  {
    icon: 'bold',
    style: 'bold',
    hint: 'Bold',
  },
  {
    icon: 'italic',
    style: 'italic',
    hint: 'Italic',
  },
  {
    icon: 'underline',
    style: 'underline',
    hint: 'Underlined',
  },
  {
    icon: 'strike',
    style: 'strike',
    hint: 'Strikethrough',
  },
];

const textAligns: TextAlignExtended[] = [
  {
    icon: 'alignleft',
    alignment: 'left',
    hint: 'Align left',
    text: 'Align left',
  },
  {
    icon: 'aligncenter',
    alignment: 'center',
    hint: 'Center',
    text: 'Center',
  },
  {
    icon: 'alignright',
    alignment: 'right',
    hint: 'Align right',
    text: 'Align right',
  },
  {
    icon: 'alignjustify',
    alignment: 'justify',
    hint: 'Justify',
    text: 'Justify',
  },
];

const listTypes: ListType[] = [
  {
    icon: 'orderedlist',
    alignment: 'orderedlist',
    hint: 'Ordered',
  },
  {
    icon: 'bulletlist',
    alignment: 'bulletlist',
    hint: 'Bullet',
  },
];

@Injectable()
export class Service {
  getFontSizes(): FontSize[] {
    return fontSizes;
  }

  getLineHeights(): LineHeight[] {
    return lineHeights;
  }

  getFonts(): Font[] {
    return fonts;
  }

  getFontStyles(): FontStyle[] {
    return fontStyles;
  }

  getTextAligns(): TextAlignExtended[] {
    return textAligns;
  }

  getListType(): ListType[] {
    return listTypes;
  }
}
