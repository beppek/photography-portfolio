import { FormEvent, useReducer } from 'react';
import styled from 'styled-components';
import { Input } from '../../atoms/input/input';
import { Button } from '../../atoms/button/button';

export type NewsLetterFormSubmitValue = {
  name: string;
  email: string;
};

type Props = {
  onSubmit: (data: NewsLetterFormSubmitValue) => void;
};

export enum Actions {
  setName = 'setName',
  setEmail = 'setEmail',
}

type Payload = string;

type Action =
  | { type: Actions.setName; payload: Payload }
  | { type: Actions.setEmail; payload: Payload };

type ActionFunction = (
  state: NewsLetterFormSubmitValue,
  payload: Payload,
) => NewsLetterFormSubmitValue;

const initialState = {
  name: '',
  email: '',
  message: '',
};

const actions: Record<Actions, ActionFunction> = {
  setName: (state: NewsLetterFormSubmitValue, payload: Payload) => ({
    ...state,
    name: payload,
  }),
  setEmail: (state: NewsLetterFormSubmitValue, payload: Payload) => ({
    ...state,
    email: payload,
  }),
};

function reducer(
  state: NewsLetterFormSubmitValue,
  action: Action,
): NewsLetterFormSubmitValue {
  return actions[action.type](state, action.payload) || state;
}

const Form = styled.form`
  & * {
    display: block;
  }
`;

export function NewsletterForm({ onSubmit }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={state.name}
        onChange={(e) =>
          dispatch({ type: Actions.setName, payload: e.target.value })
        }
        required
        type="text"
        name="Name"
      />
      <Input
        value={state.email}
        onChange={(e) =>
          dispatch({ type: Actions.setEmail, payload: e.target.value })
        }
        required
        type="email"
        name="Email"
      />
      <Button type="submit">Sign up</Button>
    </Form>
  );
}
