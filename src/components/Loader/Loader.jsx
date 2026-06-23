import './Loader.scss'
import raIcon from '../../assets/Elements/R-A-Icon.png'
import flIcon from '../../assets/Elements/F-L-Icon.png'

function Loader({ fading }) {
  return (
    <div className={`loader${fading ? ' loader--fading' : ''}`}>

      {/* ── Left door — R & A icon ── */}
      <div className="loader__door loader__door--left">
        <div className="loader__corner loader__corner--tl" />
        <div className="loader__corner loader__corner--bl" />
        <img src={raIcon} alt="R & A" className="loader__door-icon" />
      </div>

      {/* ── Right door — F & L icon ── */}
      <div className="loader__door loader__door--right">
        <div className="loader__corner loader__corner--tr" />
        <div className="loader__corner loader__corner--br" />
        <img src={flIcon} alt="F & L" className="loader__door-icon" />
      </div>

      {/* ── Interlocking rings seal at center seam ── */}
      <div className="loader__seal">
        <svg
          className="loader__rings-svg"
          viewBox="0 0 72 44"
          fill="none"
          aria-hidden="true"
          style={{ overflow: 'visible' }}
        >
          {/* Rings — drawn sequentially */}
          <circle className="loader__ring-path loader__ring-path--l" cx="22" cy="22" r="18" />
          <circle className="loader__ring-path loader__ring-path--r" cx="50" cy="22" r="18" />
          {/* Diamonds — pop in after their ring finishes */}
          <polygon className="loader__diamond loader__diamond--l" points="22,-3 28,4 22,11 16,4" />
          <polygon className="loader__diamond loader__diamond--r" points="50,-3 56,4 50,11 44,4" />
        </svg>
      </div>

    </div>
  )
}

export default Loader
