"use client";

import { useEffect, useState } from "react";
import callReqResAPI from "./api/callReqResAPI";

import Link from "next/link";
import Image from "next/image";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await callReqResAPI.get(`/users?page=${page}`);
        const data = await response.data;
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3">Avatar</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-gray-300 hover:bg-gray-100"
                  >
                    <td className="p-3">
                      <Image
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        width={50}
                        height={50}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="p-3">{`${user.first_name} ${user.last_name}`}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">
                      <Link href={`/user-detail/${user.id}`}>View Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={page === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-700">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UsersPage;