import React, { Component } from "react";
import Grid from "../common/layout/grid";
import { Field } from "redux-form";

class CreditList extends Component {
  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Field name="credits[0].name" component="input" />
                </td>
                <td>
                  <Field name="credits[0].value" component="input" />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

export default CreditList;
