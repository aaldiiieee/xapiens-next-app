import Image from "next/image";
import Link from "next/link";
import callReqResAPI from "@/app/api/callReqResAPI";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserDetailProps {
  params: Promise<{ id: string }>;
}

export default async function UserDetail({ params }: UserDetailProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  try {
    const response = await callReqResAPI.get(`/users/${id}`);
    const user: User = response.data.data;

    return (
      <div className="bg-white p-6 rounded-lg shadow-[#000_6px_6px_0px_0px] w-full border-2 border-black">
        <div className="flex items-center gap-10 mb-6">
          <Image
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="flex flex-col w-full items-start">
            <h1 className="text-2xl font-bold mb-2">
              Hello, my name is {user.first_name} {user.last_name}
            </h1>
            <p className="text-gray-600 mb-4">
              {"Let's"} send an email to {" "}
              <Link className="hover:underline" href={`mailto:${user.email}`}>{user.email}</Link>
            </p>
            <div className="text-center">
              <Link href="/" className="px-4 py-2 btn__submit text-white">
                Back to User List
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user detail:", error);
    return <p>Error fetching user detail.</p>;
  }
}
