module.exports = {
  GetWeather: async (req, res) => {
    try {
      const city = req.params.city;
      // console.log(city);
      const url = `${process.env.WEATHER_API}?key=${process.env.WEATHER_APIKEY}&q=${city}&days=1`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Weather API request failed with status ${response.status}`
        );
      }

      const data = await response.json();
      const weatherData = {
        city: data.location.name,
        country: data.location.country,
        temp_c: data.current.temp_c,
        icon: data.current.condition.icon,
        condition: data.current.condition.text,
        humidity: data.current.humidity,
      };
      // console.log(weatherData);
      res.status(200).json({ message: "success", data: weatherData });
    } catch (err) {
      res.status(400).json({ message: "server failure..", error: err });
    }
  },
};
