import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TutorList() {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");

  const fetchTutors = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/tutors?subject=${search}`
      );
      setTutors(data);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Find a Tutor</h1>

      <input
        type="text"
        placeholder="Search by subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      <button
        onClick={fetchTutors}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {tutors.map((tutor) => (
          <Link
            key={tutor._id}
            to={`/tutors/${tutor._id}`}
            className="p-4 border rounded shadow hover:bg-gray-50 transition block"
          >
            <h2 className="font-bold text-lg">{tutor.name}</h2>
            <p className="text-gray-600">{tutor.bio}</p>
            <p className="text-sm mt-2">
              Subjects: {tutor.subjects?.join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TutorList;
