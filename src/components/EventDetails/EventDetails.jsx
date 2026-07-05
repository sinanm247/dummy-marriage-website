import './EventDetails.scss'
import flowerLineGold from '../../assets/Vectors/flower-line-gold.png'

function EventDetails() {
  return (
    <section className="event">
      <div className="event__inner">

      <img src={flowerLineGold} className="vec-divider vec-divider--full event__strip" alt="" aria-hidden="true" />
        <div className="event__header">
          <p className="section-kicker event__kicker">The Celebration</p>
          <h2 className="event__title serif">Save the Date</h2>
        </div>

        <div className="event__card">
          <div className="event__cell">
            <p className="section-kicker event__label">Date</p>
            <p className="event__value serif">Monday, 27th July 2026</p>
          </div>
          <div className="event__cell">
            <p className="section-kicker event__label">Nikah</p>
            <p className="event__value serif">2:00 PM</p>
          </div>
          <div className="event__cell">
            <p className="section-kicker event__label">Reception</p>
            <p className="event__value serif">From 6:00 PM onwards</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EventDetails
