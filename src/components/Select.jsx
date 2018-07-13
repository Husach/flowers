import React from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

const Select = ({options, handleChange, selected, name}) => (
    <SelectField
        className="Select"
        value={selected}
        floatingLabelText={name}
    >
        {options.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    value={item.value}
                    onClick={handleChange.bind(this, item.value)}
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
