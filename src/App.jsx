import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';
import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './components/ChildArea';
import { InlineStyle } from './components/inlineStyle';

export function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <BrowserRouter>
      <div className='App'>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='/page1'>Page1</Link>
        <br></br>
        <Link to='/page2'>Page2</Link>
        <br></br>
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <InlineStyle />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div>
      <Router />
    </BrowserRouter>
  );
}
