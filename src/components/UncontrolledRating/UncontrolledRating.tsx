import React, {useState} from 'react';

type RatingPropsType = {
    /*value: number;*/
}
type StarPropsType = {
    selected: boolean;

}

function UncontrolledStar() {
    let [value, setValue] = useState(0)
    return (
        <div>

            <Star selected={value > 0}/> <button onClick={()=>{setValue(1)}}>.</button>
            <Star selected={value > 1}/> <button onClick={()=>{setValue(2)}}>.</button>
            <Star selected={value > 2}/> <button onClick={()=>{setValue(3)}}>.</button>
            <Star selected={value > 3}/> <button onClick={()=>{setValue(4)}}>.</button>
            <Star selected={value > 4}/> <button onClick={()=>{setValue(5)}}>.</button>
        </div>
    )
}
/*if (props.value === 2) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>
    )
}
if (props.value === 3) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
if (props.value === 4) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    )
}
if (props.value === 5) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    )
}
return (
    <div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
)
}*/



function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else return <span>star </span>
}


export default UncontrolledStar;