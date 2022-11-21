import React from "react";

export const ButtonList = ({ categorias, filterCategories }) => {
  return (
    <div className="categorias">
      <nav class="navbar" variant="primary">
        <ul class="nav nav-pills">
          <li class="nav-item">
            {categorias.map((categoria) => (
              <button
                type="button"
                class="btn btn-dark btn-lg"
                onClick={() => filterCategories(categoria)}
                key={categoria}
              >
                {categoria}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
};
