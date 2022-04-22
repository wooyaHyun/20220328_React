// ColorBoxContext.js

import { createContext } from 'react'

const ColorBoxContext = createContext({
  color: '',
  moduleName: 'Color Box Context'
});
export default ColorBoxContext;   // Provider(발행자), Consumer(수신자)

