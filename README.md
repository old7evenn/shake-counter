# Shake Counter

This project is a **React application** that uses the **Sensors API** to detect device shakes. Each detected shake increments a counter, with a visual animation to indicate a successful shake.

## Features

- **Shake Detection**: Uses accelerometer/gyroscope data to detect sudden movements (shakes) exceeding 15 m/s².
- **Shake Counter**: Displays the total number of shakes.
- **Reset Counter**: Button to reset the shake count to zero.
- **Visual Feedback**: Animation to visually indicate each shake event.
- **Error Handling**: Displays a message if device sensors are unavailable.

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
