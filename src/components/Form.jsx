import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant='outlined'
      />
      <Button type='submit' variant='contained'>
        チャットを送信
      </Button>
    </form>
  );
};

export default Form;
