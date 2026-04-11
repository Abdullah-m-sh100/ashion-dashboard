import { useState, useEffect } from "react";
import { ProductsContext } from "./productsContext";
import { product_data } from "../mock/data";

import { v4 as uuidv4 } from "uuid";

const PRODUCTS_STORAGE_KEY = "product_items";

export default function ProductsProvider({ children }) {
  const [productItems, setProductItems] = useState(() => {
    try {
      const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      // ✅ إذا كان هناك بيانات مخزنة استخدمها، وإلا استخدم البيانات الافتراضية
      return stored ? JSON.parse(stored) : product_data;
    } catch {
      return product_data; // ✅ في حالة الخطأ استخدم البيانات الافتراضية
    }
  });

  // ✅ حفظ التغييرات فقط في localStorage
  useEffect(() => {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(productItems));
  }, [productItems]); // ✅ هذا صحيح الآن لأنه لا يوجد setProductItems داخله

  // ✅ إضافة منتج جديد
  const addProduct = (item) => {
    setProductItems((prevItems) => {
      const newId = uuidv4();
      const newProduct = {
        id: newId,
        ...item,
        createdAt: new Date().toISOString(),
      };
      return [...prevItems, newProduct];
    });
  };

  // ✅ حذف منتج
  const removeProduct = (id) => {
    setProductItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  // ✅ تعديل منتج
  const updateProduct = (id, updatedData) => {
    setProductItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, ...updatedData, updatedAt: new Date().toISOString() }
          : item,
      ),
    );
  };

  // ✅ الحصول على منتج معين
  const getProductById = (id) => {
    return productItems.find((item) => item.id === id);
  };

  // ✅ حذف جميع المنتجات
  const deleteAllProducts = () => {
    if (window.confirm("Are you sure you want to delete all products?")) {
      setProductItems([]);
    }
  };

  // ✅ إعادة تعيين للبيانات الافتراضية (اختياري)
  const resetToDefaultProducts = () => {
    if (window.confirm("Reset to default products?")) {
      setProductItems(product_data);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        productItems,
        productCount: productItems.length,
        addProduct,
        removeProduct,
        updateProduct,
        getProductById,
        deleteAllProducts,
        resetToDefaultProducts, // ✅ إضافة خيار إعادة التعيين
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
