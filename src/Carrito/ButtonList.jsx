import React from "react";

export const ButtonList = ({ categorias, filterCategories }) => {
  return (
    <div className="categorias"> 
      {categorias.map((categoria) => (
        <button type="button" class="btn btn-dark btn-lg" onClick={() => filterCategories(categoria)} key={categoria}>
          {categoria}
        </button>
        ))} 
    </div>
  );
};
