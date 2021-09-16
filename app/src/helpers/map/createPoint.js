export const createPoint = () => {


  const plantTree = {
    "type": "simple",
    "symbol": {
      "type": "picture-marker",
      "url": `${process.env.PUBLIC_URL}/assets/plant-tree.png`,
      "width": "18px",
      "height": "18px"
    }
  }
    
    return {
        type: "simple-marker",
        color: [10, 201, 89],
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      };

}
