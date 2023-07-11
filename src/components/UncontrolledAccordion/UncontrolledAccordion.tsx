import React, {useState} from 'react';

type AccordionPropsType = {
    title: string;
    /*collapsed: boolean;*/
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collaps, setCollaps] = useState(false);
         return (
            <div>
                <span><AccordionTitle title={props.title}/></span>
                <span>
                    <button onClick={() => {
                        setCollaps(!collaps)
                    }}>TOGGLE</button>
                </span>
                {collaps && <AccordionBody/>}
            </div>
        )
}
/*function Accordion2(props: AccordionPropsType) {
    if (props.collapsed/!* === true*!/) {
        return (

            <div>
                <AccordionTitle title={props.title}/>

            </div>
        )
    } else
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
}*/

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    )
};

export default UncontrolledAccordion;