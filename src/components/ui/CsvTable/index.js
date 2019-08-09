import React from 'react';
import PropTypes from 'prop-types';
import Table from '../Table';
import FileUploadButton from '../FileUploadButton';
import i18n from 'i18next';
import { parse as csvParse } from '../../../api/csv-parser';

import './index.css';

const CsvTable = ({data, columns, onClear, onUpload, disableUpload}) => {
  const onUploadCb = (rawContent) => {
    onUpload(csvParse(rawContent).data)
  };

  return (
    <div className="UICsvTable">
      <Table data={data} columns={columns} />

      <div className="UICsvTable-actions">
        {onClear &&
					<button className="UICsvTable-action-item" onClick={onClear}>
						{i18n.t('components.ui.CsvTable.actions.clear')}
					</button>
        }
        <div className="UICsvTable-action-item">
          <FileUploadButton accept=".csv" onUpload={onUploadCb} disabled={disableUpload}>
            {i18n.t('components.ui.CsvTable.actions.uploadCsv')}
          </FileUploadButton>
        </div>
      </div>
    </div>
  );
};

CsvTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    id: PropTypes.string
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  disableUpload: PropTypes.bool,
  onUpload: PropTypes.func.isRequired,
  onClear: PropTypes.func
};

export default CsvTable;
