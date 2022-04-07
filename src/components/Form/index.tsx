import React, { useState } from 'react';

import * as AuthSession from 'expo-auth-session';

import { User, UserProps } from '../User';
import { Button } from '../Button';

import { Container } from './styles';

type AuthResponse = {
  params : {
    access_token: string
  };
  type: string;
}

export function Form() {
  const [userDate, setUserData] = useState<UserProps>({} as UserProps)

  async function handleGoogleSignIn() {
    try {
     const CLIENT_ID = ".."
     const REDIRECT_URI = "https://auth.expo.io/@leandromachado/formapp"
     const RESPONSE_TYPE = "token"
     const SCOPE = encodeURI("profile email")

     const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

     const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse ;
     
     if (type === 'success') {
      const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
      const user = await response.json();
      setUserData(user);
    }

  } catch (error) {
    console.log(error);
  }
}

  return (
    <Container>
      <Button
        icon="google"
        title="Entrar com Google"
        onPress={handleGoogleSignIn}
      />
        <User user={userDate}/> 
    </Container>
  )
}