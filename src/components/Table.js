import React from "react";
import PropTypes from 'prop-types'; // ES6
import { render } from "react-dom";

import moment from 'moment';
import ReactTable from "react-table";

class Table extends React.Component {
  static propTypes = { 
      flights: PropTypes.array.isRequired,
      editableTable: PropTypes.bool.isRequired
      // editFlights: PropTypes.func.isRequired
  };

  displayValue = (val) => {
    if (moment(val, moment.ISO_8601, true).isValid()) {
      return moment(val).format("YYYY-MM-DD HH:mm");
    } else {
      return val;
    }
  };

  renderEditable = (cellInfo) => {

    const data = [...this.props.flights];
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        // onBlur={e => {
        //   const data = [...this.props.flights];
        //   data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
        //   this.props.editFlights(data)
        // }}
        dangerouslySetInnerHTML={{
          __html: this.displayValue(this.props.flights[cellInfo.index][cellInfo.column.id])
        }}        
      />
    );
  }

  render() {
    const { flights } = this.props;
    return (
      <div>
        <ReactTable
          data={ flights }
          columns={[
                {
                  id: "flight",
                  Header: "Flight",
                  accessor: "flight",
                  maxWidth: "300",
                  width: "100",
                  Cell: (this.props.editableTable ? this.renderEditable : null)
                },
                {
                  id: "departure",
                  Header: "Departure",
                  accessor: d => moment(d.departure).format("YYYY-MM-DD HH:mm"),
                  width: "180",
                  maxWidth: "180",
                  Cell: (this.props.editableTable ? this.renderEditable : null)
                }                
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Table;