import React from 'react';
import styled from 'styled-components';


const MainBox = styled.div`
display: flex;
/* justify-content: space-eve; */
  margin: 0;
  padding: 0;
  max-width: 1600px;
  height: 100vh;
`;

const Boxa = styled.div`
  height: 640px;
  width: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/sideImage.png");
`;

const Boxb = styled.div`
  max-width: 1100px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`

const H1 = styled.h1`
  color: #fff;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p` 

`

const Form = styled.form`
  background-color: #fff;
  width: 460px;
  height: 500px;
  border: 1px solid grey;
  border-radius: 14px;
  display: flex;
  /*align-items: flex-start;
  justify-content: flex-start; */
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 18px;
  margin: auto 0 -4px 60px;
  color: #858484;
`;

const Input = styled.input`
  font-family: 'Open Sans';
  border: 1px solid #e0e2e7;
  font-size: 16px;
  width: 340px;
  height: 40px;
  border-radius: 8px;
  margin: 4px auto;
`;

const Button = styled.button`
  border: 1px solid #e0e2e7;
  margin: auto;
  width: 350px;
  height: 36px;
  background: #4ac94f;
  border-radius: 8px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  border: none;
`;

function Signup() {
  return (
    <MainBox>
      <Boxa>
        <H1> Hello Friend,</H1>
        <P>Please sign up to use this Auctioning Website</P>
      </Boxa>
      <Boxb>
        <Form>
          <Label htmlFor='Name'>First Name</Label>
          <Input
            type='text'
            id='name'
            name='first name'
            placeholder='First Name'
          />
          <Label htmlFor='Name'> Last Name</Label>
          <Input
            type='text'
            id='name'
            name='last name'
            placeholder='Last Name'
          />
          <Label htmlFor='email'> Email </Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Email@yahho.com'
          />
          <Label htmlFor='Name'> Password </Label>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='password'
          />
          <Label htmlFor='Name'> Confirm Password </Label>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='confirm password'
          />

          <Button type='submit'> Create Account </Button>
        </Form>
      </Boxb>
    </MainBox>
  );
}

export default Signup;
