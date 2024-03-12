import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import NoteCard from '../components/notes/NoteCard';
import { fetchNotes } from '../api/ApiCollection';
import { HiOutlineXMark } from 'react-icons/hi2';
// import { allNotes } from '../components/notes/data';

interface Note {
  id: number;
  title: string;
  body: string;
  date: string;
  author: string;
  topic: string;
}

const Notes = () => {
  const [allNotes, setAllNotes] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const [noteSelected, setNoteSelected] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    title: '',
    body: '',
  });
  const [titleSelected, setTitleSelected] = React.useState('');
  const [bodySelected, setBodySelected] = React.useState('');
  const [topicSelected, setTopicSelected] = React.useState('');

  const tempTotalEntries = [1, 2, 3, 4, 5, 6, 7];

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'promiseNotes' });
    }
    if (isError) {
      toast.error('Error while getting the data!', {
        id: 'promiseNotes',
      });
    }
    if (isSuccess) {
      toast.success('Got the data successfully!', {
        id: 'promiseNotes',
      });
    }
  }, [isError, isLoading, isSuccess]);

  React.useEffect(() => {
    console.log('Ini datanya:', data);
    setAllNotes(data);
    // console.log('Ini notes nya:', allNotes);
  }, [data]);

  React.useEffect(() => {
    const fetchSpesificNote = async () => {
      const res = await axios.get(
        `https://react-admin-ui-v1-api.vercel.app/notes?q=${searchQuery}`
      );
      setAllNotes(res.data);
    };

    if (searchQuery.length === 0 || searchQuery.length > 2) {
      fetchSpesificNote();
    }
  }, [searchQuery]);

  return (
    // screen
    <div className="w-full p-0 m-0 relative">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-5 xl:gap-8 relative">
        {/* grid */}
        <div className="w-full grid xl:grid-cols-5 relative gap-10">
          {/* column 1 */}
          <div className="w-full flex flex-col gap-7 xl:gap-5 xl:col-span-2">
            {/* heading */}
            <div className="w-full flex items-center justify-between">
              <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
                Notes
              </h2>
              <button className="btn btn-primary">+ Add Note</button>
            </div>

            {/* Search Box */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setSearchQuery(e.target.value.toLowerCase())
                }
              />
            </div>

            {/* listed notes */}
            {isLoading ? (
              tempTotalEntries.map((index: number) => (
                <div
                  key={index}
                  className="w-full h-40 xl:h-40 rounded-3xl skeleton"
                ></div>
              ))
            ) : isSuccess ? (
              allNotes &&
              allNotes.map((note: Note, index: number) => (
                <NoteCard
                  key={index}
                  title={note.title}
                  body={note.body}
                  topic={note.topic}
                  setNoteSelected={setNoteSelected}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  setTitleSelected={setTitleSelected}
                  setBodySelected={setBodySelected}
                  setTopicSelected={setTopicSelected}
                  date={note.date}
                  author={note.author}
                />
              ))
            ) : (
              <div className="w-full flex justify-center">
                Error while getting the data!
              </div>
            )}
          </div>

          {/* column 2 */}
          <div className="hidden w-full relative xl:inline-block xl:col-span-3 bg-base-100">
            {/* content */}
            {!noteSelected ? (
              <div className="sticky xl:top-[88px] z-10 xl:h-[80vh] flex justify-center items-center">
                <h4>Please select one note</h4>
              </div>
            ) : (
              <div className="sticky xl:top-[90px] xl:h-[80vh] z-10 flex flex-col items-start gap-5 xl:pr-10 xl:pb-10 overflow-y-auto">
                <div className="relative w-full xl:h-[360px] 2xl:h-[500px] 3xl:h-[660px] flex justify-center">
                  {topicSelected == 'e-commerce' && (
                    <img
                      src="/e-commerce-vector.png"
                      alt="vector"
                      className="object-cover w-auto h-full grayscale"
                    />
                  )}
                  {topicSelected == 'marketing' && (
                    <img
                      src="/marketing-vector.png"
                      alt="vector"
                      className="object-cover w-auto h-full grayscale"
                    />
                  )}
                  {topicSelected == 'social-media' && (
                    <img
                      src="/social-media-vector.png"
                      alt="vector"
                      className="object-cover w-auto h-full grayscale"
                    />
                  )}
                  {topicSelected == 'SEO' && (
                    <img
                      src="/SEO-vector.png"
                      alt="vector"
                      className="object-cover w-auto h-full grayscale"
                    />
                  )}
                  {topicSelected == 'productivity' && (
                    <img
                      src="/productivity-vector.png"
                      alt="vector"
                      className="object-cover w-auto h-full grayscale"
                    />
                  )}
                  {topicSelected == 'communication' && (
                    <img
                      src="/communication-vector.png"
                      alt="vector"
                      className="object-cover w-auto h-full grayscale"
                    />
                  )}
                  {topicSelected == '' && (
                    <img
                      src="/e-commerce-vector.png"
                      alt="vector"
                      className="object-cover w-auto h-full grayscale"
                    />
                  )}
                </div>
                <h2 className="font-bold text-2xl xl:text-3xl mt-0 pt-0 text-base-content dark:text-neutral-200">
                  {titleSelected}
                </h2>
                <p className="xl:text-[20px] xl:leading-normal">
                  {bodySelected}
                </p>
              </div>
            )}
          </div>
        </div>
        {/* mobile only */}
        <div
          onClick={() => {
            setNoteSelected(false);
            setSelectedCard({
              title: '',
              body: '',
            });
          }}
          className={`w-screen h-screen left-0 bottom-0 fixed z-[99] flex items-end transition-all duration-[2s] bg-black/50
            ${
              noteSelected
                ? 'opacity-100 inline-flex xl:hidden'
                : 'opacity-0 hidden'
            }`}
        >
          <div
            className={`relative w-full h-[70vh] flex flex-col items-start gap-3 bg-base-100 rounded-t-3xl p-5 transition-all duration-[1s] overflow-auto
              ${noteSelected ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <button
              onClick={() => {
                setNoteSelected(false);
                setSelectedCard({
                  title: '',
                  body: '',
                });
              }}
              className="btn btn-circle fixed top-5 right-5 z-[99]"
            >
              <HiOutlineXMark />
            </button>
            <div className="relative w-full h-[256px] sm:h-[480px] xl:h-[256px] flex justify-center">
              {topicSelected == 'e-commerce' && (
                <img
                  src="/e-commerce-vector.png"
                  alt="vector"
                  className="object-cover w-auto h-full grayscale"
                />
              )}
              {topicSelected == 'marketing' && (
                <img
                  src="/marketing-vector.png"
                  alt="vector"
                  className="object-cover w-auto h-full grayscale"
                />
              )}
              {topicSelected == 'social-media' && (
                <img
                  src="/social-media-vector.png"
                  alt="vector"
                  className="object-cover w-auto h-full grayscale"
                />
              )}
              {topicSelected == 'SEO' && (
                <img
                  src="/SEO-vector.png"
                  alt="vector"
                  className="object-cover w-auto h-full grayscale"
                />
              )}
              {topicSelected == 'productivity' && (
                <img
                  src="/productivity-vector.png"
                  alt="vector"
                  className="object-cover w-auto h-full grayscale"
                />
              )}
              {topicSelected == 'communication' && (
                <img
                  src="/communication-vector.png"
                  alt="vector"
                  className="object-cover w-auto h-full grayscale"
                />
              )}
              {topicSelected == '' && (
                <img
                  src="/e-commerce-vector.png"
                  alt="vector"
                  className="object-cover w-auto h-full grayscale"
                />
              )}
            </div>
            <h2 className="font-bold text-xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              {titleSelected}
            </h2>
            <p className="text-lg leading-normal mb-8">
              {bodySelected}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
