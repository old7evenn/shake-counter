# Shake Counter

This project is a **React application** that uses the **Sensors API** to detect device shakes. Each detected shake increments a counter, with a visual animation to indicate a successful shake.

## Features

**Shake Handling**:
  - The `handleShake` function is defined using `useCallback` to ensure it maintains stable references across renders. This function receives sensor data (x, y, z) from the accelerometer.
  - It calculates the total acceleration using the formula:
     \[
     text{totalAcceleration} = sqrt{x^2 + y^2 + z^2}
     \]
  - If the `totalAcceleration` exceeds the predefined threshold of 15 m/s² and a shake is not currently being processed (indicated by the `shaking` state), the shake count is incremented by 1.

**Debouncing Shake Events**:
  - To avoid multiple increments for a single shake, the `shaking` state is set to `true` when a shake is detected.
  - A timeout of 300 milliseconds (defined by `SHAKE_RESET_TIME`) is set to reset the `shaking` state back to `false`. This effectively debounces the shake detection.

## Live Demo

You can view the live version of the app [here](<https://shake-counter-seven.vercel.app/>).

## Getting Started

### Clone the repository

```bash
git clone https://github.com/old7evenn/shake-counter.git
cd shake-counter
```

**Install dependencies**

```bash
 npm install
```

**Run the application**

```bash
 npm run dev
```
