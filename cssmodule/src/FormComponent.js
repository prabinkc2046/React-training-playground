import React from 'react';
import {Form, Field, Label, Input, Button} from './StyledForm.js';

export default function FormComponent() {
  return (
    <Form>
      
      <Field>
        <Label>name</Label>
        <Input type='text' name='name'></Input>
      </Field>

      <Field>
        <Label>Email</Label>
        <Input type='email'></Input>
      </Field>

      <Field>
        <Label>Password</Label>
        <Input type='password'></Input>
      </Field>

      <Button>
        Register
      </Button>
    </Form>
  )
}
