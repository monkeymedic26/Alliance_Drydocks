import React from 'react';
import styled from 'styled-components';

const CardsPos =  styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const Card = styled.h3`
  color: #ff9c00;
  text-align: center;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border 5px;
  border-style: solid;
  border-color: #ff9c00;

  &:hover {
    cursor: pointer;
    color: white;
    border-color: white;
  }
`;

const TopLine = styled.div`
  background-color: #ff9c00;
  height: 100px;
  width: 25px;
  padding: 10px;
  margin-top: 10px;
  margin-left: 95px;
  margin-right: 10px;
`;

const BottomLine = styled.div`
  background-color: #ff9c00;
  height: 100%;
  width: 25px;
  padding: 10px;
  margin-left: 95px;
  margin-right: 10px;
`;

const Sidebar = (props) => {
  return(
    <CardsPos>
      <TopLine />
      <Card onClick={props.handleHomeClick}>Home</Card>
      <Card onClick={props.handleShipClick}>Game Ships</Card>
      <Card onClick={props.handleWeaponClick}>Weapons</Card>
      <Card onClick={props.handleYourShipClick}>Your Ship 1</Card>
      <Card>Your Ship 2</Card>
      <Card>Your Ship 3</Card>
      <BottomLine />
    </CardsPos>
  )
}

export default Sidebar;