import "./LocationSelector.css";
import {cities} from "../../../../Utils/CityList.ts";
import {Button, FormControl, MenuItem, Select, type SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import {weatherAndForecastService} from "../../../../Services/WeatherAndForecastService.ts";
import SearchIcon from '@mui/icons-material/Search';

export function LocationSelector() {

    const [selectedCity, setSelectedCity] = useState("")


    function handleChange(event: SelectChangeEvent) {
        setSelectedCity(event.target.value);
    }


    async function searchWeather() {
        await weatherAndForecastService.getWeather(selectedCity);
        await weatherAndForecastService.getForecast(selectedCity);
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


                <Button
                    className="search-btn"
                    type="button"
                    style={{ backgroundColor: "#ffffff", color: "#1e5b8c" }}
                    variant="contained"
                    onClick={searchWeather}
                    startIcon={<SearchIcon />}
                >
                    Search
                </Button>
        </div>
    );
}
