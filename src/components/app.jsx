import React, { useState, useCallback, useEffect } from "react"
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
    align-self: center;
  `;
  
  const [ source, setSource ] = useState(false);
  const [ format, setFormat ] = useState(false);
  const [ result, setResult ] = useState(false);

  const handleDrop = e => {
    e.preventDefault()

    const reader = new FileReader();
    reader.onload = e => {
      if (!source) {
        console.log(e.target.result);
        setSource(e.target.result);
      } else if (confirm('overwrite current source?')) {
        setSource(e.target.result);
      }
    };

    if (e.dataTransfer.files) {
      for (const item of e.dataTransfer.files) {
        reader.readAsArrayBuffer(item);
      }
    }
  }

  const handleSetFormat = e => setFormat(e.target.value);

  const getSource = useCallback(() => {
    return `url(${source})`
  }, [source]);

  const getResult = useCallback(() => {

  }, [source, format]);

  const getFormat = useCallback(() => {

  }, [format]);

  const getPreview = () => ({});

  return (
    <div className={container}>
      <div>
        <div 
          className={box}
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}>
          {source ? (
            <div
              className={sourceContainer}
              style={getPreview()}
            />
          ) : (
            <h1 className={boxPlaceholder}>X</h1>
          )}
        </div>
      </div>
      <div className={convertButton}>
        to
        <select onChange={handleSetFormat}>
          <option value="data-url">data url</option>
          <option value="jsx">JSX component</option>
        </select>
      </div>
      <div>
        <div className={box}>
          {result ? (
            <div className={resultContainer}>
              {getResult()}
            </div>
          ) : (
            <h1 className={boxPlaceholder}>Y</h1>
          )}
        </div>
      </div>
    </div>
  )
}