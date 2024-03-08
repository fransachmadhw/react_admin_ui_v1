import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
// import AddData from '../components/AddData';
import { fetchOrders } from '../api/ApiCollection';

const Orders = () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['allorders'],
    queryFn: fetchOrders,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Product',
      minWidth: 300,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 items-center">
            <div className="w-6 xl:w-10 overflow-hidden flex justify-center items-center">
              <img
                src={params.row.product || '/corrugated-box.jpg'}
                alt="orders-picture"
                className="object-cover"
              />
            </div>
            <span className="mb-0 pb-0 leading-none">
              {params.row.title}
            </span>
          </div>
        );
      },
    },
    {
      field: 'address',
      type: 'string',
      headerName: 'Address',
      minWidth: 320,
      flex: 1,
    },
    {
      field: 'recipient',
      headerName: 'Recipient',
      minWidth: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 items-center">
            <div className="avatar">
              <div className="w-6 xl:w-9 rounded-full">
                <img
                  src={
                    params.row.profile || '/Portrait_Placeholder.png'
                  }
                  alt="user-picture"
                />
              </div>
            </div>
            <span className="mb-0 pb-0 leading-none">
              {params.row.recipient}
            </span>
          </div>
        );
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      minWidth: 100,
      type: 'string',
      flex: 1,
    },
    {
      field: 'total',
      headerName: 'Total',
      minWidth: 100,
      type: 'string',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      flex: 1,
      renderCell: (params) => {
        if (params.row.status == 'Pending') {
          return (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning"></div>
              <div className="text-sm font-medium text-warning">
                {params.row.status}
              </div>
            </div>
          );
        } else if (params.row.status == 'Dispatch') {
          return (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-info"></div>
              <div className="text-sm font-medium text-info">
                {params.row.status}
              </div>
            </div>
          );
        } else if (params.row.status == 'Cancelled') {
          return (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-error"></div>
              <div className="text-sm font-medium text-error">
                {params.row.status}
              </div>
            </div>
          );
        } else if (params.row.status == 'Completed') {
          return (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <div className="text-sm font-medium text-success">
                {params.row.status}
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex items-center gap-2">
              <div className="badge bg-neutral-content badge-xs"></div>
              <span className="text-sm font-semibold text-neutral-content">
                Unknown
              </span>
            </div>
          );
        }
      },
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'promiseOrders' });
    }
    if (isError) {
      toast.error('Error while getting the data!', {
        id: 'promiseOrders',
      });
    }
    if (isSuccess) {
      toast.success('Got the data successfully!', {
        id: 'promiseOrders',
      });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Orders
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Orders Found
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

export default Orders;
