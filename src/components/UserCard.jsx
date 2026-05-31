import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import mail from '../assets/icon/email.png'
import lokasi from '../assets/icon/placeholder.png'
import userrr from '../assets/icon/user (1).png'
import building from '../assets/icon/building.png'

export default function UserCard({ user, onClick }) {
    const { toggleLike, toggleFollow, likedUsers, followedUsers } =
        useContext(UserContext);

    const liked = likedUsers.includes(user.id);
    const followed = followedUsers.includes(user.id);

    return (
    <div className="user-card h-fit bg-white rounded-xl p-5 flex flex-col border border-gray-200 cursor-pointer 
shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

        <div className="flex items-start justify-between mb-3"> <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-medium text-xl text-blue-700"> <p>
                  {user.name.charAt(0)}
            </p>
            </div>
            <h3 className="font-semibold text-lg"> {user.name.length > 20 
    ? user.name.slice(0, 18) + "..." 
    : user.name}</h3>
        </div>


        </div>

        <div className="mb-4 font-medium">
            <p className="text-blue-700 mb-1">@{user.username}</p>

            <div className="flex items-center gap-1 mb-1 text-gray-500 text-sm">
                <img src={building} alt="company" className="w-4 h-4" />

                {user.company.name}
            </div>

            <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src={lokasi} alt="company" className="w-4 h-4" />

                {user.address.city}
            </div>
        </div>

        <div className="font-medium mt-auto pt-3 border-t flex flex-col gap-2">
            <a
                href={`mailto:${user.email}`}
                className="flex items-center mb-1 gap-2 text-sm text-gray-500 hover:text-blue-700"
            >
                <img src={mail} alt="email" className="w-4 h-4" />
                {user.email}
            </a>

             {/* ACTION */}
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">

        {/* LIKE */}
        <button
            onClick={() => toggleLike(user.id)}
            className={`flex cursor-pointer items-center gap-1 text-sm transition ${
                liked
                    ? "text-red-500 font-medium"
                    : "text-gray-500 hover:text-red-500"
            }`}
        >
            <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364 4.318 12.682a4.5 4.5 0 010-6.364z"/>
            </svg>
            {liked ? "Liked" : "Like"}
        </button>

        {/* FOLLOW */}
        <button
            onClick={() => toggleFollow(user.id)}
            className={`px-3 py-1.5 cursor-pointer text-sm rounded-full transition ${
                followed
                    ? "bg-gray-200 text-gray-700"
                    : "bg-blue-700 text-white hover:bg-blue-700"
            }`}
        >
            {followed ? "Following" : "Follow"}
        </button>
    </div>

    {/* DETAIL BUTTON */}
    <button
        onClick={() => onClick(user)}
        className="mt-3 text-sm cursor-pointer text-gray-500 hover:text-blue-700 transition text-left"
    >
        Lihat Detail →
    </button>

        </div>
    </div>


    );
}
