export interface IDecoElement {
  name: string | null;
  url: string | null;
}

export interface IDefaultDecotypes {
  name?: string;
  url?: string;
  X?: number;
  Y?: number;
}

export interface IFontTypes extends IDefaultDecotypes {
  fontColor?: string;
  fontBg?: string;
  fontWidth?: number;
  fontContent?: string;
}
