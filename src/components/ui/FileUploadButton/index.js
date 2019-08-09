import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './index.css';

class FileUploadButton extends Component {
  state = {
    isLoading: false
  };

  constructor() {
    super();

    this.input = React.createRef();

    this.openDialog = this.openDialog.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  openDialog() {
    this.input.current.click();
  }

  clearInput() {
    this.input.current.value = '';
  }

  onChange() {
    const file = this.input.current.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsText(file);

      this.setState({
        isLoading: true
      });

      reader.onload = (event) => {
        this.props.onUpload(event.target.result);
        this.clearInput();

        this.setState({
          isLoading: false
        });
      };

      reader.onerror = () => {
        this.setState({
          isLoading: false
        });

        throw new Error(`Unable to read ${file.name}`);
      }
    }
  }

  isDisabled() {
    return this.state.isLoading || this.props.disabled;
  }

  render() {
    return (
      <div className="UIFileUploadButton">
        <button onClick={this.openDialog} disabled={this.isDisabled()}>{this.props.children}</button>
        <input type="file"
					ref={this.input}
					accept={this.props.accept}
					className="UIFileUploadButton-input"
					onChange={this.onChange}
        />
      </div>
    );
  }
}

FileUploadButton.propTypes = {
  accept: PropTypes.string,
  onUpload: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default FileUploadButton;
