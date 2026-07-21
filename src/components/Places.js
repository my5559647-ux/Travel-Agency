import Placedata from "./Placedata";
import "./PlaceStyle.css";

const Places = () => {
  return (
    <div className="places">
      <h1>Popular Deatinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <Placedata
        className="first-place"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano, located in Batangas, Philippines, is one of the country’s most active and fascinating volcanoes. It sits on an island within Taal Lake, forming a unique “volcano within a lake within a volcano” landscape. Despite its relatively small size, Taal has produced some of the most powerful eruptions in Philippine history, including the devastating events of 1754 and 2020. Its activity is closely monitored by PHIVOLCS due to the frequent volcanic unrest and hazards like ashfall, pyroclastic flows, and volcanic gas emissions. Today, Taal remains both a natural wonder and a reminder of the powerful geological forces shaping the Philippines."
        img1="https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
        img2="https://plus.unsplash.com/premium_photo-1721353413070-bb55c58138fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
      />

      <Placedata
        className="first-place-reverse"
        heading="Mt.Daguldul, Batangas"
        text="Mt. Daguldul in San Juan, Batangas, is a scenic coastal mountain rising about 672 meters above sea level. It’s a popular hiking destination known for its lush forests, gentle trails, and stunning views of the sea and nearby mountains. The trek usually begins at Laiya Beach and passes through local villages and Naambon Falls before reaching the summit. With its mix of nature, adventure, and ocean scenery, Mt. Daguldul offers an enjoyable and refreshing escape for both beginner and seasoned hikers.
        "
        img1="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
        img2="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
      />
    </div>
  );
};

export default Places;
