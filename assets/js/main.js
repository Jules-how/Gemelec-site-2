/* ============================================================
   GemElec — main.js
   Sticky nav · Dropdown menus · Mobile nav · Scroll animations
   ============================================================ */

(function () {
  'use strict';

  /* --- Sticky nav ----------------------------------------- */
  function initStickyNav() {
    const nav = document.getElementById('site-nav');
    if (!nav) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          nav.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load in case page is already scrolled
  }

  /* --- Desktop dropdown menus ----------------------------- */
  function initDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item--dropdown');
    if (!dropdownItems.length) return;

    dropdownItems.forEach(function (item) {
      const trigger  = item.querySelector('.nav-dropdown-trigger');
      const dropdown = item.querySelector('.nav-dropdown');
      if (!trigger || !dropdown) return;

      let closeTimer = null;

      function openDropdown() {
        clearTimeout(closeTimer);
        // Close any other open dropdowns
        dropdownItems.forEach(function (other) {
          if (other !== item) other.classList.remove('open');
        });
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }

      function closeDropdown() {
        closeTimer = setTimeout(function () {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        }, 120);
      }

      // Mouse
      item.addEventListener('mouseenter', openDropdown);
      item.addEventListener('mouseleave', closeDropdown);
      dropdown.addEventListener('mouseenter', function () { clearTimeout(closeTimer); });
      dropdown.addEventListener('mouseleave', closeDropdown);

      // Keyboard: Enter/Space on trigger
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (item.classList.contains('open')) {
            closeDropdown();
          } else {
            openDropdown();
          }
        }
        if (e.key === 'Escape') {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!item.contains(e.target)) {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  /* --- Mobile nav ----------------------------------------- */
  function initMobileNav() {
    const hamburger = document.querySelector('.nav-hamburger');
    const overlay   = document.getElementById('nav-mobile-overlay');
    if (!hamburger || !overlay) return;

    function toggle() {
      const isOpen = hamburger.classList.toggle('active');
      overlay.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function close() {
      hamburger.classList.remove('active');
      overlay.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggle);

    // Close on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    // Mobile accordion sub-menus
    const mobileAccordions = overlay.querySelectorAll('.mobile-nav-link[data-accordion]');
    mobileAccordions.forEach(function (btn) {
      const targetId = btn.getAttribute('data-accordion');
      const subnav   = document.getElementById(targetId);
      if (!subnav) return;

      btn.addEventListener('click', function () {
        const isOpen = subnav.classList.toggle('open');
        btn.classList.toggle('open', isOpen);
        btn.setAttribute('aria-expanded', isOpen);
      });
    });
  }

  /* --- Scroll reveal animations --------------------------- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* --- Active nav link ------------------------------------ */
  function initActiveNav() {
    const path  = window.location.pathname.replace(/\/$/, '') || '/';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(function (link) {
      const href = link.getAttribute('href').replace(/\/$/, '') || '/';
      if (href === path || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active');
      }
    });
  }

  /* --- Ticker duplicate (ensure seamless loop) ------------ */
  function initTicker() {
    const track = document.querySelector('.ticker__track');
    if (!track) return;
    // The track needs two copies of .ticker__inner for seamless loop
    // This is handled in HTML, but we verify here
    const inners = track.querySelectorAll('.ticker__inner');
    if (inners.length === 1) {
      const clone = inners[0].cloneNode(true);
      track.appendChild(clone);
    }
  }

  /* --- Init all ------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initStickyNav();
    initDropdowns();
    initMobileNav();
    initScrollReveal();
    initActiveNav();
    initTicker();
  });

})();
