import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const Select = ({options, handleChange, selected, name}) => {
    return (
      <SelectField
          className="Select"
          floatingLabelText={name}
          value={selected}
          onChange={handleChange}>
              {options.map((item, index) =>
                  <MenuItem
                      key={index}
                      value={item.value}
                      primaryText={item.primaryText}
                  />
              )}
      </SelectField>
    );
  };

export default Select;
