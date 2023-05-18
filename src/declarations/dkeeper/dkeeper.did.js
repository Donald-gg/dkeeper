export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({ 'title' : IDL.Text, 'content' : IDL.Text });
  return IDL.Service({
    'createNote' : IDL.Func([Note], [], ['oneway']),
    'deleteNote' : IDL.Func([Note], [], ['oneway']),
    'readNote' : IDL.Func([], [IDL.Vec(Note)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
