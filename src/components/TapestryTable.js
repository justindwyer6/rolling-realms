import React from 'react';

class TapestryTable extends React.Component {
  render() {
    return (
        <table className={this.props.reward}>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="test" id="test"/>
              </td>
              <td>
                <input type="checkbox" name="test" id="test"/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="test" id="test"/>
              </td>
              <td>
                <input type="checkbox" name="test" id="test"/>
              </td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default TapestryTable;
