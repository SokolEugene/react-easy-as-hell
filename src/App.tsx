import React from 'react';
import './App.css';
import OnOff from './components/OnOf/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledStar from './components/UncontrolledRating/UncontrolledRating'

// function hello() {
//     alert('hello it-camasutra')
// }
//
// hello();

// function declaration
function App() {
    return (
        <div className={"App"}>
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion title={'menu 1'}/>
            <UncontrolledStar/>
            {/* <Apptitle title={"This is APP component"}/>*/}
            {/*<Accordion title={'menu 1'} collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Apptitle title={"My friends"}/>
            <Accordion title={'menu 2'} collapsed={false}/>*/}
            {/* <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type ApptitlePropsType = {
    title: string;
}

function Apptitle(props: ApptitlePropsType) {
    return (
        <div>{props.title} </div>
    )
}


export default App;