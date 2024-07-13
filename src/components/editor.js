import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const Editor = () => {
  const editorRef = useRef(null);
  const codemirrorInstance = useRef(null);

  useEffect(() => {
    if (editorRef.current && !codemirrorInstance.current) {
      codemirrorInstance.current = CodeMirror.fromTextArea(editorRef.current, {
        mode: { name: 'javascript', json: true },
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    }
  }, []);

  return <textarea ref={editorRef} id="realtimeEditor"></textarea>;
};

export default Editor;
