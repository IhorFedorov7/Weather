import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "38bc58ebb03ecd22a9f140c86d402269";

class App extends React.Component {

    gettingWeather = async () => {
        const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
    }

    render() {
        return (
            <div>
                <Info />
                <Form />
                <Weather />
            </div>
        );
    }
}

export default App;