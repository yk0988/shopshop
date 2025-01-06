import React from "react";

const ComNice = (props) => {
  const { imgUrl, title, content, price } = props.nice;
  console.log(props);
  return (
    <div className="col-md-4">
      <img src={imgUrl} width="80%" />
      <h5>{title}</h5>
      <span>{content}</span>
      <p>{price}</p>
    </div>
  );
};

export default ComNice;
