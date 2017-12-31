import { ANIMATION_TYPES } from 'ngx-loading';

export class NgxLoadingOptions {
  constructor(init?: Partial<NgxLoadingOptions>) {
    Object.assign(this, init);
  }
  animationType: ANIMATION_TYPES = ANIMATION_TYPES.threeBounce;
  backdropBackgroundColour = 'rgba(0, 0, 0, 0.3)';
  fullScreenBackdrop = false;
  backdropBorderRadius = '4px';
  primaryColour = '#ffffff';
  secondaryColour = '#ffffff';
  tertiaryColour = '#ffffff';
}
