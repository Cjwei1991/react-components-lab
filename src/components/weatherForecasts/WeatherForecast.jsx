import './WeatherForecast.css';

const WeatherForecasts = (props) => {
    return (
        <div className="weather">
        <h2>{props.weekday.day}</h2>
        <img src={props.weekday.img} alt={props.weekday.imgAlt} />
        <p><span>conditions: </span>{props.weekday.conditions}</p>
        <p><span>time: </span>{props.weekday.time}</p>
      </div>
    );
  };
  
  export default WeatherForecasts;
  