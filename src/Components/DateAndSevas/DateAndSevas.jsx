import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './DateAndSevas.css'
import arrow from '../../assets/arrow_icon.png';

const DateAndSevas = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  const [selectedSeva, setSelectedSeva] = useState('');
  const [sevas, setSevas] = useState([{name: "Suprabhatha Seva/సుప్రభాత సేవ", price: 200} ,{name: "Sahasra Naamaarchana/సహస్ర నామర్చన", price: 300}, {name :"Antharalaya Archana/అంతరాలయ అర్చన", price: 300}, {name: "Nitya Kalyanam/నిత్యకళ్యాణం", price: 1500}, {name: "Vendi Ratha Seva/వెండి రథ సేవ", price: 1116}, {name: "Alaya Chuttu Seva/ఆలయ చుట్టు సేవ", price: 500}, {name: "Suvarna Pushpa Ashtothara Naamaarchana/సువర్ణ పుష్ప అష్టోత్తర నామార్చన", price: 500}, {name: "Abishekam At Bhadruni Kovela/భద్రుని కోవెలలో అభిషేకం", price: 100}, {name:"Pattabhishekam/పట్టాభిషేకం" , price: 1500}, {name: "Sudharshana Homam/సుదర్శన హోమం", price:1516}]); // Replace with your list of seva options
  const [numTickets, setNumTickets] = useState(1);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const handleSevaChange = (event) => {
    setSelectedSeva(event.target.value); // Assuming single selection for simplicity
  };
  
  const handleTicketIncrement = () => {
    setNumTickets((prevCount) => Math.max(prevCount + 1, 1)); // Ensure minimum 1 ticket
  };

  const handleTicketDecrement = () => {
    setNumTickets((prevCount) => Math.max(prevCount - 1, 0)); // Ensure minimum 0 tickets
  };

   // Function to get the selected seva price (optional)
   const getSelectedSevaPrice = () => {
    const selectedSevaObject = sevas.find((seva) => seva.name === selectedSeva);
    return selectedSevaObject ? selectedSevaObject.price : 0; // Handle cases where no seva is selected
  };


  const calculateTotalPrice = () => {
    const pricePerTicket = getSelectedSevaPrice();
    return pricePerTicket * numTickets;
  };

  return (
    <div>
  <div className="seva-selection">
    <div className="input-row">
      <div className="name-field">
        <label className='label' htmlFor="name">Name:</label>
        <input type="text" placeholder='Enter Your Name' id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="name-field">
        <label className='phone-label' htmlFor="name">Mobile No:</label>
        <input type="text" placeholder='Enter Your Number' id="name" value={number} onChange={handleNumberChange} />
      </div>
      <div className="seva-section">
        <label className="seva-label">List of Sevas:</label>
        <select value={selectedSeva} onChange={handleSevaChange}>
          <option value="">Select Seva</option>
          {sevas.map((seva) => (
            <option key={seva.name} value={seva.name}>
              {seva.name}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="input-row">
      {selectedSeva && ( // Conditionally render ticket selection and total price
        <>
          <div className="ticket-selection">
            <label className="label" htmlFor="numTickets">
              Number of Tickets:
            </label>
            <div className="ticket-controls">
              <button type="button" onClick={handleTicketDecrement}>
                -
              </button>
              <span className="ticket-count">{numTickets}</span>
              <button type="button" onClick={handleTicketIncrement}>
                +
              </button>
            </div>
          </div>
          <div className="summary-section">
            {selectedSeva && ( // Conditionally render total price and button
              <>
                <div className="total-price">
                  <p className='label'>Total Price: ₹{calculateTotalPrice()}</p>
                </div>
                <button type="button" disabled={!selectedSeva || numTickets <= 0} className='payment-btn'>
                  Make Payment <img src={arrow} alt="" />
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  </div>
</div>

  );
};

export default DateAndSevas;
