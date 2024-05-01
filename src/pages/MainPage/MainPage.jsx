import { useState } from "react";
import "./MainPage.css";
import { baseUrl } from "../../utils/urls";
import axios from "axios";
const MainPage = () => {
  const [molecules, setMolecules] = useState([]);
  const [numberOfMolecules, setNumberOfMolecules] = useState("");

  const fetchMolecules = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/get_drugs`, {
        n: parseInt(numberOfMolecules),
      });
      console.log(response.data);
      setMolecules(response.data.drugs);
    } catch (error) {
      console.error("Error fetching molecules:", error);
    }
  };

  const handleInputChange = (event) => {
    setNumberOfMolecules(event.target.value);
  };

  return (
    <div className="main__page_container">
      <h2>DrugGEN</h2>
      <form>
        <div className="input__field">
          <p>Number of molecules to generate:</p>
          <input
            type="number"
            name="molecules"
            value={numberOfMolecules}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="generate__button"
          type="button"
          onClick={fetchMolecules}
        >
          Generate
        </button>
      </form>
      <div className="table__container">
        <table>
          <thead>
            <tr>
              <th>Runtime (Seconds)</th>
              <th>Validity</th>
              <th>Uniqueness</th>
              <th>Novelty (Train)</th>
              <th>Novelty (Inference)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Null</td>
              <td>Null</td>
              <td>Null</td>
              <td>Null</td>
              <td>Null</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="molecules__container">
        <h4>SMILE notations generated:</h4>
        {molecules.length !== 0 ? (
          <ul>
            {molecules?.map((molecule, index) => {
              return <li key={index}>{molecule}</li>;
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default MainPage;
