import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Phone",
      subcategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Laptop",
      subcategories: ["Subcategory 1",  "Subcategory 3","Subcategory 1"],
    },
    {
        cateImg: "./images/category/cat3.png",
        cateName: "Electronic",
        subcategories: ["Subcategory 1",  "Subcategory 3"],
      },
      {
        cateImg: "./images/category/cat4.png",
        cateName: "Air Phone",
        subcategories: ["Subcategory 1",  "Subcategory 3"],
      },
      {
        cateImg: "./images/category/cat5.png",
        cateName: "Watch",
        subcategories: ["Subcategory 1",  "Subcategory 3"],
      },
      {
        cateImg: "./images/category/cat6.png",
        cateName: "CPU",
        subcategories: ["Subcategory 1",  "Subcategory 7","Subcategory 1",  "Subcategory 7"],
      },
      {
        cateImg: "./images/category/cat7.png",
        cateName: "Mouse",
        subcategories: ["Subcategory 1",  "Subcategory 7","Subcategory 1",  "Subcategory 7"],
      },
      {
        cateImg: "./images/category/cat8.png",
        cateName: "SamSung",
        subcategories: ["Subcategory 1",  "Subcategory 7","Subcategory 1",  "Subcategory 7"],
      },
      {
        cateImg: "./images/category/cat9.png",
        cateName: "Table",
        subcategories: ["Subcategory 1",  "Subcategory 7","Subcategory 1",  "Subcategory 7"],
      },
      {
        cateImg: "./images/category/cat10.png",
        cateName: "Chair",
        subcategories: ["Subcategory 1",  "Subcategory 7","Subcategory 1",  "Subcategory 7"],
      },
      {
        cateImg: "./images/category/cat11.png",
        cateName: "Internet",
        subcategories: ["Subcategory 1",  "Subcategory 7","Subcategory 1",  "Subcategory 7"],
      },
    
  ];

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div
              className="box f_flex"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
              {activeIndex === index && (
                <div className="dropdown-menu">
                  {/* Dropdown menu content */}
                  <ul>
                    {value.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>{subcategory}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
