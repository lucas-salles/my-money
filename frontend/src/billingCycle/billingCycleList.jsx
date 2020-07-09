import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "./billingCycleActions";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  render() {
    const list = this.props.list || [];
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {list.map((bc) => (
              <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToPros = (state) => ({ list: state.billingCycle.list });
const mapDispatchToPros = (dispatch) =>
  bindActionCreators({ getList }, dispatch);
export default connect(mapStateToPros, mapDispatchToPros)(BillingCycleList);
