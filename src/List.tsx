import { FC } from 'react';

type Props = {
  langs: string[];
};

const List: FC<Props> = ({ langs }) => (
  <div className='pt-6 px-16'>
    {langs.map((lang) => (
      <div className='py-3 px-8 first:border-none border-t border-gray-400' key={lang}>
        {lang}
      </div>
    ))}
  </div>
);

export default List;
