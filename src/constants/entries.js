import i18n from 'i18next';
import { formatString as formatDateString, getTimestampFromDateString } from '../api/date';

export const columns = [
  {
    Header: i18n.t('components.page.Entries.table.columns.name'),
    accessor: 'Person Name'
  },
  {
    Header: i18n.t('components.page.Entries.table.columns.amount'),
    id: 'Amount',
    accessor: (row) => parseFloat(row['Amount'])
  },
  {
    Header: i18n.t('components.page.Entries.table.columns.description'),
    id: 'description',
    accessor: (row) => row['Memo'] || row['Comment']
  },
  {
    Header: i18n.t('components.page.Entries.table.columns.date'),
    id: 'date',
    accessor: (row) => {
      const dateString = row['Incurred Date'] || row['Entry Date'];

      return getTimestampFromDateString(dateString);
    },
    Cell: (cell) => formatDateString(cell.value)
  },
  {
    Header: i18n.t('components.page.Entries.table.columns.billable'),
    accessor: 'Billable'
  },
  {
    Header: i18n.t('components.page.Entries.table.columns.type'),
    accessor: 'type'
  }
];

export const types = {
  time: i18n.t('components.page.Entries.table.values.type.time'),
  expense: i18n.t('components.page.Entries.table.values.type.expense'),
};

export const amountColumn = 'Amount';
