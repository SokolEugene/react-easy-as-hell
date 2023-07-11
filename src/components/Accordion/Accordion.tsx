import React from 'react';

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

function Accordion(props: AccordionPropsType) {
         return (
            <div>
                <AccordionTitle title={props.title}/>
                {!props.collapsed && <AccordionBody/>}
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

export default Accordion;