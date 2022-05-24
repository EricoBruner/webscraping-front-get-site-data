import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify';
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
  error?: string;
}

function App() {
  const [URL, setURL] = useState('')
  const [DATA, setDATA] = useState<DATA>({
    rideCity: 'Aguardando chamada!',
    city: '',
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
    error: '',
  })

  function notify() {
    toast.error(DATA.error, {toastId: DATA.error});
  }

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
          <CopyToClipboard text={DATA.rideCity}><button>COPY</button></CopyToClipboard>
          {(DATA.error) ? (
            <>
              {notify()}
            </>
          ) : (
            <span>{DATA.rideCity}</span>
          )} 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.city}><button>COPY</button></CopyToClipboard>
          <span>{DATA.city}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.titleOne}><button>COPY</button></CopyToClipboard>
          <span>{DATA.titleOne}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.textPageOne}><button>COPY</button></CopyToClipboard>
          <span>{DATA.textPageOne}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.textPageTwo}><button>COPY</button></CopyToClipboard>
          <span>{DATA.textPageTwo}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.textPageThree}><button>COPY</button></CopyToClipboard>
          <span>{DATA.textPageThree}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.textPageFour}><button>COPY</button></CopyToClipboard>
          <span>{DATA.textPageFour}</span> 
        </div>
        <div className='dashboard-item'>
          <CopyToClipboard text={DATA.titleTwo}><button>COPY</button></CopyToClipboard>
          <span>{DATA.titleTwo}</span> 
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
              {DATA.error ? (
                <li></li>
              ) : (
                DATA.listPageOne.map((item) => {
                  return <li key={item}><span>{item}</span></li>
                })
              )}  
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
              {DATA.error ? (
                <li></li>
              ) : (
                DATA.listPageTwo.map((item) => {
                  return <li key={item}><span>{item}</span></li>
                })
              )}
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
