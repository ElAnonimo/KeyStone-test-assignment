export default {
  components: {
    ui: {
      CsvTable: {
        actions: {
          clear: 'Clear',
          uploadCsv: 'Upload Csv'
        }
      },
      Totals: {
        grandTotal: {
          title: 'Totals'
        }
      }
    },
    page: {
      Entries: {
        table: {
          columns: {
            name: 'Name (person)',
            amount: 'Amount',
            description: 'Description',
            date: 'Date',
            billable: 'Billable',
            type: 'Type'
          },
          values: {
            type: {
              time: 'Time',
              expense: 'Expense'
            }
          }
        },
        comment: {
          uploadExpenses: 'Please upload expenses',
          uploadHours: 'Please upload hours',
          uploadsDone: 'All uploads are done, press clear if you want to upload new data'
        }
      }
    }
  }
}
