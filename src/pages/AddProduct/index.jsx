import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../contexts/useProductsContext";


import {
  MdSave,
  MdCancel,
  MdUpload,
  MdAttachMoney,
  MdDescription,
  MdCategory,
  MdCheckCircle,
  MdError,
} from "react-icons/md";
import "./style.css";

export default function AddProduct() {
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

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    imagePreview: null,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for price - numbers only
    if (name === "price") {
      const numericValue = value.replace(/[^0-9.]/g, "");
      const parts = numericValue.split(".");
      const formattedValue =
        parts[0] + (parts[1] !== undefined ? "." + parts[1].slice(0, 2) : "");

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear messages when user starts typing
    if (successMessage) setSuccessMessage("");
    if (errorMessage) setErrorMessage("");
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "Image size must be less than 5MB",
        }));
        return;
      }

      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          image: "Please upload a valid image (PNG, JPG, JPEG, WEBP)",
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Product Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Product name must be at least 3 characters";
    } else if (formData.name.length > 100) {
      newErrors.name = "Product name must be less than 100 characters";
    }

    // Price validation
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(formData.price) || formData.price <= 0) {
      newErrors.price = "Price must be a positive number";
    } else if (formData.price > 999999) {
      newErrors.price = "Price must be less than 1,000,000";
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    } else if (formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }

    // Image validation (optional but recommended)
    if (!formData.image) {
      newErrors.image = "Product image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    addProduct(formData)

    // // Clear previous messages
    // setSuccessMessage("");
    // setErrorMessage("");

    // if (!validateForm()) {
    //   // Scroll to top to show errors
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    //   return;
    // }

    // setLoading(true);

    // try {
    //   // Create FormData for API submission
    //   const submitData = new FormData();
    //   submitData.append("name", formData.name);
    //   submitData.append("price", parseFloat(formData.price));
    //   submitData.append("description", formData.description);
    //   if (formData.image) {
    //     submitData.append("image", formData.image);
    //   }

    //   // Simulate API call (replace with actual API)
    //   await new Promise((resolve) => setTimeout(resolve, 2000));

    //   // Mock successful response
    //   console.log("Product created:", {
    //     name: formData.name,
    //     price: formData.price,
    //     description: formData.description,
    //     image: formData.image?.name,
    //   });

    //   // Show success message
      setSuccessMessage("Product added successfully! Redirecting...");

    //   // Reset form after 2 seconds and redirect
      setTimeout(() => {
        navigate("/product-display", {
          state: { message: "Product created successfully!" },
        });
      }, 2000);
    // } catch (error) {
    //   console.error("Error creating product:", error);
    //   setErrorMessage("Failed to create product. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  // Reset form
  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset the form? All data will be lost.",
      )
    ) {
      setFormData({
        name: "",
        price: "",
        description: "",
        image: null,
        imagePreview: null,
      });
      setErrors({});
      setSuccessMessage("");
      setErrorMessage("");
    }
  };

  return (
    <div className="add-product-page">
      <div className="add-product-header">
        <h1>Add New Product</h1>
        <p>Fill in the details below to add a new product to your inventory</p>
      </div>

      {successMessage && (
        <div className="message success">
          <MdCheckCircle size={20} />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="message error">
          <MdError size={20} />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Product Name <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className={`form-input ${errors.name ? "error" : ""}`}
              disabled={loading}
            />
          </div>
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price <span className="required">*</span>
          </label>
          <div className="input-wrapper price-input">
            <MdAttachMoney size={20} className="input-icon" />
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              className={`form-input ${errors.price ? "error" : ""}`}
              disabled={loading}
            />
          </div>
          {errors.price && (
            <span className="error-message">{errors.price}</span>
          )}
          <span className="input-hint">Enter a valid price (numbers only)</span>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description (min. 10 characters)"
              rows="5"
              className={`form-textarea ${errors.description ? "error" : ""}`}
              disabled={loading}
            />
          </div>
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
          <span className="input-hint">
            {formData.description.length}/500 characters
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Product Image <span className="required">*</span>
          </label>

          <div className="image-upload-container">
            {formData.imagePreview ? (
              <div className="image-preview">
                <img src={formData.imagePreview} alt="Product preview" />
                <button
                  type="button"
                  className="remove-image-btn"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      image: null,
                      imagePreview: null,
                    }));
                    setErrors((prev) => ({ ...prev, image: "" }));
                  }}
                  disabled={loading}
                >
                  Remove Image
                </button>
              </div>
            ) : (
              <div className="upload-area">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/jpeg,image/png,image/jpg,image/webp"
                  onChange={handleImageChange}
                  className="file-input"
                  disabled={loading}
                />
                <label htmlFor="image" className="upload-label">
                  <MdUpload size={40} className="upload-icon" />
                  <div className="upload-text">
                    <span>Click to upload</span>
                    <span className="upload-subtext">or drag and drop</span>
                  </div>
                </label>
                <div className="upload-hint">
                  PNG, JPG, JPEG, WEBP (Max 5MB)
                </div>
              </div>
            )}
          </div>
          {errors.image && (
            <span className="error-message">{errors.image}</span>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner-small"></div>
                Adding Product...
              </>
            ) : (
              <>
                <MdSave size={18} />
                Add Product
              </>
            )}
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
            disabled={loading}
          >
            <MdCancel size={18} />
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}
