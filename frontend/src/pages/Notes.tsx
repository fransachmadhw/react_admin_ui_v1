import React from 'react';

import NoteCard from '../components/notes/NoteCard';
import { allNotes } from '../components/notes/data';

const Notes = () => {
  const [noteSelected, setNoteSelected] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    title: '',
    body: '',
  });
  const [titleSelected, setTitleSelected] = React.useState('');
  const [bodySelected, setBodySelected] = React.useState('');

  return (
    // screen
    <div className="w-full p-0 m-0 relative">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-5 xl:gap-8 relative">
        {/* grid */}
        <div className="w-full grid xl:grid-cols-5 relative gap-10">
          {/* column 1 */}
          <div className="w-full flex flex-col xl:gap-5 xl:col-span-2">
            {/* heading */}
            <div className="w-full flex items-center justify-between">
              <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
                Notes
              </h2>
              <button className="btn btn-primary">+ Add Note</button>
            </div>
            {allNotes &&
              allNotes.map((note, index) => (
                <NoteCard
                  key={index}
                  title={note.title}
                  body={note.body}
                  setNoteSelected={setNoteSelected}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  setTitleSelected={setTitleSelected}
                  setBodySelected={setBodySelected}
                />
              ))}
          </div>

          {/* column 2 */}
          <div className="w-full relative inline-block xl:col-span-3 bg-base-100">
            {/* content */}

            {!noteSelected ? (
              <div className="sticky xl:top-[88px] z-10 xl:h-[80vh] flex justify-center items-center">
                <h4>Please select one note</h4>
              </div>
            ) : (
              <div className="sticky xl:top-[104px] z-10 flex flex-col items-start gap-5 xl:pr-8">
                <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
                  {titleSelected}
                </h2>
                <p className="xl:text-[22px] xl:leading-normal">
                  {bodySelected}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
