import React from "react";
import styles from "./Filter.module.css";
export default function Filter({
  selected,
  setSelected,
  brandFunction,
  colorFunction,
  priceFunction,
  orderFunction,
  show,
}) {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelected({ ...selected, [name]: checked });
  };

  return (
    <>
      {show && (
        <div className={styles.mainBox}>
          <div>
            <p className={styles.Filter}>Filter By Gender</p>
            <input
              type="checkbox"
              id="men"
              name="men"
              checked={selected.men}
              onChange={handleCheckboxChange}
            />
            <label for="gender">Men</label>
            <br></br>
            <input
              type="checkbox"
              id="women"
              name="women"
              checked={selected.women}
              onChange={handleCheckboxChange}
            />
            <label for="gender">Women</label>
          </div>
          <div>
            <p className={styles.Filter}>Filter by Brand</p>
            <input
              type="checkbox"
              id="jadeblue"
              value={"JadeBlue"}
              onChange={(e) => {
                if (e.target.checked) {
                  brandFunction(e.target.value);
                } else brandFunction("");
              }}
            />
            <label for="jadeblue">JadeBlue</label>
            <br></br>
            <input
              type="checkbox"
              id="cantabil"
              value={"Cantabil"}
              onChange={(e) => {
                if (e.target.checked) {
                  brandFunction(e.target.value);
                } else brandFunction("");
              }}
            />
            <label for="cantabil">Cantabil</label>
            <br></br>
            <input
              type="checkbox"
              id="SELECTED HOMME"
              value={"SELECTED HOMME"}
              onChange={(e) => {
                if (e.target.checked) {
                  brandFunction(e.target.value);
                } else brandFunction("");
              }}
            />
            <label for="SELECTED HOMME">SELECTED HOMME</label>
            <br></br>
            <input
              type="checkbox"
              id="Metal"
              value={"Metal"}
              onChange={(e) => {
                if (e.target.checked) {
                  brandFunction(e.target.value);
                } else brandFunction("");
              }}
            />
            <label for="Metal">Metal</label>
            <br></br>
          </div>
          <div>
            <p className={styles.Filter}>Filter by Color</p>
            <input
              type="checkbox"
              id="Blue"
              value={"Blue"}
              onChange={(e) => {
                if (e.target.checked) {
                  colorFunction(e.target.value);
                } else colorFunction("");
              }}
            />
            <label for="Blue">Blue</label>
            <br></br>
            <input
              type="checkbox"
              id="Grey"
              value={"Grey"}
              onChange={(e) => {
                if (e.target.checked) {
                  colorFunction(e.target.value);
                } else colorFunction("");
              }}
            />
            <label for="Grey">Grey</label>
            <br></br>
            <input
              type="checkbox"
              id="Black"
              value={"Black"}
              onChange={(e) => {
                if (e.target.checked) {
                  colorFunction(e.target.value);
                } else colorFunction("");
              }}
            />
            <label for="Black">Black</label>
            <br></br>
            <input
              type="checkbox"
              id="White"
              value={"White"}
              onChange={(e) => {
                if (e.target.checked) {
                  colorFunction(e.target.value);
                } else colorFunction("");
              }}
            />
            <label for="White">White</label>
            <br></br>
          </div>
          <div>
            <p className={styles.Filter}>Filter by Price</p>
            <input
              type="checkbox"
              id="less than 1000"
              onChange={(e) => {
                if (e.target.checked) {
                  priceFunction({ min: 0, max: 1000 });
                } else priceFunction("");
              }}
            />
            <label for="less than 1000">Less than ₹ 1000</label>
            <br></br>
            <input
              type="checkbox"
              id="1000 to 2000"
              onChange={(e) => {
                if (e.target.checked) {
                  priceFunction({ min: 1000, max: 2000 });
                } else priceFunction("");
              }}
            />
            <label for="1000 to 2000">₹1000 - ₹2000</label>
            <br></br>
            <input
              type="checkbox"
              id="2000 to 5000"
              onChange={(e) => {
                if (e.target.checked) {
                  priceFunction({ min: 2000, max: 5000 });
                } else priceFunction("");
              }}
            />
            <label for="2000 to 5000">₹2000 - ₹5000</label>
            <br></br>
            <input
              type="checkbox"
              id="more than 5000"
              onChange={(e) => {
                if (e.target.checked) {
                  priceFunction({ min: 5000, max: 500000 });
                } else priceFunction("");
              }}
            />
            <label for="more than 5000">More than ₹5000</label>
            <br></br>
          </div>
          <div>
            <p className={styles.Filter}>Sort By Price</p>
            <select
              onChange={(e) => {
                if (e.target.value === "option1") {
                  orderFunction("asc");
                } else orderFunction("desc");
              }}
            >
              <option>Sort By Price</option>
              <option value={"option1"}>Low to High</option>
              <option value={"option2"}>High to Low</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
