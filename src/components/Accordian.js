import React, { useState } from 'react'

const Accordian = ({openAccordian, onCheckBoxClick, onOpenAccordian, index, checked}) => {
  return (
    <div>
        <div onClick={() => onOpenAccordian(index)} style={{border: '1px solid black', textAlign: 'left', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex'}}>
                <input type='checkbox' checked={checked[index]} onClick={(e) => onCheckBoxClick(e, index)}  />
                <p>Accordian 1</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    openAccordian[index] && <div style={{border: '1px solid black', height: '60px'}}>
                        Accordian opened
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Accordian