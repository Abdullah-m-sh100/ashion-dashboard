import { useState, useEffect } from "react";
import {
  MdSearch,
  MdFilterList,
  MdChevronLeft,
  MdChevronRight,
  MdCheckCircle,
  MdCancel,
  MdImage,
} from "react-icons/md";
import Table from "../../components/Table";
import "./style.css";
import { useProductsContext } from "../../contexts/useProductsContext";

export default function ProductDisplay() {
  const {
    productItems,
  } = useProductsContext();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showFilters, setShowFilters] = useState(false);

  // Apply filters and search whenever productItems or filters change
  useEffect(() => {
    let result = [...productItems];

    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (priceFilter !== "all") {
      switch (priceFilter) {
        case "under100":
          result = result.filter((p) => p.price < 100);
          break;
        case "100to500":
          result = result.filter((p) => p.price >= 100 && p.price <= 500);
          break;
        case "500to1000":
          result = result.filter((p) => p.price >= 500 && p.price <= 1000);
          break;
        case "over1000":
          result = result.filter((p) => p.price > 1000);
          break;
        default:
          break;
      }
    }

    if (statusFilter !== "all") {
      result = result.filter((p) => p.status === statusFilter);
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [searchTerm, priceFilter, statusFilter, productItems]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setPriceFilter("all");
    setStatusFilter("all");
  };

  const ProductImage = ({ product }) => (
    <div className="product-image-cell">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="product-thumbnail"
        />
      ) : (
        <div className="product-image-placeholder">
          <MdImage size={24} />
        </div>
      )}
    </div>
  );

  const StatusBadge = ({ status }) => (
    <span className={`status-badge ${status}`}>
      {status === "available" ? (
        <>
          <MdCheckCircle size={14} />
          Available
        </>
      ) : (
        <>
          <MdCancel size={14} />
          Unavailable
        </>
      )}
    </span>
  );

  const columns = [
    {
      key: "image",
      title: "Image",
      width: "80px",
      align: "center",
      render: (row) => <ProductImage product={row} />,
    },
    {
      key: "name",
      title: "Product Name",
      width: "200px",
      render: (row) => (
        <div className="product-name-cell">
          <span className="product-name">{row.name}</span>
          <span className="product-description">{row.description}</span>
        </div>
      ),
    },
    {
      key: "price",
      title: "Price",
      width: "120px",
      align: "center",
      render: (row) => (
        <span className="product-price">
          ${row.price ? row.price.toLocaleString() : "0.00"}
        </span>
      ),
    },
    {
      key: "status",
      title: "Status",
      width: "120px",
      align: "center",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Products Management</h1>
        <p>Manage your product inventory</p>
      </div>

      <div className="products-controls">
        <div className="search-bar">
          <MdSearch size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search by product name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <button
          className="filter-toggle-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          <MdFilterList size={20} />
          Filters
          {(priceFilter !== "all" || statusFilter !== "all") && (
            <span className="filter-badge">●</span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label className="filter-label">Price Range</label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Prices</option>
              <option value="under100">Under $100</option>
              <option value="100to500">$100 - $500</option>
              <option value="500to1000">$500 - $1000</option>
              <option value="over1000">Over $1000</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <button onClick={resetFilters} className="reset-filters-btn">
            Reset Filters
          </button>
        </div>
      )}

      <div className="products-summary">
        <span>
          Showing {currentItems.length} of {filteredProducts.length} products
        </span>
      </div>

      <Table columns={columns} data={currentItems} />

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            <MdChevronLeft size={20} />
            Previous
          </button>

          <div className="pagination-pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`pagination-page ${currentPage === page ? "active" : ""}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next
            <MdChevronRight size={20} />
          </button>
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found matching your criteria</p>
          <button onClick={resetFilters} className="reset-btn">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
