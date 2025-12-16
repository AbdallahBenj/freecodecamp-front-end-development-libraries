import './otp-generator.css';
import { useState } from 'react';

const OTPGenerator = () => {
  const [isGenerated, setGenerated] = useState(false);
  const [running, setRunning] = useState(false);
  const [code, setCode] = useState([]);
  const [i, setI] = useState(0);

  const generateCode = () => {
    if (running) return;

    setGenerated(true);
    setRunning(true);

    // Generate 6-digit OTP
    const newCode = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10),
    );

    setCode(newCode);
    startTimer();
  };

  const startTimer = () => {
    let seconds = 5;
    setI(seconds);

    const interval = setInterval(() => {
      seconds--;
      setI(seconds);

      if (seconds === 0) {
        clearInterval(interval);
        // setGenerated(false);
        setRunning(false);
        // setCode([]);
      }
    }, 1000);
  };

  return (
    <div className="otp-generator-container">
      <h1 id="otp-title">OTP Generator</h1>

      {/* Description And Generated Code */}
      {!isGenerated ? (
        <h2 id="otp-display">Click 'Generate OTP' to get a code</h2>
      ) : (
        <h2 id="otp-display">{code.join('')}</h2>
      )}

      {/* Countdown */}
      {isGenerated && (
        <p id="otp-timer" aria-live="polite">
          {i === 0
            ? 'OTP expired. Click the button to generate a new OTP.'
            : `Expires in: ${i} seconds`}
        </p>
      )}

      <button
        id="generate-otp-button"
        type="button"
        disabled={running}
        onClick={generateCode}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;
