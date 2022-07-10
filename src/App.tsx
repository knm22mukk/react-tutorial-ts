import { FC, useEffect, useState } from 'react';
import { getLanguages } from './const/Languages';
import Form from './Form';
import List from './List';
import './App.css';

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
      <header className='flex justify-between pt-6 px-16 border-b'>
        <ul className='flex'>
          <li
            className={`px-2 py-3 cursor-pointer ${
              tab === 'list' ? 'border-b-2 border-b-[#F44336]' : ''
            }`}
            aria-hidden='true'
            onClick={() => setTab('list')}
          >
            リスト
          </li>
          <li
            className={`px-2 py-3 cursor-pointer ${
              tab === 'form' ? 'border-b-2 border-b-[#F44336]' : ''
            }`}
            aria-hidden='true'
            onClick={() => setTab('form')}
          >
            フォーム
          </li>
        </ul>
      </header>
      {tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addlang} />}
    </div>
  );
};

export default App;
