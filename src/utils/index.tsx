
let flag = false;
export const turnLongLat = (
  number: number,
) => {
  flag = !flag;
  const timeLoopX = 360 * 100000;
  const timeLoopY = 360 * 80000;
  let xArr, yArr, x, y, index;
  switch (number) {
    case 1:
      xArr = [4, 2];
      yArr = [0, 2];
      index = Math.floor(Math.random() * 2);
      x = xArr[index] * 90 + (flag ? timeLoopX : 0);
      y = yArr[index] * 90 + (flag ? timeLoopY : 0);
      return { xRand: x, yRand: y };

    case 2:
      xArr = [4, 2];
      yArr = [2, 0];
      index = Math.floor(Math.random() * 2);
      x = xArr[index] * 90 + (flag ? timeLoopX : 0);
      y = yArr[index] * 90 + (flag ? timeLoopY : 0);
      return { xRand: x, yRand: y };

    case 3:
      xArr = [4, 2];
      yArr = [3, 1];
      index = Math.floor(Math.random() * 2);
      x = xArr[index] * 90 + (flag ? timeLoopX : 0);
      y = yArr[index] * 90 + (flag ? timeLoopY : 0);
      return { xRand: x, yRand: y };

    case 4:
      xArr = [4, 2];
      yArr = [1, 3];
      index = Math.floor(Math.random() * 2);
      x = xArr[index] * 90 + (flag ? timeLoopX : 0);
      y = yArr[index] * 90 + (flag ? timeLoopY : 0);
      return { xRand: x, yRand: y };

    case 5:
      x = 3 * 90 + (flag ? timeLoopX : 0);
      y = Math.floor(Math.random() * 4) * 90 + (flag ? timeLoopY : 0);
      return { xRand: x, yRand: y };

    case 6:
      x = 1 * 90 + (flag ? timeLoopX : 0);
      y = Math.floor(Math.random() * 4) * 90 + (flag ? timeLoopY : 0);
      return { xRand: x, yRand: y };

    default:
      break;
  }
};
