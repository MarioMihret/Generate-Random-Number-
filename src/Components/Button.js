import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = () => {
  const [random, setRandom] = useState(0);
  const [random2, setRandom2] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [showResults, setShowResults] = useState(false);

  const generateRandomNumbers = () => {
    setRandom(Math.floor(Math.random() * 50));
    setRandom2(Math.floor(Math.random() * 50));
  };

  const handleUserInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const sum = random + random2;
    if (parseInt(input) === sum) {
      setMessage('Success!');
    } else if (input === '') {
      setMessage('You must enter a number.');
    } else {
      setMessage('Fail.');
    }
    setShowResults(true);
  };

  return (
    <div className="container d-flex flex-column align-items-center p-4">
      <button onClick={generateRandomNumbers} className="btn btn-primary mb-3">
        Generate Random Numbers
      </button>

      <div className="d-flex flex-column align-items-center mb-3">
        <p>The first random number is {random}</p>
        <p>The second random number is {random2}</p>
      </div>

      <div className="mb-3">
        <input
          onChange={handleUserInput}
          type="number"
          placeholder="Enter a number"
          className="form-control"
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary mb-3">
        Submit
      </button>

      {showResults && (
        <div className="d-flex flex-column align-items-center">
          <p
            className={`font-weight-bold mb-2 ${
              message === 'Success!' ? 'text-success' : 'text-danger'
            }`}
          >
            {message}
          </p>
          <p>The sum of the two random numbers is {random + random2}.</p>
        </div>
      )}
    </div>
  );
};

export default Button;