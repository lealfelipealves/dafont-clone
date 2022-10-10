import { useState } from "react"

export const weightsList = [
  {
    name: 'Thin',
    weight: '100'
  },
  {
    name: 'Light',
    weight: '300'
  },
  {
    name: 'Regular',
    weight: '400'
  },
  {
    name: 'Medium',
    weight: '500'
  },
  {
    name: 'Bold',
    weight: '700'
  },
  {
    name: 'Black',
    weight: '900'
  },
]

function App() {
  const [text, setText] = useState('Digite seu texto aqui')
  const [fontSizeValue, setFontSizeValue] = useState(14)
  
  return (
    <div className="App">
      
      <div className="controls">
        <input 
          className="box-data_input"
          type="text" 
          placeholder="Digite seu texto aqui" 
          onChange={(e) => setText(e.target.value)}
        />
        <button 
          className="btn" 
          type="button" 
          onClick={() => setFontSizeValue(fontSizeValue - 10)}
        >
          -
        </button>
        <button 
          className="btn" 
          type="button" 
          onClick={() => setFontSizeValue(fontSizeValue + 10)}
        >
          +
        </button>
      </div>
      <hr/>
      {weightsList.map((item) => (
        <>
          <div className="wrapper">
            <span>{item.name} {item.weight}</span>
            <p style={{ fontSize: fontSizeValue }} className={`fw-${item.weight}`}>{text}</p>
          </div>
          <div className="wrapper">
            <span>{item.name} Italic {item.weight}</span>
            <p style={{ fontSize: fontSizeValue }} className={`fw-${item.weight} italic`}>{text}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default App
