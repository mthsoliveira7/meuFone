"use client";

export default function Button({ children, styles, title }) {
  const handleClick = () => {
    alert("Ainda não implementei essa função. :,(");
  };

  return (
    <button
      title={title}
      type="button"
      onClick={handleClick}
      className={`${styles}`}
    >
      {children}
    </button>
  );
}
