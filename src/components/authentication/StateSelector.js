import React from "react";
import classes from "./Authentication.module.css";
import USStates from "../../assets/data/states.json";

const StateSelector = ({name, value, handleChange}) =>
    <select required className={"form-control " + classes.inputForm} id="state" name={name} value={value}
            onChange={handleChange}
            title="Please select State">
        <option value="" disabled>Select a state</option>
        {USStates.map(state =>
            <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>)}
    </select>

export default StateSelector;