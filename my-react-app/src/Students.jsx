import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is student smart: {props.isSudent ? "yes": "No"}</p>
        </div>
    )
}
/*

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isSudent: PropTypes.bool
}
*/

Student.defualtProps = {
    name: "user",
    age: 5,
    isSudent: true
}


export default Student

