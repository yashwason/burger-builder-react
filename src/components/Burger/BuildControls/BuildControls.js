import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    { label: `Salad`, type: `salad` },
    { label: `Bacon`, type: `bacon` },
    { label: `Cheese`, type: `cheese` },
    { label: `Meat`, type: `meat` },
];

const BuildControls = (props) => (
    <div className={ classes.BuildControls }>
        { controls.map((ctrl, i) => <BuildControl type={ ctrl.type } label={ ctrl.label } key={ ctrl.label + '-' + i }/> ) }
    </div>  
);

export default BuildControls;