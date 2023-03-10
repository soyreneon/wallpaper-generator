import { InitialState, type State } from './InitialState';

interface action {
  type: string;
  // value: typeof State;
  value: any;
}

export const reducer = (state: State, action: action): any => {
  switch (action.type) {
    case 'resize-canvas':
      return {
        ...state,
        height: action.value.height,
        width: action.value.width,
        gradientRing: {
          ...state.gradientRing,
          scaleX: action.value.width,
          scaleY: action.value.height,
        },
      };
    case 'conical-gradient':
      return {
        ...state,
        conicGradient: {
          colorList: action.value.colorList,
          shine: action.value.shine,
          xOffset: action.value.xOffset,
          yOffset: action.value.yOffset,
        },
      };
    case 'gradient-ring':
      return {
        ...state,
        gradientRing: {
          ...state.gradientRing,
          enabled: action.value.enabled,
          colorList: action.value.colorList,
          shine: action.value.shine,
          x: action.value.x,
          y: action.value.y,
          radius: action.value.radius,
          strokeWidth: action.value.strokeWidth,
        },
      };
    case 'hours':
      return {
        ...state,
        hours: {
          ...state.hours,
          enabled: action.value.enabled,
          color: action.value.color,
          timeFormat: action.value.timeFormat,
          x: action.value.x,
          y: action.value.y,
          radius: action.value.radius,
          fontSize: action.value.fontSize,
          bold: action.value.bold,
          italic: action.value.italic,
        },
      };
    case 'save-whole-state':
      return {
        ...state,
        conicGradient: action.value.storageState.conicGradient,
        gradientRing: action.value.storageState.gradientRing,
        hours: action.value.storageState.hours,
      };
    case 'reset':
      return InitialState;
    default:
      return state;
  }
};
