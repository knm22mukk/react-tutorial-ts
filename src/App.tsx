import { FC, useState } from 'react';
import Form from './Form';
import List from './List';

const App: FC = () => {
  const [description, setDescription] = useState<string>('クリック前の表示');

  const changeDescription = (): void => {
    setDescription('クリックしました');
  };

  const [tab, setTab] = useState('list');

  return (
    <div>
      <header>
        <ul>
          <li aria-hidden='true' onClick={() => setTab('list')}>
            リスト
          </li>
          <li aria-hidden='true' onClick={() => setTab('form')}>
            フォーム
          </li>
        </ul>
      </header>
      <hr />
      {description}
      {tab === 'list' ? <List title='取扱言語一覧' /> : <Form />}
      <button type='button' onClick={changeDescription}>
        ボタン
      </button>
    </div>
  );
};

export default App;
