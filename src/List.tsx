import { FC } from 'react';

const LANGAGES: string[] = ['JavaScript', 'C++', 'Ruby', 'Java', 'PHP', 'Go'];

const List: FC = () => (
  <div>
    <div>
      {LANGAGES.map((lang) => (
        <div>{lang}</div>
      ))}
    </div>
  </div>
);

export default List;
