export default function CircularSpinner() {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        border: "3px solid white",
        borderRadius: "50%",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)",
      }}
      className="animate-spin mr-2"
    />
  );
}
