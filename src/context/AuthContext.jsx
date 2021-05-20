import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ loading: true, data: null });

  // タイミング調整関数
  // - DOMが画面に描写された時に実行
  // - 第二引数の依存配列に設定された値に変更があった時に実行
  useEffect(() => {
    // onAuthStateChanged:
    // - ログイン状態が切り替わると実行
    // - ユーザーがログイン状態ならユーザーの情報、
    //   ログインしていなければnull
    const unsubscribe = auth.onAuthStateChanged((userState) => {
      setUser({ loading: false, data: userState });
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
