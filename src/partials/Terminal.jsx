import React from 'react';
import { ReactTerminal, TerminalContextProvider } from "react-terminal";

function TerminalComponent() {
  // Define commands here
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`
  };

  return (
    <div className="h-1/2">
        <TerminalContextProvider>
            <ReactTerminal
            commands={commands}
            theme="material-dark"
            />
        </TerminalContextProvider>
    </div>
  );
}

export default TerminalComponent;
