import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import { Editor } from "@toast-ui/react-editor";

export const BaseEditor = ({
  height = "500px",
  value,
  editorRef,
  onChange,
}) => {
  return (
    <Editor
      initialValue={value}
      previewStyle="holizontal"
      height={height}
      initialEditType="markdown"
      useCommandShortcut={true}
      autofocus={false}
      toolbarItems={[
        ["bold", "italic", "strike"],
        ["code", "codeblock"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
      ]}
      viewer={true}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      ref={editorRef}
      onChange={onChange}
    />
  );
};
