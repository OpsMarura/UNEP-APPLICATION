import React, { Component } from "react";
import { Provider, Consumer } from "../Context";
import Loading from "./Loading";
import Moment from "react-moment";

class Tables extends Component {
  getData = () => {
    fetch("/api/projects/all", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          console.log("kenya");
          return this.setState({
            data: json.message
          });
        }
        return console.log("error on data");
      });
  };

  componentDidMount() {
    this.getData();
  }
  state = {
    data: [],
    rowsNumber: 10
  };
  deleteProject = projectRef => {
    //delete the project ... Be careful
    fetch("/api/delete-project/" + projectRef, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            data: json.message
          });
        }
      });
  };
  render() {
    if (this.state.data.length > 0) {
      return (
        <div className="container-fluid table-responsive">
          <table className="table table-condensed table-bordered">
            <thead>
              <tr>
                <td>Project Ref</td>
                <td>Country</td>
                <td>Implementing Office</td>
                <td>Project Title</td>
                <td>Start Date</td>
                <td>Duration Months</td>
                <td>End date</td>
                <td>Readiness Or Nap</td>
                <td>Types of Readiness</td>
                <td>First Disbursement Amount</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>{elem.project_ref}</td>
                    <td>{elem.country}</td>
                    <td>{elem.implementing_office}</td>
                    <td>{elem.project_title}</td>
                    <td>
                      <Moment format="YYYY/MM/DD">{elem.start_date}</Moment>
                    </td>
                    <td>{elem.duration_months}</td>
                    <td>
                      <Moment format="YYYY/MM/DD">{elem.end_date}</Moment>
                    </td>
                    <td>{elem.readiness_or_nap}</td>
                    <td>{elem.type_of_readiness}</td>
                    <td>{elem.first_disbursement_amount}</td>
                    <td>{elem.status}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteProject(elem.project_ref)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    return <Loading />;
  }
}

export default Tables;
