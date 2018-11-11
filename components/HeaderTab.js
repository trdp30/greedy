import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export class HeaderTab extends Component {
  render() {
    return (
      <Container>
        <Header style={{height:80}}>
          <Left>
            <Button transparent style={{top:18}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{top:18}}>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent style={{top:18}}>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}