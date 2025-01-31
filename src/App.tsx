import { useState } from 'react';
import './App.css';

function App() {
  const [markdownText, setMarkdownText] = useState<string>("defaultMarkdown");

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea name = "editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        <div id="preview">
        </div>
      </div>
    </div>
    
  )
}

export default App
