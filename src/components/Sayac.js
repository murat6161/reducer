import React, {useReducer} from 'react'

const baslangic = {
    ilkSayac: 0,
    ikinciSayac: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'artir':
            return { ...state,
                ilkSayac: state.ilkSayac + action.value
            }
        case 'artir2':
            return { ...state,
                ikinciSayac: state.ikinciSayac + action.value
            }
        
        case 'azalt':
           return { ...state,
                    ilkSayac: state.ilkSayac - action.value
            }
        case 'azalt2':
            return { ...state,
                    ikinciSayac: state.ikinciSayac - action.value
            }
        case 'reset':
            return baslangic
        default:
            return state        
    }
}

function Sayac() {
    const [sayac, dispatch] = useReducer(reducer, baslangic)
    return (
        <div>
            <div>Sayac - 1: {sayac.ilkSayac}</div>
            <br/>
            <button onClick={()=>dispatch({type:'artir', value:1})}>1 Artir</button>
            <button onClick={()=>dispatch({type:'artir', value:5})}>5 Artir</button>
            <button onClick={()=>dispatch({type:'azalt', value:1})}>1 Azalt</button>
            <button onClick={()=>dispatch({type:'azalt', value:5})}>5 Azalt</button>
            <br/>
            <br/>

            <div>Sayac - 2: {sayac.ikinciSayac}</div>
            <button onClick={()=>dispatch({type:'artir2', value:1})}>1 Artir</button>
            <button onClick={()=>dispatch({type:'artir2', value:5})}>5 Artir</button>
           
            <button onClick={()=>dispatch({type:'azalt2', value:1})}>1 Azalt</button>
            <button onClick={()=>dispatch({type:'azalt2', value:5})}>5 Azalt</button>

            <br/>
            <br/>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            
        </div>
    )
}

export default  Sayac
