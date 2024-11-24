import React, { useState, useEffect } from 'react';

function LocalStorage() {
  const [name, setName] = useState('');

  // Load the name from localStorage when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  // Save the name to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  const handleRemoveLocalstorage = () =>{
    localStorage.removeItem('name');
    localStorage.clear()
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>

      <button onClick={handleRemoveLocalstorage}>Reset</button>
    </div>
  );
}

export default LocalStorage;
