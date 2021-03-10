import React, { useContext } from 'react';
import {AuthContext} from '../../../context/auth-context'

import useLink from '../../../hooks/useLink'
import BuildControl from './BuildControl/BuildControl'
import {
  EuiPanel,
  EuiButton,
  EuiFlexItem,
  EuiFlexGroup,
  EuiText
} from '@elastic/eui'

const BuildControls = props => {
  const {linkTo} = useLink();
  const {authenticated} = useContext(AuthContext);

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
  
  const orderProps = linkTo(authenticated ? '/checkout' : {pathname:'/authenticate', search:'?continueToCheckout'})

  return (
    <EuiPanel color="accent">
      <EuiFlexGroup direction="column" gutterSize="m">
        <EuiFlexItem><EuiText textAlign="center"><h1>Price: {props.price.toFixed(2)} </h1></EuiText></EuiFlexItem>
        {controllers}
        <EuiFlexItem>
          <EuiButton color="secondary"
            fill 
            {...orderProps}
            isDisabled={props.disabled}>Order Now</EuiButton></EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  )
};

export default BuildControls;
