/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';

type Props = {
  onAddLang: (text: string) => void;
};

const Form: FC<Props> = ({ onAddLang }) => {
  const [text, setText] = useState<string>('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onAddLang(text);
  };
  return (
    <div className='pt-6 px-16'>
      <h4 className='font-bold text-2xl'>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div className='mt-3'>
          <label htmlFor={text} className='flex text-[#757575] text-base font-semibold'>
            言語
          </label>
          <input
            className='py-1 px-4 text-base leading-8 text-gray-700 bg-gray-100 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <button className='button w-[120px]' type='submit'>
            追加
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
