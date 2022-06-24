import { atom } from 'recoil';

export const AnswerCreateState = atom({
  key: 'AnswerCreateState',
  default: false,
});

export const AnswerUpdateState = atom({
  key: 'AnswerUpdateState',
  default: false,
});

export const AnswerDeleteState = atom({
  key: 'AnswerDeleteState',
  default: false,
});
