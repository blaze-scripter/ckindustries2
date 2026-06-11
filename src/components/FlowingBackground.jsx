import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/*
  Renders the oil-flow layer DIRECTLY into document.body via Portal,
  bypassing all React stacking contexts.
  z-index: 0 → sits above the white body background but below #root (z-index:1).
  Scroll parallax is driven by updating --scrollY on the wrapper.
*/
export default function FlowingBackground({ scrollEl }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = scrollEl?.current;
    if (!el) return;

    let rafId;
    let cur = 0, target = 0;

    const onScroll = () => { target = el.scrollTop; };
    el.addEventListener('scroll', onScroll, { passive: true });

    const tick = () => {
      cur += (target - cur) * 0.05;
      if (wrapRef.current) {
        wrapRef.current.style.setProperty('--scrollY', `${cur}px`);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [scrollEl]);

  const layer = (
    <div ref={wrapRef} className="oil-bg" style={{ '--scrollY': '0px' }}>
      <div className="oil-blob ob-1" />
      <div className="oil-blob ob-2" />
      <div className="oil-blob ob-3" />
      <div className="oil-blob ob-4" />
      <div className="oil-blob ob-5" />
      <div className="oil-blob ob-6" />
      <div className="oil-streak os-1" />
      <div className="oil-streak os-2" />
      <div className="oil-streak os-3" />
    </div>
  );

  // Render directly into body — escapes all React stacking contexts
  return createPortal(layer, document.body);
}
