const CareerHistory = ({ experience, manageDelete }) => {
    // const experience = props.experience;
    
    

    return ( 
        <div className="career-history">
            <div className="career-parent">
        {/* <h1 className="title">Career History</h1> */}
        {experience.map((experience) => (
          <div className="career-details" key={experience.id}>
            <h4> {experience.Position} </h4>
            <h5> {experience.Organisation} </h5>
            <h6> {experience.Yr} </h6>
            <p className="description"> {experience.Experience} </p>
            <button onClick={ () => manageDelete(experience.id) }>Delete History</button>
          </div>
        ))}

      </div>
        </div>
     );
}
 
export default CareerHistory;