import List "mo:base/List";
import Debug "mo:base/Debug";

actor DKeeper {
  public type Note = {
    title : Text;
    content : Text;
  };

  stable var notes : List.List<Note> = List.nil<Note>();
  // create note

  public func createNote(newNote: Note) {
    notes := List.push(newNote, notes);
    // Debug.print(debug_show (notes));
  };

   // delete note
  public func deleteNote(Note: Note) {
    var filteredList = List.filter<Note>(notes: List.List<Note>, func n { n != Note });
    notes := filteredList;
  };

  // read note. convirting note to note array to serve to frontend
  public query func readNote() : async [Note] {
    return List.toArray(notes);
  };
};
