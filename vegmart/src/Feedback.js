import React from "react";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Feedback() {

    const {
        transcript,
        listening,
        resetTranscript,
        BrowserSupportSpeechRecognition
    } = useSpeechRecognition();

    return (<div>
        <div className="container py-5" style={{ marginTop: "100px",marginBottom: "300px" }}>
            <div className="row">
                <div className="col-md-8">
                    <h1>Feedback Form:</h1>
                    <div className="card">
                        <div className="card-body my-4">
                            <textarea rows={5} cols={50} placeholder={"Comment here!"} value={transcript}></textarea><br></br>
                            <button className="btn btn-primary mx-3" onClick={SpeechRecognition.startListening}>Speak here!</button>
                            <button className="btn btn-primary mx-3" onClick={SpeechRecognition.stopListening}>Stop</button>
                            <button className="btn btn-primary mx-4" onClick={resetTranscript}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Feedback;