import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import UserProvider from "./context/UserContext";
import magnifying from './assets/icon/magnifying-glass.png'
import Hero from "./components/Hero";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const searchRef = useRef();

  // FETCH API (WAJIB)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  // SEARCH (useRef)
  const handleSearch = () => {
    const keyword = searchRef.current.value.toLowerCase();
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(keyword)
    );
    setFilteredUsers(result);
  };

  return (
  <UserProvider> <div className="bg-gray-50 min-h-screen"> <Navbar />
  <Hero/>


    <div className="max-w-6xl mx-auto pt-12 p-6">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">
        Professional Directory
      </h1>
      <p className="text-gray-600 leading-lg text-lg mb-6">
        Connect with industry leaders and innovative professionals across our global <br></br> network  of  verified talent.

        search
      </p>

      {/* SEARCH */}
      <div className="w-full md:w-[60%] border border-gray-300 focus-within:border-blue-500 border-2 bg-white rounded-xl flex items-center justify-between mb-6">
        <img src={magnifying} alt="search" className="w-5 ml-3 mr-2 h-5" />
        <input
          ref={searchRef}
          onChange={handleSearch}
          placeholder="Search user..."
          className="w-full p-3 focus:outline-none bg-transparent rounded-xl"
        />
      </div>
   

      {/* CARD GRID */}
      <div className="grid md:grid-cols-4 gap-4  lg:h-[1000px]">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={setSelectedUser}
          />
        ))}
      </div>
    </div>

    {selectedUser && (
      <Modal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    )}

    <Footer />
  </div>
  </UserProvider>


  );
}


