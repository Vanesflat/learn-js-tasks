const links = document.querySelectorAll('a');

links.forEach((link) => {
  const address = link.getAttribute('href');

  if (!address || !address.includes('://') || address.startsWith('http://internal.com')) {
    return;
  }

  link.style.color = 'orange';
});
