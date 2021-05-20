import { useHistory, Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/config';

//カスタムフック

import { useInput } from '../hooks/useInput';

const useStyles = makeStyles({
  root: {
    width: '400px',
    height: '450px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Signup = () => {
  const history = useHistory();
  const classes = useStyles();
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      // then: 直前の非同期処理が成功した時に実行されるメソッド
      .then((userCredential) => {
        userCredential.user
          .updateProfile({ displayName: username.value })
          .then(() => {
            console.log('ユーザー作成成功', userCredential);
            history.push('/');
          });
      })
      // catch: 直前の非同期処理が失敗した時に実行されるメソッド
      .catch((error) => {
        console.log('ユーザー作成失敗', error);
      });
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h1>ユーザー登録ページ</h1>
      <TextField
        {...username}
        fullWidth
        type='text'
        label='ユーザー名'
        variant='standard'
      />
      <TextField
        {...email}
        fullWidth
        type='email'
        label='メールアドレス'
        variant='filled'
      />
      <TextField
        {...password}
        fullWidth
        type='password'
        label='パスワード'
        variant='outlined'
      />
      <Button type='submit' fullWidth color='primary' variant='contained'>
        登録
      </Button>
      <Link to='/login'>アカウントをお持ちの方</Link>
    </form>
  );
};

export default Signup;
