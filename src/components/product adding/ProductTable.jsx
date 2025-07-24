import "./ProductTable.css";
import { useState, useEffect, useRef } from "react";

const ProductTable = () => {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [openFilter, setOpenFilter] = useState(null); 
  const [selectedStatus, setSelectedStatus] = useState("All");

  const modalRef = useRef();
  const filterRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }

      if (openFilter && filterRef.current && !filterRef.current.contains(event.target)) {
        setOpenFilter(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal, openFilter]);

  const products = [
    {
      id: "#19583325",
      name: "Paracetamol 500mg",
      supplier: "PharmaCare",
      quantity: 211,
      expiry: "5-10-2025",
      status: "In Stock",
      price: "96 LE",
    },
    {
      id: "#19583326",
      name: "Azithral 500 Tablet",
      supplier: "PharmaCare",
      quantity: 0,
      expiry: "5-10-2025",
      status: "Out Of Stock",
      price: "96 LE",
    },
    {
      id: "#19583327",
      name: "Azithral 500 Tablet",
      supplier: "PharmaCare",
      quantity: 14,
      expiry: "5-10-2025",
      status: "Low In Stock",
      price: "96 LE",
    },
  ];

  const filteredProducts = selectedStatus === "All"? products : products.filter((product) => product.status === selectedStatus);

  return (
    <div className="product-table-container">
      <div className="topbar">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>

        <div className="buttons" ref={filterRef}>
          <button className="add-btn">
            <i className="fas fa-plus"></i> Add New Product
          </button>

          {/* Filter by Stock Status */}
          <div className="filter-dropdown">
            <button className="filter-btn" onClick={() => setOpenFilter(openFilter === "stock" ? null : "stock") }>
              <i className="fas fa-sliders-h"></i> Filters
            </button>

            {openFilter === "stock" && (
              <div className="filter-options">
                <button onClick={() => setSelectedStatus("All")}>All</button>
                <button onClick={() => setSelectedStatus("In Stock")}>In Stock</button>
                <button onClick={() => setSelectedStatus("Out Of Stock")}>Out Of Stock</button>
                <button onClick={() => setSelectedStatus("Low In Stock")}>Low In Stock</button>
              </div>
            )}
          </div>

          {/* Filter by Date */}
          <div className="filter-dropdown">
            <button className="filter-btn" onClick={() => setOpenFilter(openFilter === "date" ? null : "date")} >
              <i className="fas fa-chevron-down"></i> This Month
            </button>

            {openFilter === "date" && (
              <div className="filter-options">
                <button>Today</button>
                <button>This Week</button>
                <button>This Month</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>MEDICINE ID</th>
            <th>MEDICINE NAME</th>
            <th>SUPPLIER</th>
            <th>QUANTITY</th>
            <th>EXPIRY DATE</th>
            <th>STATUS</th>
            <th>PRICE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.supplier}</td>
              <td>{product.quantity}</td>
              <td>{product.expiry}</td>
              <td>
                <span className={`status ${product.status.toLowerCase().replace(/\s/g, "-")}`} >{product.status}</span>
              </td>
              <td>{product.price}</td>
              <td className="actions">
                <i className="far fa-eye" onClick={openModal}></i>
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalRef}>
            <button className="close-btn" onClick={closeModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src="/images/product.png" alt="Product" className="modal-img" />
            <div className="modal-info">
              <div className="category">
                <p className="link">
                  <i className="fas fa-link"></i> Pain Relief & Anti-Inflammatories
                </p>
                <p className="status in-stock">In Stock</p>
              </div>
              <p className="name">
                Pfizer Paracetamol 500mg Film Coated Tablets 24 Pack
              </p>
              <div className="modal-price">
                <p className="p-border"><span>Strip:</span> 20 Tablets</p>
                <p className="price">96 LE</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="pagination">
        <p className="showing-pages">
          Showing
          <select>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select> of 375 results
        </p>
        <div className="pages">
          <button disabled>Previous</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
