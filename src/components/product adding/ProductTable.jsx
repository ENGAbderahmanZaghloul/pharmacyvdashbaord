import "./ProductTable.css"; 
import { useState } from "react";
const ProductTable = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return(
      <div className="product-table-container">
        <div className="topbar">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="buttons">
            <button className="add-btn">
              <i className="fas fa-plus"></i> Add New Product
            </button>
            <button className="filter-btn">
              <i className="fas fa-sliders-h"></i> Filters
            </button>
            <button className="filter-btn">
              <i className="fas fa-chevron-down"></i> This Month
            </button>
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
            <tr>
              <td>#19583325</td>
              <td>Paracetamol 500mg</td>
              <td>PharmaCare</td>
              <td>211</td>
              <td>5-10-2025</td>
              <td><span className="status in-stock">In Stock</span></td>
              <td>96 LE</td>
              <td className="actions">
                <i className="far fa-eye" onClick={openModal}></i>
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </td>
            </tr>
                    <tr>
              <td>#19583325</td>
              <td>Azithral 500 Tablet</td>
              <td>PharmaCare</td>
              <td>0</td>
              <td>5-10-2025</td>
              <td><span className="status out-of-stock">Out Of Stock</span></td>
              <td>96 LE</td>
              <td className="actions">
                <i className="far fa-eye" onClick={openModal}></i>
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </td>
            </tr>
            <tr>
              <td>#19583325</td>
              <td>Azithral 500 Tablet</td>
              <td>PharmaCare</td>
              <td>14</td>
              <td>5-10-2025</td>
              <td><span className="status low-stock">Low In Stock</span></td>
              <td>96 LE</td>
              <td className="actions">
                <i className="far fa-eye" onClick={openModal}></i>
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>

        {/* pop up */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}><i class="fa-solid fa-xmark"></i></button>
              <img src="/images/product.png" alt="Product" className="modal-img"/>

              <div className="modal-info">
                <div className="category">
                    <p className="link"><i className="fas fa-link"></i>Pain Relief & Anti-Inflammatories</p>
                    <p className="status in-stock">In Stock</p>
                </div>
                <p className="name">Pfizer Paracetamol 500mg Film Coated Tablets 24 Pack</p>
                <div className="modal-price">
                    <p className="p-border"><span>Strip:</span> 20 Tablets</p>
                    <p className="price">96 LE</p>
                </div>
              </div>
              
            </div>
          </div>
        )}

        {/* PAGINATION */}
        <div className="pagination">
          <p className="showing-pages">Showing 
            <select>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select> of 375 results</p>
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
    )
};

export default ProductTable;
