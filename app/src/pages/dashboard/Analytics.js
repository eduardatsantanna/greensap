export const Analytics = (props) => {
  return (
    <div className="charts">
        <div className="charts-area">
            <img src={`${process.env.PUBLIC_URL}/assets/${props.user.type !== "nonprofit" ? "user_map.jpeg" : "user_charts.jpeg"}`} alt="user data" />
        </div>
        <p className="caption">Provided by Sap Analytics Cloud</p>
    </div>
  );
};