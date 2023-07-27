import React from "react";
import styles from "./Filter.module.css";
export default function Filter({ filter, setFilter, show }) {
  return (
    <>
      {show && (
        <div className={styles.mainBox}>
          <div>
            <p className={styles.Filter}>Filter By Gender</p>
            <input
              type="checkbox"
              id="men"
              value="men"
              checked={filter.gender.includes("men")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    gender: [...filter.gender, e.target.value],
                  });
                } else {
                  if (filter.gender.includes(e.target.value)) {
                    const newgenderArr = filter.gender.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, gender: newgenderArr });
                  }
                }
              }}
            />
            <label htmlFor="gender">Men</label>
            <br></br>
            <input
              type="checkbox"
              id="women"
              value="women"
              checked={filter.gender.includes("women")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    gender: [...filter.gender, e.target.value],
                  });
                } else {
                  if (filter.gender.includes(e.target.value)) {
                    const newgenderArr = filter.gender.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, gender: newgenderArr });
                  }
                }
              }}
            />
            <label htmlFor="gender">Women</label>
          </div>
          <div>
            <p className={styles.Filter}>Filter by Brand</p>
            <input
              type="checkbox"
              id="jadeblue"
              value={"JadeBlue"}
              checked={filter.brand.includes("JadeBlue")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    brand: [...filter.brand, e.target.value],
                  });
                } else {
                  if (filter.brand.includes(e.target.value)) {
                    const newBrandArr = filter.brand.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, brand: newBrandArr });
                  }
                }
              }}
            />
            <label htmlFor="jadeblue">JadeBlue</label>
            <br></br>
            <input
              type="checkbox"
              id="cantabil"
              value={"Cantabil"}
              checked={filter.brand.includes("Cantabil")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    brand: [...filter.brand, e.target.value],
                  });
                } else {
                  if (filter.brand.includes(e.target.value)) {
                    const newBrandArr = filter.brand.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, brand: newBrandArr });
                  }
                }
              }}
            />
            <label htmlFor="cantabil">Cantabil</label>
            <br></br>
            <input
              type="checkbox"
              id="SELECTED HOMME"
              value={"SELECTED HOMME"}
              checked={filter.brand.includes("SELECTED HOMME")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    brand: [...filter.brand, e.target.value],
                  });
                } else {
                  if (filter.brand.includes(e.target.value)) {
                    const newBrandArr = filter.brand.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, brand: newBrandArr });
                  }
                }
              }}
            />
            <label htmlFor="SELECTED HOMME">SELECTED HOMME</label>
            <br></br>
            <input
              type="checkbox"
              id="Metal"
              value={"Metal"}
              checked={filter.brand.includes("Metal")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    brand: [...filter.brand, e.target.value],
                  });
                } else {
                  if (filter.brand.includes(e.target.value)) {
                    const newBrandArr = filter.brand.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, brand: newBrandArr });
                  }
                }
              }}
            />
            <label htmlFor="Metal">Metal</label>
            <br></br>
          </div>
          <div>
            <p className={styles.Filter}>Filter by Color</p>
            <input
              type="checkbox"
              id="Blue"
              value={"Blue"}
              checked={filter.color.includes("Blue")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    color: [...filter.color, e.target.value],
                  });
                } else {
                  if (filter.color.includes(e.target.value)) {
                    const newcolorArr = filter.color.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, color: newcolorArr });
                  }
                }
              }}
            />
            <label htmlFor="Blue">Blue</label>
            <br></br>
            <input
              type="checkbox"
              id="Grey"
              value={"Grey"}
              checked={filter.color.includes("Grey")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    color: [...filter.color, e.target.value],
                  });
                } else {
                  if (filter.color.includes(e.target.value)) {
                    const newcolorArr = filter.color.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, color: newcolorArr });
                  }
                }
              }}
            />
            <label htmlFor="Grey">Grey</label>
            <br></br>
            <input
              type="checkbox"
              id="Black"
              value={"Black"}
              checked={filter.color.includes("Black")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    color: [...filter.color, e.target.value],
                  });
                } else {
                  if (filter.color.includes(e.target.value)) {
                    const newcolorArr = filter.color.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, color: newcolorArr });
                  }
                }
              }}
            />
            <label htmlFor="Black">Black</label>
            <br></br>
            <input
              type="checkbox"
              id="White"
              value={"White"}
              checked={filter.color.includes("White")}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    color: [...filter.color, e.target.value],
                  });
                } else {
                  if (filter.color.includes(e.target.value)) {
                    const newcolorArr = filter.color.filter((el) => {
                      if (el !== e.target.value) {
                        return el;
                      }
                    });
                    setFilter({ ...filter, color: newcolorArr });
                  }
                }
              }}
            />
            <label htmlFor="White">White</label>
            <br></br>
          </div>
          <div>
            <p className={styles.Filter}>Filter by Price</p>
            <input
              type="checkbox"
              id="less than 1000"
              checked={filter.price.some(
                (el) => el.min === 0 && el.max === 1000
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    price: [...filter.price, { min: 0, max: 1000 }],
                  });
                } else {
                  const newpriceArr = filter.price.filter((el) => {
                    if (el.min !== 0 && el.max !== 1000) {
                      return el;
                    }
                  });
                  setFilter({ ...filter, price: newpriceArr });
                }
              }}
            />
            <label htmlFor="less than 1000">Less than ₹ 1000</label>
            <br></br>
            <input
              type="checkbox"
              id="1000 to 2000"
              checked={filter.price.some(
                (el) => el.min === 1000 && el.max === 2000
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    price: [...filter.price, { min: 1000, max: 2000 }],
                  });
                } else {
                  const newpriceArr = filter.price.filter((el) => {
                    if (el.min !== 1000 && el.max !== 2000) {
                      return el;
                    }
                  });
                  setFilter({ ...filter, price: newpriceArr });
                }
              }}
            />
            <label htmlFor="1000 to 2000">₹1000 - ₹2000</label>
            <br></br>
            <input
              type="checkbox"
              id="2000 to 5000"
              checked={filter.price.some(
                (el) => el.min === 2000 && el.max === 5000
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    price: [...filter.price, { min: 2000, max: 5000 }],
                  });
                } else {
                  const newpriceArr = filter.price.filter((el) => {
                    if (el.min !== 2000 && el.max !== 5000) {
                      return el;
                    }
                  });
                  setFilter({ ...filter, price: newpriceArr });
                }
              }}
            />
            <label htmlFor="2000 to 5000">₹2000 - ₹5000</label>
            <br></br>
            <input
              type="checkbox"
              id="more than 5000"
              checked={filter.price.some(
                (el) => el.min === 5000 && el.max === 500000
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter({
                    ...filter,
                    price: [...filter.price, { min: 5000, max: 500000 }],
                  });
                } else {
                  const newpriceArr = filter.price.filter((el) => {
                    if (el.min !== 5000 && el.max !== 500000) {
                      return el;
                    }
                  });
                  setFilter({ ...filter, price: newpriceArr });
                }
              }}
            />
            <label htmlFor="more than 5000">More than ₹5000</label>
            <br></br>
          </div>
          <div>
            <p className={styles.Filter}>Sort By Price</p>
            <select
              value={
                filter.sort === "asc"
                  ? "option1"
                  : filter.sort === "desc"
                  ? "option2"
                  : ""
              }
              onChange={(e) => {
                if (e.target.value === "option1") {
                  setFilter({ ...filter, sort: "asc" });
                } else if (e.target.value === "option2") {
                  setFilter({ ...filter, sort: "desc" });
                }
              }}
            >
              <option value={""}>Sort By Price</option>
              <option value={"option1"}>Low to High</option>
              <option value={"option2"}>High to Low</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
