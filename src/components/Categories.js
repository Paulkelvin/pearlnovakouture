import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Categories.css";

import {
  FiHome,
  FiCamera,
  FiGlobe,
  FiCoffee,
  FiHeadphones,
  FiBookOpen,
  FiMusic,
  FiShoppingBag,
  FiDollarSign,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";
import "./Categories.css";

const categories = [
  { id: 1, category: "vintage", icon: <FiHome /> },
  { id: 2, category: "loafers", icon: <FiCamera /> },
  { id: 3, category: "Moccasin", icon: <FiGlobe /> },
  { id: 4, category: "Chelsea boot", icon: <FiCoffee /> },
  { id: 5, category: "Slides", icon: <FiHeadphones /> },
  { id: 6, category: "Sandals", icon: <FiBookOpen /> },
  { id: 7, category: "Mules", icon: <FiMusic /> },
  { id: 8, category: "Sneakers", icon: <FiShoppingBag /> },
  { id: 9, category: "Investing", icon: <FiDollarSign /> },
  { id: 10, category: "Fashion", icon: <FiHeadphones /> },
];

const Categories = ({ contents }) => {
  return (
    <BrowserRouter>
      <div className="categories-container">
        <div className="categories">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category"
            >
              <div className="icon">{category.icon}</div>
              <div className="name">{category.category}</div>
            </Link>
          ))}
        </div>
        <div className="filter-container">
          <div className="filter-button">
            <FiSearch />
            <span>Filters</span>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Categories;
