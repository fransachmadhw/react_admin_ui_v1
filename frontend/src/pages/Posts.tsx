import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
// import AddData from '../components/AddData';
import { fetchPosts } from '../api/ApiCollection';
import {
  HiOutlineGlobeAmericas,
  HiOutlineLockClosed,
} from 'react-icons/hi2';

const Posts = () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['allorders'],
    queryFn: fetchPosts,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', minWidth: 90 },
    {
      field: 'title',
      headerName: 'Title',
      minWidth: 500,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 relative items-center py-2">
            <div className="w-20 h-12 sm:w-24 sm:h-14 xl:w-32 xl:h-[72px] rounded relative overflow-hidden">
              <img
                src={
                  params.row.thumbnail ||
                  'https://placehold.co/720x400'
                }
                alt="thumbnail-picture"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-start gap-0">
              <div className="relative w-[300px] xl:w-[320px] overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-ellipsis whitespace-nowrap text-base font-medium dark:text-white">
                  {params.row.title}
                </span>
              </div>
              <div className="relative w-[300px] xl:w-[320px] overflow-hidden ">
                <p className="text-[14px] leading-[1.1] overflow-hidden line-clamp-2 text-neutral-400">
                  {params.row.desc}
                </p>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      field: 'tags',
      // type: 'string',
      headerName: 'Tags',
      minWidth: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex flex-wrap gap-1">
            {params.row.tags &&
              params.row.tags.map((tag: string, index: number) => (
                <div
                  className="rounded-full bg-base-200 dark:bg-base-300 flex justify-center items-center px-3 py-1 text-xs"
                  key={index}
                >
                  {tag}
                </div>
              ))}
          </div>
        );
      },
    },
    {
      field: 'author',
      headerName: 'Author',
      minWidth: 220,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 items-center">
            <div className="avatar">
              <div className="w-6 xl:w-9 rounded-full">
                <img
                  src={
                    params.row.avatar || '/Portrait_Placeholder.png'
                  }
                  alt="user-picture"
                />
              </div>
            </div>
            <span className="mb-0 pb-0 leading-none">
              {params.row.author}
            </span>
          </div>
        );
      },
    },
    {
      field: 'visibility',
      headerName: 'Visibility',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        if (params.row.visibility == 'Public') {
          return (
            <div className="flex gap-1 items-center">
              <HiOutlineGlobeAmericas className="text-lg" />
              <span className="p-0 mt-[1px] leading-none">
                {params.row.visibility}
              </span>
            </div>
          );
        } else if (params.row.visibility == 'Private') {
          return (
            <div className="flex gap-1 items-center">
              <HiOutlineLockClosed className="text-lg" />
              <span className="p-0 mt-[1px] leading-none">
                {params.row.visibility}
              </span>
            </div>
          );
        } else {
          return <span>Unknown</span>;
        }
      },
    },
    {
      field: 'date',
      type: 'string',
      headerName: 'Date',
      minWidth: 100,
    },
    {
      field: 'views',
      type: 'number',
      headerName: 'Views',
      minWidth: 120,
    },
    {
      field: 'comments',
      type: 'number',
      headerName: 'Comments',
      minWidth: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.comments && params.row.comments.length}
          </div>
        );
      },
    },
    {
      field: 'likes',
      type: 'number',
      headerName: 'Likes',
      minWidth: 80,
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'promisePosts' });
    }
    if (isError) {
      toast.error('Error while getting the data!', {
        id: 'promisePosts',
      });
    }
    if (isSuccess) {
      toast.success('Got the data successfully!', {
        id: 'promisePosts',
      });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Posts
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Posts Found
              </span>
            )}
          </div>
          {/* <button
            onClick={() => setIsOpen(true)}
            className={`btn ${
              isLoading ? 'btn-disabled' : 'btn-primary'
            }`}
          >
            Add New Order +
          </button> */}
        </div>
        {isLoading ? (
          <DataTable
            slug="orders"
            columns={columns}
            rows={[]}
            includeActionColumn={false}
          />
        ) : isSuccess ? (
          <DataTable
            slug="orders"
            columns={columns}
            rows={data}
            includeActionColumn={false}
          />
        ) : (
          <>
            <DataTable
              slug="orders"
              columns={columns}
              rows={[]}
              includeActionColumn={false}
            />
            <div className="w-full flex justify-center">
              Error while getting the data!
            </div>
          </>
        )}

        {/* {isOpen && (
          <AddData
            slug={'user'}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )} */}
      </div>
    </div>
  );
};

export default Posts;
