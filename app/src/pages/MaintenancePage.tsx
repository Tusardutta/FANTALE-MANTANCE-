import { useEffect } from 'react'

export default function MaintenancePage() {
  useEffect(() => {
    // Randomize orb starting positions slightly on each load for organic feel
    const orbs = document.querySelectorAll<HTMLElement>('.orb')
    orbs.forEach((orb) => {
      const offsetX = (Math.random() - 0.5) * 40
      const offsetY = (Math.random() - 0.5) * 40
      orb.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    })
  }, [])

  return (
    <>
      {/* Background */}
      <div className="bg-layer" />

      {/* Ambient Glow Orbs */}
      <div className="orb orb-cyan" />
      <div className="orb orb-pink" />
      <div className="orb orb-purple" />

      {/* Vignette */}
      <div className="vignette" />

      {/* Noise / Grain Overlay */}
      <div className="noise-overlay" />

      {/* Scanline */}
      <div className="scanline" />

      {/* Main Content */}
      <div className="main-container">
        <div className="maintenance-card">
          {/* Logo */}
          <h1 className="logo">FANTALE</h1>

          {/* Divider */}
          <div className="divider" />

          {/* Subheading */}
          <h2 className="subheading">System Under Maintenance</h2>

          {/* Support Text */}
          <p className="support-text">
            We're currently upgrading the system for a better anime, manga, manhwa, and webnovel experience.
            Please check back shortly.
          </p>

          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot">&#9679;</span>
            <span>Live Maintenance in Progress</span>
          </div>

          {/* Terminal Footer */}
          <p className="terminal-footer">// Servers rebooting &bull; Database syncing &bull; Deploying updates</p>
        </div>
      </div>
    </>
  )
}
