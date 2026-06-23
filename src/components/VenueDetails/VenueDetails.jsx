import { MapPin, ExternalLink } from 'lucide-react'
import './VenueDetails.scss'
import venueImage from '../../assets/Images/Image-2.webp'
import line2Gold from '../../assets/Vectors/line-2-gold.png'

function VenueDetails() {
  return (
    <section className="venue">
      <div className="venue__inner">

        {/* ── Left: Arch image ── */}
        <div className="venue__frame">
          <img
            src={venueImage}
            alt="Wind Valley Resort venue"
            className="venue__img"
            loading="lazy"
          />
        </div>

        {/* ── Right: Details ── */}
        <div className="venue__text">
          <p className="section-kicker venue__kicker">The Venue</p>
          <h2 className="venue__title serif">Where We Gather</h2>
          {/* <img src={line2Gold} className="vec-divider venue__divider" alt="" aria-hidden="true" /> */}

          <div className="venue__card soft-card">
            <div className="venue__address">
              <span className="venue__pin-icon">
                <MapPin size={20} />
              </span>
              <div className="venue__address-text">
                <p className="venue__name serif">
                  Wind Valley Resort, Pady, Cherkala
                </p>
                <p className="venue__subtext">
                  Join us in celebrating this blessed day
                </p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/X2FGej1f9mn3WhJ96"
              className="venue__map-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>View on Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default VenueDetails
