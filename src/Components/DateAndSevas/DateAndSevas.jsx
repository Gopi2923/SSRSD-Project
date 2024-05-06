import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateAndSevas.css'

const DateAndSevas = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [sevas, setSevas] = useState(["Suprabhatha Seva/సుప్రభాత సేవ" , "Sahasra Naamaarchana/సహస్ర నామర్చన", "Antharalaya Archana/అంతరాలయ అర్చన", "Nitya Kalyanam/నిత్యకళ్యాణం", "Vendi Ratha Seva/వెండి రథ సేవ", "Alaya Chuttu Seva/ఆలయ చుట్టు సేవ", "Suvarna Pushpa Ashtothara Naamaarchana/సువర్ణ పుష్ప అష్టోత్తర నామార్చన", "Abishekam At Bhadruni Kovela/భద్రుని కోవెలలో అభిషేకం", "Pattabhishekam/పట్టాభిషేకం", "Sudharshana Homam/సుదర్శన హోమం"]); // Replace with your list of seva options

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSevaChange = (event) => {
    setSevas(event.target.value); // Assuming single selection for simplicity
  };

  return (
    <div className="seva-selection">
      <div className="date-field">
        <label className='label' htmlFor="date">Date:</label>
        <DatePicker
          id="date"
          selected={selectedDate}
          className='date-picker'
          placeholder="Pick Your Date"
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="name-field">
        <label className='label' htmlFor="name">Name:</label>
        <input type="text" placeholder='Enter Your Name' id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="seva-section">
        <label className='label'>List of Sevas:</label>
        <select value={sevas} onChange={handleSevaChange}>
          <option value="">Select Seva</option>
          {sevas.map((seva, index) => (
            <option key={index} value={seva}>
              {seva}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateAndSevas;
