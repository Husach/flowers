import React from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

const Select = ({options, handleChange, selected, name}) => (
    <SelectField
        className="Select"
        value={selected}
        floatingLabelText={name}
        onChange={handleChange}
    >
        {options.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    value={item.value}
                    primaryText={item.primaryText}
                />
            );
        })}
        </SelectField>
);

Select.propTypes = {
    options: PropTypes.array,
    handleChange: PropTypes.func,
    selected: PropTypes.number,
    name: PropTypes.string
};

export default Select;
