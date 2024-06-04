import React from "react";
import "./App.css";

const cards = [
  {
    image:
      "https://results.eci.gov.in/uploads4/candprofile/2024/PC/E24/S13/TATKA-2024-20240423123740.jpg", // Replace with your image URL
    name: "सुनील तटकरे",
    count: "5,08,352 (+82,784)",
    party: "राष्ट्रवादी काँग्रेस पार्टी",
    result: "जिंकले"
    
  },
  {
    image:
      "https://results.eci.gov.in/uploads4/candprofile/2024/PC/E24/S13/ANANT-2024-20240415060657.jpg", // Replace with your image URL
    name: "अनंत गिते",
    count: "4,25,568 (-82,784)",
    party: "शिवसेना (उद्धव बाळासाहेब ठाकरे)",
    result: "हरले"
  },
];

const Card = ({ image, name, count, result, party}) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>नाव: {name}</p>
      <p>मतदान: {count}</p>
      <p>पार्टी: {party}</p>
      <p>निकाल: {result}</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="background">
        <h1>रायगड निवडणूक</h1>
        <div className="container">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              count={card.count}
              result={card.result}
              party={card.party}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
