import { FC, useState } from 'react';
import Form from './Form';
import List from './List';

const App: FC = () => {
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
      {tab === 'list' ? <List /> : <Form />}
    </div>
  );
};

export default App;
