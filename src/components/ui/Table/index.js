import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import './index.css';
import 'react-table/react-table.css';

const Table = ({data, columns}) => {
  return (
    <div className="UITable">
      <ReactTable data={data}
				columns={columns}
				showPagination={false}
				multiSort={false}
				resizable={false}
				defaultSortDesc={true}
				minRows={5}
			/>
    </div>
  )
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    id: PropTypes.string
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Table;
