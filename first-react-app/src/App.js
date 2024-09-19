import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = "Ram"
  const lastName = "Dulari"
  const age = 20
  const job = "Front End Developer"
  const mArr = [1, 2, 3, 4, 5]
  const mObj = {
    mName: "Ramesh",
    age: 25
  }

  const blogObj = {
    title: "Blog Title",
    Description: 'lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor'
  }
  const inputPlaceholder = "Enter your Details"

  const getDetails = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }

  const detailsInputBox = <input placeholder={inputPlaceholder} autoComplete></input>

  return (
    <div className="App">
      <div>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.Description} </p>
      </div>
      <hr></hr>
      <div>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.Description} </p>
      </div>
      <hr></hr>
      <div>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.Description} </p>
      </div>
      <hr></hr>
      <h3>Full Name: {getDetails(firstName, lastName)}</h3>
      <p>Age: {mObj.age}</p>
      <p>Job: {job}</p>
      {detailsInputBox}
      <br></br>
      {mArr[0]}
    </div>
  );
}

export default App;
