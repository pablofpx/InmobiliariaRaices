document.addEventListener("scroll", () => {
    const container = document.querySelector('.carrusel_container_venta');

    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            container.classList.remove('hidden');
            container.classList.add('visible');
        }
      });
    });
  
    // Observe the container
    observer.observe(container);
  });


document.addEventListener("scroll", () => {
    const container = document.querySelector('.fotos_propiedades');

    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            container.classList.remove('hidden');
            container.classList.add('visible');
        }
      });
    });
  
    // Observe the container
    observer.observe(container);
  });

document.addEventListener("scroll", () => {
    const container = document.querySelector('.carrusel_container');

    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            container.classList.remove('hidden');
            container.classList.add('visible');
        }
      });
    });
  
    // Observe the container
    observer.observe(container);
  });


  document.addEventListener("scroll", () => {
    const container = document.querySelector('.fotos_propiedades_venta');

    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            container.classList.remove('hidden');
            container.classList.add('visible');
        }
      });
    });
  
    // Observe the container
    observer.observe(container);
  });



