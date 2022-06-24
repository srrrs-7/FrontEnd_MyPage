import { atom } from 'recoil';

export const BlogState = atom({
  key: 'BlogState',
  default: {
    id: 0,
    title: '',
    text: '',
    image: '',
    created_at: Date,
  },
});

export const CreateModalState = atom({
  key: 'CreateModalState',
  default: false,
});

export const DeleteModalState = atom({
  key: 'DeleteModalState',
  default: false,
});

export const UpdateModalState = atom({
  key: 'UpdateModalState',
  default: false,
});

export const SearchQAState = atom({
  key: 'SearchQAState',
  default: false,
});

export const SearchQAValueState = atom({
  key: 'SearchQAValueState',
  default: '',
});
