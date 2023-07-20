import React from "react";
import styles from "./Filter.module.css";
export default function Filter({
  selected,
  setSelected,
  brandFunction,
  colorFunction,
}) {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelected({ ...selected, [name]: checked });
  };

  return (
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
    </div>
  );
}
