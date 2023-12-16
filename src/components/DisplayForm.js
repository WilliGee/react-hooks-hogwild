import React from "react";

function DisplayForm({ toggleGreased, greased, onSortName}) {


return(
    <div className="form">
        <form >
            <label>
                Greased?
                <select name="Show-Greased-Only"
                    onChange={toggleGreased}
                    value={greased} >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </label>
            <label>
            Sort
                <select name="Sort-By-Name-or-Weight"
                onChange={onSortName}>
                    <option></option>
                    <option value="Name">Name</option>
                    <option value="Weight">Weight</option>
                </select>
            </label>
        </form >
    </div>
)
}

export default DisplayForm