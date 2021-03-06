import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };
  createKey = (item, column) => {
    const { defaultKeyValue } = this.props;

    return item[defaultKeyValue] + (column.path || column.key);
  };

  render() {
    const { data, columns, defaultKeyValue } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[defaultKeyValue]}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
TableBody.defaultProps = {
  defaultKeyValue: "_id",
};
export default TableBody;
