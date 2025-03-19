import React, { useState, useEffect, useRef } from "react";
import { debounce } from "../utils/debounce";
import { Trie } from "../utils/trie";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userTrie = useRef(new Trie());

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);

        // Populate the Trie with user names
        const trie = new Trie();
        data.forEach((user) => trie.insert(user.name));
        userTrie.current = trie;

        setFilteredUsers(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Debounced search function
  const handleSearch = debounce((term) => {
    if (!term.trim()) {
      setFilteredUsers(users);
      return;
    }

    // Use Trie for efficient prefix search
    const matchedNames = userTrie.current.search(term);
    const matched = users.filter((user) =>
      matchedNames.some(
        (name) => name.toLowerCase() === user.name.toLowerCase()
      )
    );

    setFilteredUsers(matched);
  }, 300);

  // Handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <section className="user-section">
      <h2>Our Users</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>

      {isLoading ? (
        <div className="loading">Loading users...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="users-container">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div className="user-card" key={user.id}>
                <h3>{user.name}</h3>
                <p className="user-username">@{user.username}</p>
                <div className="user-details">
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Company:</strong> {user.company.name}
                  </p>
                  <p>
                    <strong>Website:</strong> {user.website}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              No users found matching "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default UserSearch;
