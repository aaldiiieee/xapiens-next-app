"use client";

import { useEffect, useState } from "react";
import callReqResAPI from "../api/callReqResAPI";

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
    <div className="bg-white p-6 rounded-lg w-full shadow-[#000_8px_8px_0px_0px] overflow-auto">
      <div className="shadow-[#000_6px_6px_0px_0px] rounded p-4 inline-block mb-4 border border-black">
        <h1 className="text-2xl font-bold">User List</h1>
      </div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <table className="w-full border border-gray-300">
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
                    <Link
                      href={`/user-detail/${user.id}`}
                      className="btn__submit text-white text-sm"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="px-4 py-2 text-sm text-black rounded disabled:text-gray-400"
            >
              Prev
            </button>
            <span className="text-gray-700 text-sm">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="px-4 text-sm py-2 text-black rounded disabled:text-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UsersPage;
