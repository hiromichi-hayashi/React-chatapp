import { useState } from 'react';

// hooksはコンポーネントかhooksの中でしか呼ぶことができない

// 処理を共通化する時
// hooksを使用する場合 -> カスタムフック
// hooksを使用しない場合 -> 通常関数

export const useInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  return {
    value,
    onChange(e) {
      setValue(e.target.value);
    },
  };
};
