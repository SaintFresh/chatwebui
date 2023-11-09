import React, { useState, useEffect, useMemo, useCallback } from 'react';
import '../styles/sidebar.css';

const models = [
  'gpt-4', 'gpt-4-0613', 'gpt-3.5-turbo-16k', 'gpt-3.5-turbo-16k-0613',
  'gpt-3.5-turbo', 'gpt-3.5-turbo-0613', 'gpt-3.5-turbo-instruct-0914',
  'text-davinci-003', 'text-curie-001', 'code-davinci-edit-001'
];

const settings = ['Temperature', 'Top P', 'Frequency Penalty', 'Presence Penalty'];

function Sidebar() {
  const [selectedModel, setSelectedModel] = useState('');
  const [maxLength, setMaxLength] = useState(250);
  const [maxTokens, setMaxTokens] = useState(8191);
  const [sliderValues, setSliderValues] = useState({
    Temperature: 1,
    'Top P': 1,
    'Frequency Penalty': 1,
    'Presence Penalty': 1,
  });

  useEffect(() => {
    switch (selectedModel) {
      case 'gpt-4':
      case 'gpt-4-0613':
        setMaxTokens(8191);
        break;
      case 'gpt-3.5-turbo-16k':
      case 'gpt-3.5-turbo-16k-0613':
        setMaxTokens(16384);
        break;
      default:
        setMaxTokens(4096);
    }
  }, [selectedModel]);

  const renderModelOptions = useMemo(() => models.map(model => (
    <option key={model} value={model}>
      {model}
    </option>
  )), []);

  const handleSliderChange = useCallback((setting) => (e) => {
    setSliderValues(prevValues => ({
      ...prevValues,
      [setting]: e.target.type === 'range' ? e.target.value : Number(e.target.value)
    }));
  }, []);

  const handleMaxLengthChange = useCallback((e) => {
    setMaxLength(e.target.value);
  }, []);

  const handleModelChange = useCallback((e) => {
    setSelectedModel(e.target.value);
  }, []);

  return (
    <div className="sidebar-container">
      <label className="config-label" htmlFor="model-select">Models</label>
      <select
        className="config-select"
        id="model-select"
        value={selectedModel}
        onChange={handleModelChange}
        required
      >
        <option value="" disabled>Choose One</option>
        {renderModelOptions}
      </select>

      {settings.map(setting => (
        <div key={setting} className="setting-container">
          <label className="config-label" htmlFor={`${setting}-slider`}>{setting}</label>
          <input
            type="range"
            className="slider config-input"
            id={`${setting}-slider`}
            min="0"
            max="2"
            step="0.01"
            value={sliderValues[setting]}
            onChange={handleSliderChange(setting)}
          />
          <input
            type="number"
            className="number-input config-input"
            id={`${setting}-input`}
            min="0"
            max="2"
            step="0.01"
            value={sliderValues[setting]}
            onChange={handleSliderChange(setting)}
          />
        </div>
      ))}

      <label className="config-label" htmlFor="max-length-slider">Max Length</label>
      <input
        type="range"
        className="slider config-input"
        id="max-length-slider"
        min="1"
        max={maxTokens}
        value={maxLength}
        onChange={handleMaxLengthChange}
      />
      <input
        type="number"
        className="number-input config-input"
        id="max-length-input"
        min="1"
        max={maxTokens}
        value={maxLength}
        onChange={handleMaxLengthChange}
      />
      <label className="config-label" htmlFor="stop-sequences-input">Stop Sequences</label>
      <input
        type="text"
        className="config-input"
        id="stop-sequences-input"
        placeholder="###"
        maxLength="3"
      />
      <label className="config-label" htmlFor="system-role-input">System Role</label>
      <textarea
        className="config-input"
        id="system-role-input"
        placeholder="Enter System Role..."
        rows="4"
      ></textarea>
      <button className="toggle-sidebar-button">Toggle Sidebar</button>
    </div>
  );
}

export default Sidebar;
