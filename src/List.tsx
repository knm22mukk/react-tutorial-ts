import { FC } from 'react';

type LANGUAGES = {
  name: string[];
};

const LANGUAGES = [
  { id: 0, name: 'JavaScript' },
  { id: 1, name: 'C++' },
  { id: 2, name: 'Ruby' },
  { id: 3, name: 'Java' },
  { id: 4, name: 'PHP' },
  { id: 5, name: 'Go' },
];

const List: FC = () => (
  <div>
    <div>
      {LANGUAGES.map((lang) => (
        <div key={lang.id}>{lang.name}</div>
      ))}
    </div>
  </div>
);

export default List;
