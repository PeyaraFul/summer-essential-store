import React from "react";

const Tips = () => {
  return (
    <>
        <h1 className="text-3xl font-bold text-center">Summer Care Tips</h1>
    <div className="mx-auto grid grid-cols-3 gap-6 mt-6">

    

        <div className="card-body">
          <h2 className="card-title"> Stay Hydrated</h2>
          <ul className="list-disc list-inside">
            <li>Drink plenty of water (8–10 glasses daily)</li>
            <li>Use ORS or electrolyte drinks if sweating heavily</li>
            <li>
              Eat water-rich fruits like watermelon, cucumber, and oranges
            </li>
            <li>Avoid too much caffeine or sugary drinks</li>
          </ul>
        </div>

        <div className="card-body">
          <h2 className="card-title"> Protect Your Skin</h2>
          <ul className="list-disc list-inside">
            <li>Apply sunscreen SPF 30+ before going outside</li>
            <li>Use a gentle face wash twice daily</li>
            <li>Moisturize with lightweight gel-based creams</li>
            <li>Wear sunglasses and hats for UV protection</li>
            <li>Use aloe vera gel for sunburn relief</li>
          </ul>
        </div>
        <div className="card-body">
          <h2 className="card-title"> Clothing</h2>
          <ul className="list-disc list-inside">
            <li>Wear breathable cotton or linen clothes</li>
            <li>Choose light-colored outfits</li>
            <li>Use comfortable sandals or open shoes</li>
          </ul>
        </div>
        <div className="card-body">
          <h2 className="card-title"> Cooling Essentials</h2>
          <ul className="list-disc list-inside">
            <li>Use fans, AC, or portable cooling devices</li>
            <li>Take cool showers</li>
            <li>Stay indoors during peak heat hours (12 PM–4 PM)</li>
          </ul>
        </div>
        <div className="card-body">
          <h2 className="card-title"> Nutrition</h2>
          <ul className="list-disc list-inside">
            <li>Eat fresh fruits and vegetables</li>
            <li>Avoid oily or heavy foods</li>
            <li>Include yogurt or smoothies</li>
          </ul>
        </div>
        <div className="card-body">
          <h2 className="card-title"> Outdoor & Safety</h2>
          <ul className="list-disc list-inside">
            <li>Use swimming gear safely</li>
            <li>Carry water bottles</li>
            <li>Avoid prolonged sun exposure</li>
            <li>Keep children protected with hats and sunscreen</li>
          </ul>
        </div>
      
    </div>
    </>
  );
};

export default Tips;
