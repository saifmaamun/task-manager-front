import { useState } from "react";

const categories = ["To Do", "On Progress", "Done"];

const CategorySlider = ({
  onCategoryChange,
}: {
  onCategoryChange: (category: string) => void;
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="category-slider">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "active" : ""}
          onClick={() => {
            setActiveCategory(category);
            onCategoryChange(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySlider;
