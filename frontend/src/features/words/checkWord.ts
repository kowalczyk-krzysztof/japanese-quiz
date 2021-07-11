import axios, { AxiosResponse } from 'axios';
import { WordProps } from './wordsSlice';

export const checkWord = async (wordToCheck: string) => {
  const res: AxiosResponse = await axios.get(
    `${process.env.REACT_APP_API}/api/v1/game/wordcheck/${wordToCheck}`
  );
  const wordProps: WordProps = {
    word: res.data.word,
    wordExists: res.data.wordExists,
    reading: res.data.reading,
    definitions: res.data.definitions,
  };
  return wordProps;
};
