import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../../common/Page';
import CsvTable from '../../ui/CsvTable';
import Totals from '../../ui/Totals';
import * as entriesActions from '../../../actions/entries';

import i18n from 'i18next';
import { columns, types, amountColumn } from '../../../constants/entries';

import './index.css';

class Entries extends Component {
  state = {
    isExpensesUploadDone: false,
    isHoursUploadDone: false
  };

  constructor() {
    super();

    this.onTableUpload = this.onTableUpload.bind(this);
    this.onTableClear = this.onTableClear.bind(this);
    this.isUploadDisabled = this.isUploadDisabled.bind(this);
  }

  fillTableDataWithType(data, type) {
    return data.map((item) => ({
      ...item,
      type
    }))
  }

  fillTableDataType(data) {
    if (!this.state.isHoursUploadDone) {
      this.setState({
        isHoursUploadDone: true
      });

      return this.fillTableDataWithType(data, types.time);
    }

    if (!this.state.isExpensesUploadDone) {
      this.setState({
        isExpensesUploadDone: true
      });

      return this.fillTableDataWithType(data, types.expense);
    }
  }

  fillTableData(data) {
    let filledData = [];

    filledData = this.fillTableDataType(data);

    return filledData;
  }

  onTableUpload(data) {
    const normalizedData = this.fillTableData(data);

    this.props.addEntries(normalizedData);
  }

  onTableClear() {
    this.props.clearEntries();

    this.setState({
      isExpensesUploadDone: false,
      isHoursUploadDone: false
    });
  }

  getComment() {
    if (!this.state.isHoursUploadDone) {
      return i18n.t('components.page.Entries.comment.uploadHours')
    }

    if (!this.state.isExpensesUploadDone) {
      return i18n.t('components.page.Entries.comment.uploadExpenses')
    }

    return i18n.t('components.page.Entries.comment.uploadsDone')
  }

  getTotalSections() {
    return Object.values(this.props.data.reduce((sections, item) => {
      if (!sections[item.type]) {
        sections[item.type] = {
          title: item.type,
          value: 0
        }
      }

      sections[item.type].value += parseFloat(item[amountColumn]);

      return sections;
    }, {}));
  }

  isUploadDisabled() {
    return this.state.isExpensesUploadDone && this.state.isHoursUploadDone;
  }

  render() {
    const comment = this.getComment();
    const totalSections = this.getTotalSections();

    return (
      <Page>
        <div className="PageEntries">
          <CsvTable
            columns={columns}
            data={this.props.data}
            disableUpload={this.isUploadDisabled()}
            onUpload={this.onTableUpload}
            onClear={this.onTableClear}
          />
          <div className="PageEntries-comment">
            {comment}
          </div>
          <div className="PageEntries-totals">
            <Totals sections={totalSections}/>
          </div>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.entries.items
});

const mapDispatchToProps = (dispatch) => ({
  addEntries: (data) => dispatch(entriesActions.addItems(data)),
  clearEntries: () => dispatch(entriesActions.clearItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
