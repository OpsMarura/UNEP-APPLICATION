<div className="container-fluid table-responsive">
  <table className="table table-condensed">
    <thead>
      <tr>
        <td>Project Ref</td>
        <td>Country</td>
        <td>Implementing Office</td>
        <td>Project Title</td>
        <td>Start Date</td>
        <td>Duration Months</td>
        <td>End Date</td>
        <td>Readiness Or Nap</td>
        <td>First Disbursement Amount</td>
      </tr>
    </thead>
    <tbody>
      <tr key={index}>
        <td>{elem.project_ref}</td>
        <td>{elem.country}</td>
        <td>{elem.implementing_office}</td>
        <td>{elem.project_title}</td>
        <td>{elem.start_date}</td>
        <td>{elem.duration_months}</td>
        <td>{elem.end_date}</td>
        <td>{elem.readiness_or_nap}</td>
        <td>{elem.type_of_readiness}</td>
        <td>{elem.first_disbursement_amount}</td>
        <td>{elem.status}</td>
      </tr>
    </tbody>
  </table>
</div>;
