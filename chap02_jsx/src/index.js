import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 프로젝트에 관련된 설정을 정의...

ReactDOM.render(
  <React.StrictMode>
    {/* View를 모아서 정리한 파일 */}
    <App />
    
    {/* <h1>Hello World</h1> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals(console.log);
reportWebVitals();
