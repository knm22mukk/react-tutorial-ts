import { FC } from 'react';

const LANGAGES: string[] = ['JavaScript', 'C++', 'Ruby', 'Java', 'PHP', 'Go'];

type Props = {
  title: string;
};

const List: FC<Props> = ({ title }) => (
  <div>
    <h4>{title}</h4>
    <div>
      {LANGAGES.map((lang) => (
        <div>{lang}</div>
      ))}
    </div>
  </div>
);

export default List;
