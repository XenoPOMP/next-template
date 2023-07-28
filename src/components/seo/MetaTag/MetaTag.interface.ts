export interface INoIndexTag {
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface IDescTag {
  description?: string;
}

export interface ITitleTag {
  title?: string;
}

export interface IOgTitleTag extends ITitleTag {}
