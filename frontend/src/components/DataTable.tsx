import React from 'react';
import {
  DataGrid,
  GridColDef,
  //   GridToolbarQuickFilter,
  GridToolbar,
  //   GridValueGetterParams,
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import {
  HiOutlinePencilSquare,
  HiOutlineEye,
  HiOutlineTrash,
} from 'react-icons/hi2';
import toast from 'react-hot-toast';

interface DataTableProps {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  rows,
  slug,
}) => {
  const navigate = useNavigate();

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          {/* <div to={`/${props.slug}/${params.row.id}`}> */}
          <button
            onClick={() => {
              navigate(`/${slug}/${params.row.id}`);
            }}
            className="btn btn-square btn-ghost"
          >
            <HiOutlineEye />
          </button>
          <button
            onClick={() => {
              toast('Jangan diedit!', {
                icon: '😠',
              });
            }}
            className="btn btn-square btn-ghost"
          >
            <HiOutlinePencilSquare />
          </button>
          <button
            onClick={() => {
              toast('Jangan dihapus!', {
                icon: '😠',
              });
            }}
            className="btn btn-square btn-ghost"
          >
            <HiOutlineTrash />
          </button>
        </div>
      );
    },
  };

  return (
    <div className="w-full bg-base-100 text-base-content">
      <DataGrid
        className="dataGrid p-0 xl:p-3 w-full bg-base-100 text-white"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;