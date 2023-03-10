const positionAt = (anchor, position, elem) => {
  const anchorCoordinates = anchor.getBoundingClientRect();

  switch (position) {
    case "top":
      elem.style.top = `${anchorCoordinates.top - elem.offsetHeight}px`;
      elem.style.left = `${anchorCoordinates.left}px`;
      break;

    case "right":
      elem.style.top = `${anchorCoordinates.top}px`;
      elem.style.left = `${anchorCoordinates.left + anchor.offsetWidth}px`;
      break;

    case "bottom":
      elem.style.top = `${anchorCoordinates.top + anchor.offsetHeight}px`;
      elem.style.left = `${anchorCoordinates.left}px`;
      break;
  }
};
