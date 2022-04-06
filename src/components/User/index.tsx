import React from 'react';

import { Container, Photo, Name, Email } from './styles';

export function User() {
  return (
    <Container>
      <Photo
        source={{ uri: "https://github.com/LeandroRMachado.png" }}
      />

      <Name>
        Leandro
      </Name>

      <Email>
        leandromachado@outlook.com
      </Email>
    </Container>
  );
}