import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Gallery.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SVG ICONS
========================================================= */

const RoomIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 7v12M21 11v8M3 16h18M6 12V9h5v3M11 12V9h5c2 0 5 1 5 4v3" />
  </svg>
);

const SofaIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
    <path d="M3 12a2 2 0 0 1 2-2h1v6h12v-6h1a2 2 0 0 1 2 2v6H3v-6Z" />
    <path d="M5 18v2M19 18v2" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 20c0-4 2.5-6 6-6s6 2 6 6M15 14c3.5 0 6 2 6 6" />
  </svg>
);

const DiningIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 3v8M9 3v8M6 7h3M7.5 11v10M16 3v18M16 3c3 2 4 5 4 8h-4" />
  </svg>
);

const TreeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="m12 3-5 7h3l-4 6h5v5h2v-5h5l-4-6h3l-5-7Z" />
  </svg>
);

const ImageIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="8" cy="9" r="1.5" />
    <path d="m5 17 4-4 3 3 3-4 4 5" />
  </svg>
);

const RefreshIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 7v5h-5" />
    <path d="M19 12a7 7 0 1 0-2 5" />
  </svg>
);

/* =========================================================
   DATA
========================================================= */

const categories = [
  {
    id: "all",
    label: "All Photos",
    icon: null,
  },
  {
    id: "rooms",
    label: "Rooms",
    icon: <RoomIcon />,
  },
  {
    id: "amenities",
    label: "Amenities",
    icon: <SofaIcon />,
  },
  {
    id: "common",
    label: "Common Areas",
    icon: <UsersIcon />,
  },
  {
    id: "dining",
    label: "Dining",
    icon: <DiningIcon />,
  },
  {
    id: "outdoor",
    label: "Outdoor",
    icon: <TreeIcon />,
  },
];

const galleryData = [
  {
    id: 1,
    title: "Spacious & Comfortable Rooms",
    category: "rooms",
    count: 12,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    title: "Study Room",
    category: "amenities",
    count: 8,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    title: "Common Lounge",
    category: "common",
    count: 10,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 4,
    title: "Dining Area",
    category: "dining",
    count: 7,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 5,
    title: "Modern Kitchen",
    category: "dining",
    count: 6,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 6,
    title: "Outdoor Space",
    category: "outdoor",
    count: 9,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 7,
    title: "Fitness Room",
    category: "amenities",
    count: 6,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 8,
    title: "Corridor",
    category: "common",
    count: 7,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 9,
    title: "At Night",
    category: "outdoor",
    count: 8,
    size: "large",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 10,
    title: "Reception",
    category: "common",
    count: 4,
    size: "small",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 11,
    title: "Laundry Area",
    category: "amenities",
    count: 5,
    size: "small",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 12,
    title: "Parking Area",
    category: "amenities",
    count: 5,
    size: "small",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 13,
    title: "Rooftop View",
    category: "outdoor",
    count: 6,
    size: "small",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 14,
    title: "Washroom",
    category: "amenities",
    count: 6,
    size: "small",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=90",
  },
];

/* =========================================================
   GALLERY
========================================================= */

function Gallery() {
  const pageRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  /* =====================================================
     GSAP
  ===================================================== */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO */

      const heroTl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTl
        .fromTo(
          ".gallery-hero-image",
          {
            scale: 1.15,
          },
          {
            scale: 1,
            duration: 1.6,
          },
        )
        .from(
          ".gallery-hero h1",
          {
            opacity: 0,
            y: 70,
            duration: 0.9,
          },
          "-=1",
        )
        .from(
          ".gallery-title-line",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.7,
          },
          "-=0.55",
        )
        .from(
          ".gallery-hero p",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4",
        );

      /* HERO PARALLAX */

      gsap.to(".gallery-hero-image", {
        yPercent: 12,
        scale: 1.05,
        ease: "none",

        scrollTrigger: {
          trigger: ".gallery-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* FILTER */

      gsap.fromTo(
        ".gallery-filter-bar",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,

          scrollTrigger: {
            trigger: ".gallery-filter-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /* CARDS */

      gsap.fromTo(
        ".gallery-item",
        {
          opacity: 0,
          y: 55,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.07,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, pageRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  /* =====================================================
     FILTER ANIMATION
  ===================================================== */

  const changeCategory = (category) => {
    if (category === activeCategory) return;

    const cards = pageRef.current?.querySelectorAll(".gallery-item");

    if (!cards?.length) {
      setActiveCategory(category);
      return;
    }

    gsap.to(cards, {
      opacity: 0,
      y: 20,
      scale: 0.98,
      duration: 0.25,
      stagger: 0.015,

      onComplete: () => {
        setActiveCategory(category);

        requestAnimationFrame(() => {
          const newCards = pageRef.current?.querySelectorAll(".gallery-item");

          if (!newCards?.length) return;

          gsap.fromTo(
            newCards,
            {
              opacity: 0,
              y: 35,
              scale: 0.96,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.55,
              stagger: 0.05,
              ease: "power3.out",
            },
          );

          ScrollTrigger.refresh();
        });
      },
    });
  };

  return (
    <main ref={pageRef} className="gallery-page">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="gallery-hero">
        <img
          className="gallery-hero-image"
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90"
          alt="Nestify hostel lounge"
        />

        <div className="gallery-hero-overlay" />

        <div className="gallery-container gallery-hero-content">
          <h1>Gallery</h1>

          <span className="gallery-title-line" />

          <p>
            Explore the spaces that make
            <br />
            Nestify Hostel feel like home.
          </p>
        </div>
      </section>

      {/* =================================================
          FILTER
      ================================================= */}

      <section className="gallery-filter-section">
        <div className="gallery-container">
          <div className="gallery-filter-bar">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => changeCategory(category.id)}
                className={`gallery-filter-button ${
                  activeCategory === category.id ? "active" : ""
                }`}
              >
                {category.icon && (
                  <span className="gallery-filter-icon">{category.icon}</span>
                )}

                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          GALLERY GRID
      ================================================= */}

      <section className="gallery-content">
        <div className="gallery-container">
          <div className="gallery-grid">
            {filteredImages.map((item) => (
              <article
                key={item.id}
                className={`gallery-item ${
                  item.size === "small" ? "gallery-small" : "gallery-large"
                }`}
              >
                <img src={item.image} alt={item.title} />

                <div className="gallery-item-overlay" />

                <div className="gallery-card-content">
                  <h3>{item.title}</h3>

                  <div className="gallery-count">
                    <ImageIcon />

                    <span>{item.count}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {activeCategory === "all" && (
            <div className="load-more-wrapper">
              <button type="button" className="load-more-button">
                <span>Load More Photos</span>

                <RefreshIcon />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Gallery;
