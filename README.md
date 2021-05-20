# Chatapp
 簡易ログイン機能、掲示板を作成

## 使用機能

React/firebase/Material-UI

### `カスタムフック`

useInput.js
```
export const useInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  return {
    value,
    onChange(e) {
      setValue(e.target.value);
    },
  };
};
```
ユーザーに入力される部分を共通化

### `Signup.jsx`
```
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

```
新規登録画面
値を引数で受け取りfirebaseに送信

### `Login.jsx`
```
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        console.log('ログイン失敗', error);
      });
  };
```
作成したアカウント照合