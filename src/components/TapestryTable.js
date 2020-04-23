import React from 'react';
import { times } from 'lodash';

class TapestryTable extends React.Component {
  render() {
    const Input = () => <td><input type="checkbox" name="test" id="test"/></td>
    const Row = () => <tr>{times(2, () => <Input />)}</tr>
    return (
        <table className={this.props.reward}>
          <tbody>
            {times(2, () => <Row />)}
          </tbody>
        </table>
    );
  }
}

export default TapestryTable;
