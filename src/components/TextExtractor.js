import React, { useState } from 'react';
import './TextExtractor.css';

const TextExtractor = () => {
  const [text, setText] = useState('');
  const [contactData, setContactData] = useState({
    phoneNumbers: [],
    emails: [],
    names: [],
    addresses: [],
    vehicles: [],
  });

  const extractPhoneNumbers = (text) => {
    const phoneRegex = /\b\d{3}[-.\s]??\d{3}[-.\s]??\d{4}\b/g;
    return text.match(phoneRegex) || [];
  };

  const extractEmails = (text) => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(emailRegex) || [];
  };

  const extractNames = (text) => {
    const nameRegex = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b/g;
    return text.match(nameRegex) || [];
  };

  const extractAddresses = (text) => {
    const addressRegex = /\d+\s+(?:[A-Za-z]+\s?)+,?\s+(?:[A-Za-z]+\s?)+,?\s+[A-Za-z]{2}\s+\d{5}/g;
    return text.match(addressRegex) || [];
  };

  const extractVehicles = (text) => {
    const vehicleRegex = /\b\d{4}\s+([A-Za-z]+\s?)+\b/g;
    return text.match(vehicleRegex) || [];
  };

  const extractCustomerContactData = (text) => {
    const phoneNumbers = extractPhoneNumbers(text);
    const emails = extractEmails(text);
    const names = extractNames(text);
    const addresses = extractAddresses(text);
    const vehicles = extractVehicles(text);
    setContactData({ phoneNumbers, emails, names, addresses, vehicles });
  };

  const exportToCSV = () => {
    const dataToExport = [
      ['Phone Numbers'].concat(contactData.phoneNumbers),
      ['Email Addresses'].concat(contactData.emails),
    ];

    const csvContent = dataToExport.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'customer_contact_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="b-example-divider"></div>
      <div className="text-extractor-container">

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>
          <h1 className="text-body-emphasis">Customer Contact Data Extractor</h1>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text containing contact data..."
            rows={10}
            cols={50}
          />
           <h2>Names</h2>
          <ul>
            {contactData.names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <h2>Addresses</h2>
          <ul>
            {contactData.addresses.map((address, index) => (
              <li key={index}>{address}</li>
            ))}
          </ul>
          <h2>Vehicles</h2>
          <ul>
            {contactData.vehicles.map((vehicle, index) => (
              <li key={index}>{vehicle}</li>
            ))}
          </ul>

          <br />
          <button onClick={() => extractCustomerContactData(text)}>Extract Contact Data</button>
          <h2>Phone Numbers</h2>
          <ul>
            {contactData.phoneNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
          <h2>Email Addresses</h2>
          <ul>
            {contactData.emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
        
            <br />
            <button onClick={() => extractCustomerContactData(text)}>Extract Contact Data</button>
            <button onClick={() => exportToCSV()}>Export to CSV</button>
            </div>
            <div className="b-example-divider"></div>
        </div>
    </div>

  );
};

export default TextExtractor;
