import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function TransitionLink({ to, children, className = "", onClick }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    if (onClick) {
      onClick();
    }

    /*
      If already on same page,
      don't replay transition.
    */

    if (window.location.pathname === to) {
      window.scrollTo(0, 0);
      return;
    }

    const panel = document.querySelector(".page-transition");

    if (!panel) {
      navigate(to);
      return;
    }

    /*
      Start panel below screen.
    */

    gsap.set(panel, {
      yPercent: 100,
    });

    gsap.to(panel, {
      yPercent: 0,

      duration: 0.8,

      ease: "power4.inOut",

      onComplete: () => {
        window.scrollTo(0, 0);

        navigate(to);
      },
    });
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default TransitionLink;
