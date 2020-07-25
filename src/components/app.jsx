import React, { useState, useCallback } from "react"
import { css } from 'emotion';

export default function Main(props) {
  
  const container = css`
    display: flex;
    justify-content: space-between;
  `;
  
  const box = css`
    display: flex;
    align-items: center;
    height: 300px;
    width: 300px;
    padding: 10px;
    border: 1px solid black;
  `;

  const boxPlaceholder = css`
    display: flex;
    flex: 1;
    justify-content: center;
  `;
  
  const sourceContainer = css`
    flex: 1;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  `;

  const resultContainer = css`
    height: 100%;
    overflow: auto;
  `;

  const convertButton = css`
    display: block;
  `;
  
  const [ source, setSource ] = useState(false);
  const handleDragOver = e => e.preventDefault();

  const handleDrop = e => {
    e.preventDefault()

    const reader = new FileReader();
    reader.onload = e => {
      if (!source) {
        setSource(e.target.result);
      } else if (confirm('overwrite current source?')) {
        setSource(e.target.result);
      }
    };

    if (e.dataTransfer.files) {
      for (const item of e.dataTransfer.files) {
        reader.readAsDataURL(item);
      }
    }
  }

  const backgroundImage = `url(${source})`;

  const convertXtoY = file => {}

  return (
    <div className={container}>
      <div>
        <div 
          className={box}
          onDragOver={handleDragOver}
          onDrop={handleDrop}>
          {source ? (
            <div
              className={sourceContainer}
              style={{ backgroundImage }}
            />
          ) : (
            <h1 className={boxPlaceholder}>X</h1>
          )}
        </div>
        <select name="returnType">
          <option value="data-url">data url</option>
          <option value="jsx">JSX component</option>
        </select>
      </div>
      <button
        className={convertButton}
        onClick={convertXtoY}>
        to
      </button>
      <div>
        <div className={box}>
          {source ? (
            <div className={resultContainer}>
              {source}
            </div>
          ) : (
            <h1 className={boxPlaceholder}>Y</h1>
          )}
        </div>
      </div>
    </div>
  )
}