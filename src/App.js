import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import { SryledComponents } from "./components/StyledComponents";

import "./styles.css";
import { Emotion } from "./components/Emotion";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <SryledComponents />
      <Emotion />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
