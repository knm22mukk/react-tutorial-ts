import { FC, useState } from 'react';
import List from './List';

const App: FC = () => {
  const [description, setDescription] = useState<string>('クリック前の表示');

  const changeDescription = (): void => {
    setDescription('クリックしました');
  };

  return (
    <div>
      {description}
      <List title='取扱言語一覧' />
      <button type='button' onClick={changeDescription}>
        ボタン
      </button>
    </div>
  );
};

export default App;
