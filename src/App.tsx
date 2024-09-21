import { useState } from "react";
import { useTypedSelector } from "./hooks/markdownSelector";
import { useActions } from "./hooks/useAction";
import "./App.css";
function App() {
  const [markdown, setMarkdown] = useState("");
  const { renderedMarkdown } = useTypedSelector((state) => state);
  const { renderMarkdown } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleRenderMarkdown = () => {
    renderMarkdown(markdown);
  };

  return (
    <>
      <h1 className="title">MarkDown Previewer</h1>
      <div className="container">
        <section>
          <textarea
            className="textarea"
            onChange={handleChange}
            value={markdown}
            id="editor"
            cols={60}
            rows={30}
            placeholder="Write you markdown code here"
          />
          <button className="render-btn" onClick={handleRenderMarkdown}>
            Render Markdown
          </button>
        </section>
        <div
          className="rended-block"
          id="preview"
          dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
        />
      </div>
    </>
  );
}

export default App;
