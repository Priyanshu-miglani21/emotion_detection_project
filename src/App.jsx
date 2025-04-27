import React from 'react';
import EmotionDetector from './components/EmotionDetector';
import './App.css';

function App() {
  return (
    <div className="App bg-black">
        <h1 className = "font-bold text-white font-mono text-lg select-none bg-purple-900 p-1 text-center">Emotion Detection Project😊😠☹️</h1>
      <EmotionDetector />
    </div>
  );
}

export default App;