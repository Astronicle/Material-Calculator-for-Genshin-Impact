import './components.css'
import React from 'react'
import talent_levels from './talent_levels'
import Result from './Result'

function Calculator() {
    
    const [talent1, setTalent1] = React.useState(talent_levels)
    const talent1_buttons = talent1.map(talent1 => (<button style={{backgroundColor: talent1.state?'#DEB76C':'white', color: talent1.state?'white':'black'}} key={talent1.id} onClick={()=> toggleTalent1(talent1.id)}>{talent1.id}</button>))
    const [talent2, setTalent2] = React.useState(talent_levels)
    const talent2_buttons = talent2.map(talent2 => (<button style={{backgroundColor: talent2.state?'#DEB76C':'white', color: talent2.state?'white':'black'}} key={talent2.id} onClick={()=> toggleTalent2(talent2.id)}>{talent2.id}</button>))
    const [talent3, setTalent3] = React.useState(talent_levels)
    const talent3_buttons = talent3.map(talent3 => (<button style={{backgroundColor: talent3.state?'#DEB76C':'white', color: talent3.state?'white':'black'}} key={talent3.id} onClick={()=> toggleTalent3(talent3.id)}>{talent3.id}</button>))
    
    function toggleTalent1(id){
        setTalent1(prevTalent1 => {
            return prevTalent1.map(talent1 => {
                return talent1.id === id ? {...talent1, state: !talent1.state} : {...talent1, state: false}
            })
        })
    }

    function toggleTalent2(id){
        setTalent2(prevTalent2 => {
            return prevTalent2.map(talent2 => {
                return talent2.id === id ? {...talent2, state: !talent2.state} : {...talent2, state: false}
            })
        })
    }

    function toggleTalent3(id){
        setTalent3(prevTalent3 => {
            return prevTalent3.map(talent3 => {
                return talent3.id === id ? {...talent3, state: !talent3.state} : {...talent3, state: false}
            })
        })
    }

    return (
        <>
            <div className="talent-container">
                <div className='talent'>
                    <p>Normal Attack</p>
                    {talent1_buttons}
               </div>
                <div className='talent'>
                    <p>Elemental Skill</p>
                    {talent2_buttons}
                    </div>
                <div className='talent'>
                    <p>Elemental Burst</p>
                    {talent3_buttons}
                    </div>
            </div>
            <Result talent1={talent1} talent2={talent2} talent3={talent3}/>
        </>
    )
}
export default Calculator