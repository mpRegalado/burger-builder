import React from 'react';

import { 
  EuiFlexGroup,
  EuiButtonIcon,
  EuiText,
  EuiFlexItem
 } from '@elastic/eui'

const buildControl = props => (
  <EuiFlexGroup>
    <EuiFlexItem><EuiText>{props.ingredient}</EuiText></EuiFlexItem>
    <EuiFlexItem><EuiButtonIcon 
      color="warning"
      display="fill" 
      size="m" 
      iconType="minus" 
      onClick={props.substract}
      isDisabled={props.ammount <= 0}
      aria-label="Minus" /></EuiFlexItem>
    <EuiFlexItem><EuiText>{props.ammount}</EuiText></EuiFlexItem>
    <EuiFlexItem><EuiButtonIcon 
      color="primary"
      display="fill" 
      size="m" 
      iconType="plus" 
      onClick={props.add}
      aria-label="Plus" /></EuiFlexItem>
  </EuiFlexGroup>
);

export default buildControl;
