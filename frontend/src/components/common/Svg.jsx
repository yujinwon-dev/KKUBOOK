function Svg({ children, fill, stroke, viewBox }) {
  // fill은 none이 아닐 때, viewBox는 0 0 24 24가 아닐 때만 prop 줌
  // stroke는 값이 있을 경우 prop 줌
  return (
    <svg
      width="24"
      height="24"
      fill={fill || 'none'}
      stroke={stroke}
      viewBox={viewBox || '0 0 24 24'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export default Svg;
