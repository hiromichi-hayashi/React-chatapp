import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import firebase, { db } from '../firebase/config';

export const useChat = () => {
  const user = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  // firestoreのmessagesにデータを保存する
  const addChat = (text) => {
    db.collection('messages')
      .add({
        username: user.data.displayName,
        content: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        authorId: user.data.uid,
      })
      .then(() => {
        console.log('チャット送信成功');
      })
      .catch((err) => {
        console.log('チャット送信失敗', err);
      });
  };
  // チャットを削除する関数
  const deleteChat = (id) => {
    db.collection('messages')
      .doc(id)
      .delete()
      .then(() => {
        console.log('削除成功');
      })
      .catch((err) => {
        console.log('削除失敗', err);
      });
  };

  // firestoreのmessagesを取得
  useEffect(() => {
    // get: 実行されたタイミングのデータを取得
    // onSnapshot: firestoreのデータの変更を監視して、変更があればデータを取得する
    const messagesRef = db.collection('messages');
    const unsubscribe = messagesRef
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => {
            const isAuthor = doc.data().authorId === user.data.uid;
            return { ...doc.data(), id: doc.id, isAuthor };
          })
        );
      });
    // コンポーネントがアンマウントされる直前に実行
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    messages,
    addChat,
    deleteChat,
  };
};
