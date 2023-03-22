import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class CanvasComponent extends React.Component {
  componentDidMount() {
      this.updateCanvas();
  }
  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      ctx.fillRect(0,0, 100, 100);
  }
  updateCanvasButton() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0, 200, 200);
}
  render() {
      return (
          <canvas id="canvas" ref="canvas" width={300} height={300}/>
      );
  }
}

//ReactDOM.render(<CanvasComponent/>, document.getElementById('canv'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
