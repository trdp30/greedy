import React, { Component } from 'react';
import {Button, Text, Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block>
              <Text>Log In</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}