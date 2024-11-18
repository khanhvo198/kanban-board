export const CircleWithColor = ({ color }: { color: string }) => {
  return (
    <div
      style={{ color, width: "8px", height: "8px", borderRadius: "50%" }}
    ></div>
  );
};
