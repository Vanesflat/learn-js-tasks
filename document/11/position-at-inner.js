function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const positionAt = (anchor, position, elem) => {

  const anchorCoordinates = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.top = `${anchorCoordinates.top - elem.offsetHeight}px`;
      elem.style.left = `${anchorCoordinates.left}px`;
      break;

    case "right-out":
      elem.style.top = `${anchorCoordinates.top}px`;
      elem.style.left = `${anchorCoordinates.left + anchor.offsetWidth}px`;
      break;

    case "bottom-out":
      elem.style.top = `${anchorCoordinates.top + anchor.offsetHeight}px`;
      elem.style.left = `${anchorCoordinates.left}px`;
      break;

    case "top-in":
      elem.style.top = `${anchorCoordinates.top}px`;
      elem.style.left = `${anchorCoordinates.left}px`;
      break;

    case "right-in":
      elem.style.width = '150px';
      elem.style.top = `${anchorCoordinates.top}px`;
      elem.style.left = `${anchorCoordinates.left + anchor.offsetWidth - elem.offsetWidth}px`;
      break;

    case "bottom-in":
      elem.style.top = `${anchorCoordinates.top + anchor.offsetHeight - elem.offsetHeight}px`;
      elem.style.left = `${anchorCoordinates.left}px`;
      break;
  }

};
