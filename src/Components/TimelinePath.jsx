const TimelinePath = () => {
  return (
    <div className="fixed left-6 top-0 h-full z-50">
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="h-full w-20"
      >
        <path
          d="M 50 0 C 50 200, 50 400, 50 600 S 50 800, 50 1000"
          stroke="#7B9E6D"
          strokeWidth="2"
          strokeDasharray="10 10"
          fill="transparent"
        />
        {[0, 200, 400, 600, 800, 1000].map((cy, index) => (
          <circle key={index} cx="50" cy={cy} r="5" fill="#7B9E6D" />
        ))}
      </svg>
    </div>
  );
};

export default TimelinePath;
