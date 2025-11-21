
export default function Profile({ type }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>{type === "tutor" ? "Tutor Profile" : "Student Profile"}</h2>
      <p>This is a placeholder profile. Replace with your real profile UI.</p>
    </div>
  );
}
