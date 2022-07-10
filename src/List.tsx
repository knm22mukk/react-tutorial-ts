import { FC } from 'react';

type Props = {
  title: string;
};

const List: FC<Props> = ({ title }) => (
  <div>
    <h4>{title}</h4>
    <div>リストです</div>
  </div>
);

export default List;
