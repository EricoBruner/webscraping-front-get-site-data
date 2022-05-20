import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

interface DATA {
  city: string;
  rideCity: string;
  titleOne: string;
  titleTwo: string;
  textPageOne: string;
  textPageTwo: string;
  textPageThree: string;
  textPageFour: string;
  listPageOne: [string];
  listPageTwo: [string];
  listPageOneFormatted: string;
  listPageTwoFormatted: string;
}


function dataIsNull(data: string | [string] | null | undefined) {
  if(data == null || data === undefined) return "Este dado não retornou da API"
  return data
}

function App() {
  const [URL, setURL] = useState('')
  const [DATA, setDATA] = useState<DATA>({
    city: 'Aguardando chamada!',
    rideCity: '',
    titleOne: '',
    titleTwo: '',
    textPageOne: '',
    textPageTwo: '',
    textPageThree: '',
    textPageFour: '',
    listPageOne: [''],
    listPageTwo: [''],
    listPageOneFormatted: '',
    listPageTwoFormatted: '',
  })

  function handleGetData() {
    axios.post("http://localhost:3333", {
      URL
    }
    ).then((response) => {
      console.log(response.data)
      setDATA(response.data)
      setURL('') 
    }); 
  }

  return (
    <div className="App">
      <header className="App-header">    
        <p className='App-content'>
          <img src={logo} className="App-logo" alt="logo" />
          <input 
            className="App-input"
            type="text" 
            value={URL}
            onChange={e => setURL(e.target.value)}
          />
          <button
            className="App-button"
            type="button" 
            onClick={handleGetData}
          >
            visualizar
          </button>
        </p>
        <div>

        </div>
        <p>
         
        </p>
      </header>
      <div className="dashboard">
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.city}><button>COPY</button></CopyToClipboard>
          <span>{dataIsNull(DATA.city)}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.rideCity}><button>COPY</button></CopyToClipboard>
          <span>{dataIsNull(DATA.rideCity)}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.titleOne}><button>COPY</button></CopyToClipboard>
          <span>{dataIsNull(DATA.titleOne)}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.textPageOne}><button>COPY</button></CopyToClipboard>
          <span>{dataIsNull(DATA.textPageOne)}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.textPageTwo}><button>COPY</button></CopyToClipboard>
          <span>{dataIsNull(DATA.textPageTwo)}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.textPageThree}><button>COPY</button></CopyToClipboard>
          <span>{dataIsNull(DATA.textPageThree)}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.textPageFour}><button>COPY</button></CopyToClipboard>
          <span>{dataIsNull(DATA.textPageFour)}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.titleTwo}><button>COPY</button></CopyToClipboard>
          <span>{dataIsNull(DATA.titleTwo)}</span> 
        </div>
          <div className='dashboard-item-list'>
          <div>
            <CopyToClipboard 
              text={DATA.listPageOneFormatted}
              options={{format: 'text/html'}}
            >
              <button>COPY</button>
            </CopyToClipboard>
            <ul>
              {DATA.listPageOne.map((item) => {
                return <li key={item}>{item}</li>
              })}  
            </ul>    
          </div>
          <div>
            <CopyToClipboard 
              text={DATA.listPageTwoFormatted}
              options={{format: 'text/html'}}
            >
              <button>COPY</button>
            </CopyToClipboard>
            <ul>
              {DATA.listPageTwo.map((item) => {
                return <li key={item}>{item}</li>
              })}  
            </ul>
          </div>
        </div>
        <div className='dashboard-item-list'>
        </div>
      </div>
    </div>
  )
}

export default App
