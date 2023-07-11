import React, {useState} from 'react';

/*type PropsType = {
    on: boolean
}*/


function OnOff(/*props: PropsType*/) {
    let [on, setOn] = useState(false); //hook init with value

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px o o 3px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '3px o o 3px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '3px o o 3px',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>on</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
        //делвать два квадратика, с пропсами тру фолс, если тру то квадратик подписанный ON подсвечивается зеленгым и рядом горит лампочка зеленым, если фолс, то подсвечивается офф и лампочка горит красным
    )
}

export default OnOff;