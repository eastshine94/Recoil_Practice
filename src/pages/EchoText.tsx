import React, { ChangeEvent } from 'react';
import {
  atom,
  RecoilState,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';

const textState: RecoilState<string> = atom({
  key: 'textState',
  default: ''
});
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  }
});

export default function EchoText() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <div>Character Count: {count}</div>;
}
