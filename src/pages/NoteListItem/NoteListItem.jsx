export default function NoteListItem({ note, idx, date}) {
    // const formattedDate = date ? date.toLocaleDateString() : '' 
    return (
        <p>{note}&nbsp;| &nbsp;{new Date(date).toLocaleDateString()}</p>
    );
}