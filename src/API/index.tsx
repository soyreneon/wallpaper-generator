import { type ColorsArray } from '../types';
import 'create-conical-gradient';

export const drawConicalGradient = (
  context: CanvasRenderingContext2D,
  width = 300,
  height = 300,
  values: ColorsArray = [
    { step: 0, color: '#F00' },
    { step: 0.2, color: '#00F' },
    { step: 0.4, color: '#0FF' },
    { step: 0.6, color: '#F0F' },
    { step: 0.8, color: '#FF0' },
    { step: 1, color: '#F00' },
  ],
  xOffset = 0,
  yOffset = 0,
  shine = 0
): void => {
  const shineScalar = shine / 8.2;
  const xOffsetScalar = xOffset * 5;
  const yOffsetScalar = yOffset * 5;
  const gradient = context.createConicalGradient(
    width / 2 + xOffsetScalar,
    height / 2 + yOffsetScalar,
    -Math.PI + shineScalar,
    Math.PI + shineScalar
  );
  values.forEach((e) => {
    gradient?.addColorStop(e.step, e.color);
  });
  context.fillStyle = gradient.pattern;
  context.fillRect(0, 0, width, height);
};

export const drawGradientCircle = (
  context: CanvasRenderingContext2D,
  values: ColorsArray = [
    { step: 0, color: '#F00' },
    { step: 0.2, color: '#00F' },
    { step: 0.4, color: '#0FF' },
    { step: 0.6, color: '#F0F' },
    { step: 0.8, color: '#FF0' },
    { step: 1, color: '#F00' },
  ],
  x = 150,
  y = 150,
  r = 150,
  scaleX = 300,
  scaleY = 300,
  shine = 0,
  lineWidth = 5
): void => {
  context?.beginPath();
  const shineScalar = shine / 4;
  const xScale = (scaleX + x * 25) / 2;
  const yScale = (scaleY + y * 25) / 2;
  const rValue = scaleX + r * 7 > 0 ? scaleX + r * 7 : 1;
  const rScale = rValue / 2;
  const gradient = context.createConicalGradient(
    xScale,
    yScale,
    -Math.PI + shineScalar,
    Math.PI + shineScalar
  );
  values.forEach((e) => {
    gradient?.addColorStop(e.step, e.color);
  });
  context.strokeStyle = gradient.pattern;
  /*
  context.shadowBlur = 6;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowColor   = 'rgba(255, 0, 0, 0.9)';
  context.fillStyle     = gradient.pattern; //'#F2f';
  */
  context.lineWidth = lineWidth;
  context?.arc(xScale, yScale, rScale, 0, 2 * Math.PI);
  context?.stroke();
};

export const drawNumbers = (
  context: CanvasRenderingContext2D,
  radius = 0.85,
  scalarX = 227,
  scalarY = 227,
  fontSize = 15,
  bold = false,
  italic = false,
  width = 227,
  height = 227,
  color = '#05F',
  timeFormat: string[]
): void => {
  const scalarx = width / 2 + scalarX * 5;
  const scalary = height / 2 + scalarY * 5;
  const radiusCenter = radius / 100;
  const font = fontSize + 10;
  const translation = (radiusCenter * width) / 2;
  context.save();
  context.translate(scalarx, scalary);
  context.font = `${bold ? '900' : ''} ${
    italic ? 'Italic' : ''
  } ${font}px arial`;
  context.textBaseline = 'middle';
  context.fillStyle = color;
  context.textAlign = 'center';
  const ang = [
    0.5235987755982988, 1.0471975511965976, 1.5707963267948966,
    2.0943951023931953, 2.6179938779914944, 3.141592653589793,
    3.665191429188092, 4.1887902047863905, 4.71238898038469, 5.235987755982989,
    5.759586531581287, 6.283185307179586,
  ];
  for (let num = 1; num < 13; num++) {
    // let ang = (num * Math.PI) / 6;
    context.rotate(ang[num - 1]);
    context.translate(0, -translation);
    context.rotate(-ang[num - 1]);
    context.fillText(timeFormat[num - 1], 0, 0);
    // context.strokeText(roman[num - 1], 0, 0);
    context.rotate(ang[num - 1]);
    context.translate(0, translation);
    context.rotate(-ang[num - 1]);
  }
  context.restore();
};

export const drawSeconds = (
  context: CanvasRenderingContext2D,
  radius: number
): void => {
  let ang;
  const distanceFromCenter = 0.9;
  context.font = `${radius * 0.1} px arial`;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  for (let num = 1; num < 61; num++) {
    if (num % (6 - 1) !== 0) {
      ang = (num * Math.PI) / 30;
      context.rotate(ang);
      context.translate(0, -radius * distanceFromCenter);
      context.rotate(-ang);
      context.fillText('.', 0, 0);
      context.rotate(ang);
      context.translate(0, radius * distanceFromCenter);
      context.rotate(-ang);
    }
  }
};

export const drawGradient = (
  context: CanvasRenderingContext2D,
  width = 300,
  height = 300,
  values: ColorsArray = [
    { step: 0, color: '#0D9' },
    { step: 0.5, color: '#A00' },
    { step: 1, color: '#006' },
  ]
): void => {
  // Create gradient
  const gradient = context?.createRadialGradient(150, 150, 100, 100, 100, 220);
  values.forEach((e) => {
    gradient?.addColorStop(e.step, e.color);
  });
  // Fill with gradient
  // context && (context.fillStyle = gradient);
  context.fillStyle = gradient;
  context?.fillRect(0, 0, width, height);
};

export const drawCircle = (
  context: CanvasRenderingContext2D,
  color = '#92F070',
  x = 150,
  y = 150,
  r = 150
): void => {
  context?.beginPath();
  context.strokeStyle = color;
  context?.arc(x, y, r, 0, 2 * Math.PI);
  context?.stroke();
};
