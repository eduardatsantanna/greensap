export const Analytics = (props) => {
  return (
    <div className="charts">
        <p className="title">{props.type === "user" ? "Map and Analytics" : "Charts and Analytics"}</p>
        <div className="charts-area">
            <img src={`${process.env.PUBLIC_URL}/assets/${props.type === "user" ? "user_map.jpeg" : "user_charts.jpeg"}`} alt="user data" />
        </div>
        <p className="caption">Provided by Sap Analytics Cloud</p>
    </div>
  );
};