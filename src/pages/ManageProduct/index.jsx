import { useState, useEffect } from "react";
import { 
  MdEdit, 
  MdDelete, 
  MdSave, 
  MdCancel,
  MdClose,
  MdAttachMoney,
  MdDescription,
  MdCategory,
  MdCheckCircle,
  MdError,
  MdImage
} from "react-icons/md";
import "./style.css";
import { useProductsContext } from "../../contexts/useProductsContext";

export default function ManageProduct() {
  const {
    productItems,
    productCount,
    addProduct,
    removeProduct,
    updateProduct,
    getProductById,
    deleteAllProducts,
    resetToDefaultProducts,
  } = useProductsContext();


  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Edit form state
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    description: "",
    status: "available"
  });
  
  const [editErrors, setEditErrors] = useState({});

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchProducts = async () => {
      setTimeout(() => {
        const mockProducts = [
          {
            id: 1,
            name: "iPhone 14 Pro",
            price: 999,
            description: "Latest iPhone with dynamic island and A16 chip",
            image: null,
            stock: 15,
            status: "available",
            category: "Electronics"
          },
          {
            id: 2,
            name: "Samsung Galaxy S23",
            price: 899,
            description: "Premium Android smartphone with amazing camera",
            image: null,
            stock: 8,
            status: "available",
            category: "Electronics"
          },
          {
            id: 3,
            name: "Sony Headphones",
            price: 299,
            description: "Noise cancelling headphones with 30hr battery",
            image: null,
            stock: 0,
            status: "unavailable",
            category: "Audio"
          },
          {
            id: 4,
            name: "Apple Watch Series 8",
            price: 429,
            description: "Smartwatch with health monitoring features",
            image: null,
            stock: 5,
            status: "available",
            category: "Wearables"
          },
          {
            id: 5,
            name: "iPad Air",
            price: 599,
            description: "Powerful tablet for work and entertainment",
            image: null,
            stock: 0,
            status: "unavailable",
            category: "Electronics"
          }
        ];
        setProducts(mockProducts);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  // Auto-hide messages after 3 seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  // Handle edit form input changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "price") {
      const numericValue = value.replace(/[^0-9.]/g, '');
      setEditForm(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setEditForm(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field
    if (editErrors[name]) {
      setEditErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Validate edit form
  const validateEditForm = () => {
    const errors = {};
    
    if (!editForm.name.trim()) {
      errors.name = "Product name is required";
    } else if (editForm.name.length < 3) {
      errors.name = "Product name must be at least 3 characters";
    }
    
    if (!editForm.price) {
      errors.price = "Price is required";
    } else if (isNaN(editForm.price) || editForm.price <= 0) {
      errors.price = "Please enter a valid price";
    }
    
    if (!editForm.description.trim()) {
      errors.description = "Description is required";
    } else if (editForm.description.length < 10) {
      errors.description = "Description must be at least 10 characters";
    }
    
    setEditErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Open edit modal
  const openEditModal = (product) => {
    setEditingProduct(product);
    setEditForm({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      status: product.status
    });
    setEditErrors({});
  };

  // Close edit modal
  const closeEditModal = () => {
    setEditingProduct(null);
    setEditForm({ name: "", price: "", description: "", status: "available" });
    setEditErrors({});
  };

  // Save edited product
  const handleSaveEdit = async () => {
  if (!validateEditForm()) return;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    updateProduct(editingProduct.id, {
      name: editForm.name,
      price: parseFloat(editForm.price),
      description: editForm.description,
      status: editForm.status,
    });
    setSuccessMessage(`Product "${editForm.name}" updated successfully!`);
    closeEditModal();
  } catch (error) {
    setErrorMessage("Failed to update product. Please try again.");
  } 
};

  // Open delete confirmation modal
  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  // Close delete modal
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  // Confirm delete product
  const handleConfirmDelete = () => {
  removeProduct(productToDelete.id);
  setSuccessMessage(`Product "${productToDelete.name}" deleted successfully!`);
  closeDeleteModal();
};

  // Status badge component
  const StatusBadge = ({ status }) => (
    <span className={`manage-status-badge ${status}`}>
      {status === "available" ? "Available" : "Unavailable"}
    </span>
  );


  return (
    <div className="manage-product-page">
      <div className="manage-header">
        <h1>Manage Products</h1>
        <p>Edit or delete products from your inventory</p>
      </div>

      
      {successMessage && (
        <div className="manage-message success">
          <MdCheckCircle size={20} />
          <span>{successMessage}</span>
        </div>
      )}

      
      {errorMessage && (
        <div className="manage-message error">
          <MdError size={20} />
          <span>{errorMessage}</span>
        </div>
      )}

      
      <div className="products-grid">
        {productItems.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-card-image">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="card-image-placeholder">
                  <MdImage size={40} />
                </div>
              )}
            </div>
            
            <div className="product-card-content">
              <h3 className="product-card-title">{product.name}</h3>
              <p className="product-card-description">{product.description}</p>
              <div className="product-card-details">
                <span className="product-card-price">${product.price.toLocaleString()}</span>
                <StatusBadge status={product.status} />
              </div>
            </div>
            
            <div className="product-card-actions">
              <button
                onClick={() => openEditModal(product)}
                className="action-btn edit-btn"
                title="Edit product"
              >
                <MdEdit size={18} />
                Edit
              </button>
              <button
                onClick={() => openDeleteModal(product)}
                className="action-btn delete-btn"
                title="Delete product"
              >
                <MdDelete size={18} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {editingProduct && (
        <div className="modal-overlay" onClick={closeEditModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Edit Product</h2>
              <button className="modal-close" onClick={closeEditModal}>
                <MdClose size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label>Product Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    placeholder="Enter product name"
                    className={editErrors.name ? "error" : ""}
                  />
                  {editErrors.name && <span className="error-text">{editErrors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label>Price *</label>
                  <div className="price-input-wrapper">
                    <MdAttachMoney size={20} className="price-icon" />
                    <input
                      type="text"
                      name="price"
                      value={editForm.price}
                      onChange={handleEditChange}
                      placeholder="0.00"
                      className={editErrors.price ? "error" : ""}
                    />
                  </div>
                  {editErrors.price && <span className="error-text">{editErrors.price}</span>}
                </div>
                
                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={handleEditChange}
                    rows="4"
                    placeholder="Enter product description"
                    className={editErrors.description ? "error" : ""}
                  />
                  {editErrors.description && <span className="error-text">{editErrors.description}</span>}
                </div>
                
                <div className="form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    value={editForm.status}
                    onChange={handleEditChange}
                  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="modal-btn cancel" onClick={closeEditModal}>
                <MdCancel size={18} />
                Cancel
              </button>
              <button className="modal-btn save" onClick={handleSaveEdit}>
                <MdSave size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      
      {showDeleteModal && productToDelete && (
        <div className="modal-overlay" onClick={closeDeleteModal}>
          <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Confirm Delete</h2>
              <button className="modal-close" onClick={closeDeleteModal}>
                <MdClose size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="delete-warning">
                <MdDelete size={48} className="delete-icon" />
                <p>Are you sure you want to delete <strong>"{productToDelete.name}"</strong>?</p>
                <p className="delete-warning-text">This action cannot be undone.</p>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="modal-btn cancel" onClick={closeDeleteModal}>
                Cancel
              </button>
              <button className="modal-btn delete" onClick={handleConfirmDelete}>
                <MdDelete size={18} />
                Delete Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}