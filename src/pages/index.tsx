import Search from "@/components/molecules/search/search"
import Card, {CardProps} from "@/components/molecules/card/card"
import { useState } from "react";

const Home = () =>{

    const [card, setCard] = useState([
        {
            kota: "Jakarta",
            negara: "ID",
            tanggal: "2022-02-02",
            status: "Cloudy",
            suhuC: 33,
            feelSuhuC: 37,
            uv: 2,
            angin: 20,
            humadity: 60,
        }
    ]);

    const [kondisi, setKondisi] = useState(0)

    const fetchWeatherData = async (city: string) => {
        // Use fetch or your preferred HTTP library to hit the API
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5803f43848e34717b7a25556233008&q=${city}&aqi=yes`);

        if (response.status==200) {
            const data = await response.json();
            setKondisi(1)

            const updatedCard = [...card];

            updatedCard[0].kota = data.location.name
            updatedCard[0].negara = data.location.country
            updatedCard[0].tanggal = data.location.localtime
            updatedCard[0].status = data.current.condition.text
            updatedCard[0].suhuC = data.current.temp_c
            updatedCard[0].feelSuhuC = data.current.feelslike_c
            updatedCard[0].uv = data.current.uv
            updatedCard[0].angin = data.current.wind_mph
            updatedCard[0].humadity = data.current.humidity

            setCard(updatedCard);
        }else{
            setKondisi(2)
        }
    };

    return (
        <>
            <div className="flex justify-center mt-4">
                <h2 className="text-black text-2xl font-semibold">Check Weather</h2>
            </div>

            <Search onSubmit={fetchWeatherData}/>

            
            {(() => {
                if (kondisi === 1) {
                    return card.map((f) => (
                        <div key={f.kota}>
                            <Card {...f}/>
                        </div>
                    ))
                }else if(kondisi===2){
                    return (
                        <div className="w-1/2 mx-auto">
                            <div className="flex justify-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 mt-4" role="alert">
                                <span className="font-medium">Kota Tidak Ditemukan</span>
                            </div>
                        </div>
                    )
                }
            })()}
        </>
    )
}

export default Home