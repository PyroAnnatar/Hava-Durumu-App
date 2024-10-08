import { useState } from "react";
import "./styles.css";

/* Challenge

Hava durumu verileri şu anda JSX'e sabit olarak kodlanmıştır. Göreviniz, uygulamanın dinamik olabilmesi için JavaScript aracılığıyla eklemektir. 
      
    1. Günün şu anda Pazartesi, Salı veya Çarşamba olarak ayarlanmış olmasına bağlı olarak, uygulama aşağıdakiler için doğru öğeleri otomatik olarak görüntülemek üzere durumu kullanmalıdır:
        - arka plan resmi
        - emoji simgesi (☀️, 🌧️ veya ❄️)
        - hava durumu
        - düşük & yüksek sıcaklıklar
        - haftanın günü
    
    2. Test butonuna tıkladığınızda, uygulama bir sonraki gün için yukarıda listelenen doğru öğelerin tümünü weatherData array'inde göstermelidir: Pazartesi -> Salı -> Çarşamba -> Pazartesi, vb. 
    
    3. WeatherData array taşınabilir, ancak başka bir şekilde değiştirilmemelidir. 
       
    4. Kod düzenli ve kolay anlaşılır olmalıdır. 
*/

// test
export default function App() {
  const weatherData = [
    {
      id: 0,
      day: "Pazartesi",
      condition: "Güneşli",
      lowTemp: 20,
      highTemp: 38,
    },
    {
      id: 1,
      day: "Salı",
      condition: "Yağmurlu",
      lowTemp: 8,
      highTemp: 15,
    },
    {
      id: 2,
      day: "Çarşamba",
      condition: "Karlı",
      lowTemp: -5,
      highTemp: 3,
    },
  ];

  const [data, setData] = useState(weatherData[0]);

  function handleNext() {
    setData((prev) => {
      const index = weatherData.findIndex((item) => item.id === prev.id);
      return weatherData[index + 1 < weatherData.length ? index + 1 : 0];
    });
  }

  const genZDictionary = {
    Güneşli: "☀️",
    Yağmurlu: "🌧️",
    Karlı: "❄️",
  };

  return (
    <div className={`app-container ${data.condition.toLowerCase()}-background`}>
      <div className="weather-container">
        <div className="icon">{genZDictionary[data.condition]}</div>
        <div className="condition-text">{data.condition}</div>
        <div className="temp-range-container">
          <div className="low-temp-container">
            <p className="low-temp-data">{data.lowTemp}</p>
            <p>En Düşük</p>
          </div>
          <div className="high-temp-container">
            <p className="high-temp-data">{data.highTemp}</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className="day">{data.day}</div>
      </div>
      <button onClick={handleNext}>Test</button>
    </div>
  );
}
