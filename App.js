import React, { useState } from "react";

function App() {
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    const response = await fetch("https://your-backend-api.com/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ script }),
    });
    const data = await response.json();
    setVideoUrl(data.video_url);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Swagat hai hamare Script2Shorts website mein!</h1>
      <textarea
        placeholder="Yahan apna script dalo..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Video ban raha hai..." : "Generate My Short"}
      </button>
      {videoUrl && (
        <div className="video-preview">
          <video controls src={videoUrl} width="300" />
          <a href={videoUrl} download>
            Download in 1080p
          </a>
        </div>
      )}
    </div>
  );
}

export default App;