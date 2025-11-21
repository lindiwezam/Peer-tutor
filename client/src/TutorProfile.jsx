import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TutorProfile() {
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);

    useEffect(() => {
        const fetchTutor = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/api/tutors/${id}`);
                setTutor(data);
            } catch (error) {
                console.error("Error fetching tutor:", error);
            }
        };
        fetchTutor();
    }, [id]);

    if (!tutor) return <p className="text-center mt-6">Loading tutor...</p>;

    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 border rounded shadow">
            <h1 className="text-3xl font-bold mb-2">{tutor.name}</h1>
            <p className="text-gray-600 mb-4">{tutor.bio}</p>
            <h3 className="font-semibold mb-1">Subjects:</h3>
            <p className="mb-4">{tutor.subjects.join(", ")}</p>

            <button
            onClick={() => alert('Booking request sent to ${tutor.name}!')}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mr-4"
            >
                Book a Session
            </button>

            <a
            href={'/chat/${tutor._id}'}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
                Message
            </a>
        </div>
    );
}

export default TutorProfile;