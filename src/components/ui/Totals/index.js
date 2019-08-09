import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { format as formatCurrency } from '../../../api/currency';

import './index.css';

function getGrandTotal(sections) {
  return sections
    .reduce((grandTotal, section) => grandTotal + section.value, 0);
}

const Totals = ({sections}) => {
  const grandTotal = getGrandTotal(sections);

  return (
    <div className="UITotals">
      {sections.map((section, i) =>
        <div key={i} className="UITotals-row">
          <div className="UITotals-total-title">
            {section.title}
          </div>
          <div className="UITotals-total-value">
            {formatCurrency(section.value)}
          </div>
        </div>
      )}
      <div className="UITotals-row">
        <div className="UITotals-total-title">
          {i18n.t('components.ui.Totals.grandTotal.title')}
        </div>
        <div className="UITotals-total-value">
          {formatCurrency(grandTotal)}
        </div>
      </div>
    </div>
  );
};

Totals.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired
};

export default Totals;
