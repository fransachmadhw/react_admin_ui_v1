import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { fetchLogs } from '../api/ApiCollection';

const Logs = () => {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['all-logs'],
    queryFn: fetchLogs,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'Name',
      minWidth: 220,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 py-[6px] items-center">
            <div className="avatar">
              <div className="w-6 xl:w-9 rounded-full">
                <img
                  src={params.row.img || '/Portrait_Placeholder.png'}
                  alt="user-picture"
                />
              </div>
            </div>
            <span className="mb-0 pb-0 leading-none">
              {params.row.firstName} {params.row.lastName}
            </span>
          </div>
        );
      },
    },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 100,
      type: 'string',
      flex: 1,
    },
    {
      field: 'email',
      type: 'string',
      headerName: 'Email',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      minWidth: 120,
      type: 'string',
      flex: 1,
    },
    {
      field: 'time',
      headerName: 'Time',
      minWidth: 100,
      type: 'string',
      flex: 1,
    },
    {
      field: 'action',
      headerName: 'Action',
      minWidth: 350,
      type: 'string',
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex whitespace-normal">
            {params.row.action}
          </div>
        );
      },
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'promiseLogs' });
    }
    if (isError) {
      toast.error('Error while getting the data!', {
        id: 'promiseLogs',
      });
    }
    if (isSuccess) {
      toast.success('Got the data successfully!', {
        id: 'promiseLogs',
      });
    }
  }, [isError, isLoading, isSuccess]);
  return (
    // screen
    <div className="w-full p-0 m-0">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-3">
        {/* block 1 */}
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Logs
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Logs Found
              </span>
            )}
          </div>
        </div>

        {/* table */}
        {isLoading ? (
          <DataTable
            slug="logs"
            columns={columns}
            rows={[]}
            includeActionColumn={false}
          />
        ) : isSuccess ? (
          <DataTable
            slug="logs"
            columns={columns}
            rows={data}
            includeActionColumn={false}
          />
        ) : (
          <>
            <DataTable
              slug="logs"
              columns={columns}
              rows={[]}
              includeActionColumn={false}
            />
            <div className="w-full flex justify-center">
              Error while getting the data!
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Logs;
