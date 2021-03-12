import logo from './logo.svg';
import './SpeechRecog.css';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

<img src={logo} className="S-logo" alt="logo" />

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone