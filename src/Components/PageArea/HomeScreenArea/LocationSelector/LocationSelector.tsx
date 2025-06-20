import "./LocationSelector.css";
import {cities} from "../../../../Utils/CityList.ts";
import {FormControl, MenuItem, Select, type SelectChangeEvent} from "@mui/material";
import {useState} from "react";

export function LocationSelector() {

    const [selectedCity, setSelectedCity] = useState("")

    function handleChange(event: SelectChangeEvent) {
        setSelectedCity(event.target.value);
    }

    return (
        <div className="LocationSelector">

            <FormControl className="city-form-control">
                <Select
                    className="city-select"
                    displayEmpty
                    fullWidth
                    value={selectedCity}
                    onChange={handleChange}
                    MenuProps={
                        {
                            PaperProps: {
                                className: "city-menu-paper"
                            }
                        }
                    }
                >
                    <MenuItem value="" disabled>Select Israeli city</MenuItem>
                    {
                        cities.map(
                            (city: string) => {
                                return (

                                    <MenuItem key={city} value={city}>
                                        {city}
                                    </MenuItem>
                                );
                            }
                        )
                    }
                </Select>
            </FormControl>
        </div>
    );
}
