
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css';


function App() {
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const copy = () => {
    window.navigator.clipboard.writeText(transcript)
  }

  return (
    <>
      <div className="container">

        <h2>Speech Recognition</h2>

        <div className='text'>
          {transcript}
        </div>

        <div className='btn-style'>
          <button className='button' onClick={() => startListening()}>Start</button>
          <button className='button' onClick={SpeechRecognition.stopListening}>Stop</button>
          <button className='button' onClick={resetTranscript}>clear</button>
          <button className='button' onClick={copy()}>Copy</button>
        </div>
      </div>
    </>
  );
}

export default App;
