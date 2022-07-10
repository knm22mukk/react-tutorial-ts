import { FC, useState } from 'react';

const Form: FC = () => {
  const [text, setText] = useState<string>('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div>
      <h4>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <button type='submit'>追加</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
