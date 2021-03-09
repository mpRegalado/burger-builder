import React from 'react';

import BuildControl from './BuildControl/BuildControl'
import {
  EuiPanel,
  EuiButton,
  EuiFlexItem,
  EuiFlexGroup,
} from '@elastic/eui'

const buildControls = props => {
  const controllers = Object.keys(props.ingredients).map(ingr => (
    <EuiFlexItem key={ingr}>
      <BuildControl 
        ingredient={ingr.charAt(0).toUpperCase() + ingr.slice(1)}  
        add={() => props.add(ingr)}
        substract={() => props.substract(ingr)}
        ammount={props.ingredients[ingr].ammount}
      />
    </EuiFlexItem>
  ))
  return (
    <EuiPanel color="accent">
      <EuiFlexGroup direction="column" gutterSize="m">
        {controllers}
        <EuiFlexItem><EuiButton color="secondary" fill onClick={props.purchase} isDisabled={props.disabled}>OrderNow</EuiButton></EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  )
};

export default buildControls;
