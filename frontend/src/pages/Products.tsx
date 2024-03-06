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
      headerName: 'Product',
      minWidth: 300,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 items-center">
            <div className="w-6 xl:w-10 overflow-hidden flex justify-center items-center">
              <img
                src={params.row.img || '/corrugated-box.jpg'}
                alt="product-picture"
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
    // {
    //   field: 'title',
    //   type: 'string',
    //   headerName: 'Title',
    //   width: 250,
    // },
    {
      field: 'color',
      type: 'string',
      headerName: 'Color',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'price',
      type: 'string',
      headerName: 'Price',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'producer',
      headerName: 'Producer',
      type: 'string',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      minWidth: 100,
      type: 'string',
      flex: 1,
    },
    {
      field: 'inStock',
      headerName: 'In Stock',
      minWidth: 80,
      type: 'boolean',
      flex: 1,
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
        <div className="w-full flex justify-between xl:mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Products
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Products Found
              </span>
            )}
          </div>
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
          <DataTable
            slug="products"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="products"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="products"
              columns={columns}
              rows={[]}
              includeActionColumn={true}
            />
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
