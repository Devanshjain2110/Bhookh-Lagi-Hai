export const Shimmer = () => {
  return (
    <div className="Restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="Shimmer-card"></div>
        ))}
    </div>
  );
};
