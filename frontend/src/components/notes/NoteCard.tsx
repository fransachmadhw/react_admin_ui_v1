import React from 'react';

interface NoteCardProps {
  setNoteSelected: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: {
    title: string;
    body: string;
  };
  setSelectedCard: React.Dispatch<
    React.SetStateAction<{ title: string; body: string }>
  >;
  setTitleSelected: React.Dispatch<React.SetStateAction<string>>;
  setBodySelected: React.Dispatch<React.SetStateAction<string>>;
  setTopicSelected: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  body: string;
  date: string;
  author: string;
  topic: string;
}

const NoteCard: React.FC<NoteCardProps> = ({
  setNoteSelected,
  selectedCard,
  setSelectedCard,
  setTitleSelected,
  setBodySelected,
  setTopicSelected,
  title,
  body,
  date,
  author,
  topic,
}) => {
  return (
    <div
      onClick={() => {
        setNoteSelected(true);
        setSelectedCard({
          title: title,
          body: body,
        });
        setTitleSelected(title);
        setBodySelected(body);
        setTopicSelected(topic);
      }}
      className={`w-full btn min-h-[auto] h-auto rounded-3xl border-none flex flex-col items-start text-start group bg-[#fafafa] hover:bg-primary hover:text-primary-content dark:bg-neutral dark:hover:bg-primary
      ${
        selectedCard.title === title
          ? 'bg-primary text-primary-content dark:bg-primary dark:primary-content hover:text-primary-content dark:hover:text-primary-content'
          : 'bg-[#f7f7f7] hover:bg-primary hover:text-primary-content dark:bg-neutral dark:hover:bg-primary'
      }
      `}
    >
      <div className="card-body items-start text-start px-4 py-7 gap-3">
        <h4 className="card-title xl:text-base font-bold">{title}</h4>
        <p
          className={`xl:text-sm leading-loose font-normal line-clamp-2 group-hover:text-primary-content dark:text-base-content mb-1
        ${
          selectedCard.body === body
            ? 'text-primary-content dark:text-primary-content'
            : 'text-neutral-400'
        }
        `}
        >
          {body}
        </p>
        <div
          className={`w-full flex justify-between items-center text-xs group-hover:text-primary-content ${
            selectedCard.body === body
              ? 'text-primary-content dark:text-primary-content'
              : 'text-neutral-400'
          }`}
        >
          <span>{date}</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
