const Shimmer = () => {
    return (
      <div className="flex flex-wrap gap-2" data-testid="shimmer">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="bg-gray-300 w-80 h-80 animate-shimmer"
              style={{
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
              }}
            ></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  