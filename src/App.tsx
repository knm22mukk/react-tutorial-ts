import { FC, useEffect, useState } from 'react';
import { getLanguages } from './const/Languages';
import Form from './Form';
import List from './List';

const App: FC = () => {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState<string[]>([]);

  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchLanguages();
  }, []);

  const addlang = (lang: string) => {
    setLangs([...langs, lang]);
    setTab('list');
  };

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
      {tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addlang} />}
    </div>
  );
};

export default App;
