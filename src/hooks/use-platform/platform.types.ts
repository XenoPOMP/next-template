export interface PlatformDetermination {
  kind: PlatformKind;
}

export type PlatformKind = 'desktop' | 'mobile' | 'unknown';
