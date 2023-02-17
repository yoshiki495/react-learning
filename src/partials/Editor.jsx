import React from "react";

import Editor from "@monaco-editor/react";

function EditorComponent() {
  return (
    <>
      <Editor
          height="calc(100% - 4rem)"
          defaultLanguage="javascript"
          defaultValue="// Some code..."
          theme="vs-dark"
        />
    </>
  );
}

export default EditorComponent;
