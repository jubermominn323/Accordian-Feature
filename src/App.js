import { useState } from 'react';
import './App.css';
import Accordian from './components/Accordian';

function App() {
  const [openAccordian, setOpenAccordian] = useState([false, false, false])
  const [checked, setChecked] = useState([false, false, false])
  const [disableButton, setDisableButton] = useState(true)

    const onCheckBoxClick = (e, index) => {
        e.stopPropagation()
        let newArr = [...checked]
        newArr[index] = !checked[index]
        setDisableButton(newArr.includes(false))
        setChecked(newArr)
    }

    const onOpenAccordian = (AccIndex) => {
      let newTempArr = openAccordian.map((item, index) => {
        if(AccIndex === index) {
          return !item
        } else {
          return false
        }
      })

      setOpenAccordian(newTempArr)
    }
  return (
    <div className="App">
    {
      [1,2,3].map((data, index) => {
      return (
        <Accordian key={index} index={index} onCheckBoxClick={onCheckBoxClick} openAccordian={openAccordian} onOpenAccordian={onOpenAccordian} checked={checked} />
      )
    })
    }
      <button disabled={disableButton}>Submit</button>
    </div>
  );
}

export default App;
