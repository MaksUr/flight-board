import React from 'react'
import PropTypes from 'prop-types'

class EditableBoardCheckBox extends React.Component {  

  static propTypes = {
    tableSettings: PropTypes.shape({
      editableStatus: PropTypes.bool.isRequired  
    }).isRequired,    
    setEditableStatus: PropTypes.func.isRequired,
  }  


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.setEditableStatus(value);    
  };

    
  render() {   
    return (
      <div>
        <label>
            Edit table:
            <input
                name="isEditable"
                type="checkbox"
                checked={this.props.editableStatus}
                onChange={this.handleInputChange} 
            />
        </label>
        <div>
          Mode: {this.props.tableSettings.editableStatus ? 'Admin mode' : 'User mode'}
        </div>
      </div>
    );
  };
}

export default EditableBoardCheckBox;
