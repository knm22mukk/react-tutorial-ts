import { FC } from 'react';

type Props = {
  langs: string[];
};

const List: FC<Props> = ({ langs }) => (
  <div>
    <div>
      {langs.map((lang) => (
        <div key={lang}>{lang}</div>
      ))}
    </div>
  </div>
);

export default List;
