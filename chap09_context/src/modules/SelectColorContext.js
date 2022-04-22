// SelectColorContext.js

import { createContext, useState } from 'react'

const SelectColorContext = createContext({
  state: {
    color: '',
    bgColor: '',
  },
  action: {
    setColor: () => {},
    setBgColor: () => {}
  }
});

// 제공자
function SelectColorContextProvider(props) {
  const [color, setColor] = useState('orange');
  const [bgColor, setBgColor] = useState('gray');

  const data = {
    state: { color: color, bgColor },
    action: {setColor, setBgColor}
  }

  return (
    <SelectColorContext.Provider value={data}>
      {props.children}
    </SelectColorContext.Provider>
  )
}
// 수신자
const SelectColorContextConsumer = SelectColorContext.Consumer;

export { SelectColorContextProvider, SelectColorContextConsumer }