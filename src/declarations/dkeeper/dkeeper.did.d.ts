import type { Principal } from '@dfinity/principal';
export interface Note { 'title' : string, 'content' : string }
export interface _SERVICE {
  'createNote' : (arg_0: Note) => Promise<undefined>,
  'deleteNote' : (arg_0: Note) => Promise<undefined>,
  'readNote' : () => Promise<Array<Note>>,
}
