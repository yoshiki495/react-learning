import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

function TerminalComponent() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Terminal();
    terminal.open(terminalRef.current);
    // ターミナルの初期化処理などを行う
    return () => {
      terminal.dispose();
    };
  }, []);

  return (
    <div ref={terminalRef} />
  );
}

export default TerminalComponent;
