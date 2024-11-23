import Image from "next/image";
import Link from "next/link";
import axios from "axios";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default async function UserDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    const user: User = response.data.data;

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
          <div className="flex items-center justify-center mb-6">
            <Image
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-center text-gray-600 mb-4">{user.email}</p>
          <div className="text-center">
            <Link
              href="/"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Back to User List
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user detail:", error);
  }
}
