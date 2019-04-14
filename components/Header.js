import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'react-native';
export default class Header extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Abdul Moiz</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
