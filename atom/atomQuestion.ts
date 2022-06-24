import { atom } from 'recoil';

export const QuestionState = atom({
  key: 'QuestionState',
  default: {},
});

export const SelectQuestionState = atom({
  key: 'SelectQuestionState',
  default: 0,
});

export const QuestionDeleteState = atom({
  key: 'QuestionDeleteState',
  default: false,
});

export const ExecQuestionDeleteState = atom({
  key: 'ExecQuestionDeleteState',
  default: false,
});

export const ExecQuestionCreateState = atom({
  key: 'ExecQuestionCreateState',
  default: false,
});

export const QuestionUpdateState = atom({
  key: 'QuestionUpdateState',
  default: false,
});

export const ExecQuestionUpdateState = atom({
  key: 'ExecQuestionUpdateState',
  default: false,
});
