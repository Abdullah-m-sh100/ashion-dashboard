import { useState, useEffect } from "react";
import {
  MdEdit,
  MdDelete,
  MdVerifiedUser,
  MdPerson,
  MdFilterList,
} from "react-icons/md";
import Table from "../../components/Table";
import "./style.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchUsers = async () => {
      setTimeout(() => {
        const mockUsers = [
          {
            id: 1,
            name: "Ahmed Mohamed",
            email: "ahmed@example.com",
            role: "Admin",
            avatar: null,
            joinDate: "2024-01-15",
          },
          {
            id: 2,
            name: "Sara Khaled",
            email: "sara@example.com",
            role: "User",
            avatar: null,
            joinDate: "2024-02-20",
          },
          {
            id: 3,
            name: "Mohamed Ali",
            email: "mohamed@example.com",
            role: "User",
            avatar: null,
            joinDate: "2024-03-10",
          },
          {
            id: 4,
            name: "Nora Ahmed",
            email: "nora@example.com",
            role: "Admin",
            avatar: null,
            joinDate: "2024-01-05",
          },
        ];
        setUsers(mockUsers);
        setFilteredUsers(mockUsers);
      }, 1000);
    };

    fetchUsers();
  }, []);

  // Apply filter when roleFilter changes
  useEffect(() => {
    if (roleFilter === "all") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter((user) => user.role === roleFilter));
    }
  }, [roleFilter, users]);

  // Change user role
  const handleRoleChange = (userId, newRole) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, role: newRole } : user,
    );
    setUsers(updatedUsers);
    setEditingUser(null);
    console.log(`User ${userId} role changed to ${newRole}`);
  };

  // Delete user
  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      console.log(`User ${userId} deleted`);
    }
  };

  // User info component with avatar
  const UserInfo = ({ user }) => (
    <div className="user-info">
      <div className="user-avatar">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} />
        ) : (
          <div className="avatar-placeholder">{user.name.charAt(0)}</div>
        )}
      </div>
      <div className="user-details">
        <span className="user-name">{user.name}</span>
      </div>
    </div>
  );

  // Role cell component with edit functionality
  const RoleCell = ({ user }) => {
    const isEditing = editingUser === user.id;

    const getRoleBadge = (role) => {
      if (role === "Admin") {
        return (
          <span className="role-badge admin">
            <MdVerifiedUser size={16} />
            Admin
          </span>
        );
      }
      return (
        <span className="role-badge user">
          <MdPerson size={16} />
          User
        </span>
      );
    };

    if (isEditing) {
      return (
        <div className="role-edit">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="role-select"
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <button
            onClick={() => handleRoleChange(user.id, selectedRole)}
            className="save-role-btn"
          >
            Save
          </button>
          <button
            onClick={() => setEditingUser(null)}
            className="cancel-edit-btn"
          >
            Cancel
          </button>
        </div>
      );
    }

    return (
      <div className="role-display">
        {getRoleBadge(user.role)}
        <button
          onClick={() => {
            setEditingUser(user.id);
            setSelectedRole(user.role);
          }}
          className="edit-role-btn"
          title="Change role"
        >
          <MdEdit size={16} />
        </button>
      </div>
    );
  };

  // Define table columns
  const columns = [
    {
      key: "name",
      title: "User",
      render: (row) => <UserInfo user={row} />,
    },
    {
      key: "email",
      title: "Email Address",
    },
    {
      key: "role",
      title: "Role",
      render: (row) => <RoleCell user={row} />,
    },
    {
      key: "joinDate",
      title: "Join Date",
      render: (row) => new Date(row.joinDate).toLocaleDateString("en-US"),
    },
    {
      key: "actions",
      title: "Actions",
      align: "center",
      render: (row) => (
        <button
          onClick={() => handleDeleteUser(row.id)}
          className="delete-user-btn"
          title="Delete user"
        >
          <MdDelete size={18} />
        </button>
      ),
    },
  ];

  return (
    <div className="users-page">
      <div className="users-header">
        <h1>User Management</h1>
        <div className="users-stats">
          <span>Total Users: {users.length}</span>
          <span>Admins: {users.filter((u) => u.role === "Admin").length}</span>
          <span>Members: {users.filter((u) => u.role === "User").length}</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-container">
          <MdFilterList size={20} className="filter-icon" />
          <label className="filter-label">Filter by Role:</label>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Users</option>
            <option value="Admin">Admins Only</option>
            <option value="User">Users Only</option>
          </select>
        </div>
        <div className="filter-results">
          Showing {filteredUsers.length} of {users.length} users
        </div>
      </div>

      <Table columns={columns} data={filteredUsers} />
    </div>
  );
}
