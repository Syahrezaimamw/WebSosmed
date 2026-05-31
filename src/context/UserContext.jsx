import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
const [likedUsers, setLikedUsers] = useState([]);
const [followedUsers, setFollowedUsers] = useState([]);

const toggleLike = (id) => {
setLikedUsers((prev) =>
prev.includes(id)
? prev.filter((i) => i !== id)
: [...prev, id]
);
};

const toggleFollow = (id) => {
setFollowedUsers((prev) =>
prev.includes(id)
? prev.filter((i) => i !== id)
: [...prev, id]
);
};

return (
<UserContext.Provider
value={{ likedUsers, followedUsers, toggleLike, toggleFollow }}
>
{children}
</UserContext.Provider>
);
}
