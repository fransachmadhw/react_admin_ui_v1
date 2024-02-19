import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { fetchProducts } from '../api/ApiCollection';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import AddData from '../components/AddData';

const Products = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['allproducts'],
    queryFn: fetchProducts,
  });
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => {
        return (
          <div className="avatar">
            <div className="w-6 xl:w-8 rounded-full">
              <img
                src={params.row.img || '/corrugated-box.jpg'}
                alt="product-picture"
              />
            </div>
          </div>
        );
      },
    },
    {
      field: 'title',
      type: 'string',
      headerName: 'Title',
      width: 250,
    },
    {
      field: 'color',
      type: 'string',
      headerName: 'Color',
      width: 150,
    },
    {
      field: 'price',
      type: 'string',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'producer',
      headerName: 'Producer',
      type: 'string',
      width: 200,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      type: 'string',
    },
    {
      field: 'inStock',
      headerName: 'In Stock',
      width: 150,
      type: 'boolean',
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'promiseProducts' });
    }
    if (isError) {
      toast.error('Error while getting the data!', {
        id: 'promiseProducts',
      });
    }
    if (isSuccess) {
      toast.success('Got the data successfully!', {
        id: 'promiseProducts',
      });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between">
          <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
            Products
          </h2>
          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${
              isLoading ? 'btn-disabled' : 'btn-primary'
            }`}
          >
            Add New Product +
          </button>
        </div>

        {isLoading ? (
          <DataTable slug="products" columns={columns} rows={[]} />
        ) : isSuccess ? (
          <DataTable slug="products" columns={columns} rows={data} />
        ) : (
          <>
            <DataTable slug="products" columns={columns} rows={[]} />
            <div className="w-full flex justify-center">
              Error while getting the data!
            </div>
          </>
        )}

        {isOpen && (
          <AddData
            slug={'product'}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
