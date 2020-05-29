import React from "react";

const ImageList = (props) => {
	const images = props.images.map(() => {
		return <img src={images.urls.regular} />;
	});

	return <div>ImageList</div>;
};

export default ImageList;
