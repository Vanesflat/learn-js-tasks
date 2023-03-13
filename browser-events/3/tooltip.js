const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

document.addEventListener('mouseover', (evt) => {
  if (!evt.target.dataset.tooltip) {
    return;
  }

  tooltip.innerHTML = evt.target.dataset.tooltip;
  document.body.append(tooltip);

  const coordinates = evt.target.getBoundingClientRect();

  let top = coordinates.top - tooltip.offsetHeight;
  if (top < 0) {
    top = coordinates.top + evt.target.offsetHeight;
  }

  let left = coordinates.left + (evt.target.offsetWidth - tooltip.offsetWidth) / 2;
  if (left < 0) {
    left = 0;
  }

  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
});

document.addEventListener('mouseout', (evt) => {
  if (evt.target.dataset.tooltip) {
    return;
  }

  if (tooltip.innerHTML !== evt.target.dataset.tooltip) {
    tooltip.remove();
  }
});
