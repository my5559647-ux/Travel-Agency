import "./TripStyle.css";
import Tripdata from "./Tripdata";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>
      <div className="tripcard">
        <Tripdata
          image="https://images.unsplash.com/photo-1564460549828-f0219a31bf90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwaW5kb25lc2lhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
          heading="Trip in Indonesia"
          text="Indonesia is a vast and diverse country in Southeast Asia made up of over 17,000 islands, including Java, Sumatra, Borneo, and Sulawesi. Its capital is Jakarta. Known for its rich culture, tropical landscapes, and active volcanoes, Indonesia offers a mix of stunning beaches, rainforests, and vibrant cities.
          "
        />
        <Tripdata
          image="https://images.unsplash.com/photo-1682668731868-8d82c15870aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwbWFsYXNoaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country known for its rich cultural diversity, modern cities, and natural beauty. It consists of two main regions — Peninsular Malaysia and East Malaysia on the island of Borneo. The capital city, Kuala Lumpur, is famous for landmarks like the Petronas Twin Towers, while the administrative center is Putrajaya.
          "
        />
        <Tripdata
          image="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.webp?a=1&b=1&s=612x612&w=0&k=20&c=XlwXc4XRPlMBfJVjuHwgS4WTPC4G8eJ9pGX_4ATfdQk="
          heading="Trip in France"
          text="France is a country in Western Europe known for its rich history, art, fashion, and cuisine. Its capital, Paris, is famous for landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. France is celebrated for its cultural influence, from literature and philosophy to fine dining and wine. Beyond Paris, the country offers beautiful landscapes
          "
        />
      </div>
    </div>
  );
}

export default Trip;
