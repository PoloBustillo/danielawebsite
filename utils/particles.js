import { forces } from "react-particle-image";

// Round number up to nearest step for better canvas performance
const round = (n, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 1;
const particleOptions = {
  filter: ({ x, y, image }) => {
    return true;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);

    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 1;
  },
  mass: () => 20,
  friction: () => 0.15,
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};
const touchForce = (x, y) => {
  return forces.disturbance(x, y, 20);
};

export { touchForce, motionForce, particleOptions };
