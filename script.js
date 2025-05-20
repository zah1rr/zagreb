    const navLinks = document.querySelectorAll(".horizontal a");
      const sections = [
        { id: "cups", link: null },
        { id: "sphagetties", link: null },
        { id: "home", link: null },
      ];

      // Map links to sections
      sections.forEach((section) => {
        section.link = Array.from(navLinks).find(
          (a) => a.getAttribute("href") === `#${section.id}`
        );
      });

      function onScroll() {
        let scrollPos = window.scrollY || window.pageYOffset;
        let offset = 100; // adjust for nav height if needed

        sections.forEach((section) => {
          const el = document.getElementById(section.id);
          if (el) {
            const top = el.offsetTop - offset;
            const bottom = top + el.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
              section.link && section.link.classList.add("active");
            } else {
              section.link && section.link.classList.remove("active");
            }
          }
        });
      }

      window.addEventListener("scroll", onScroll);
      onScroll();