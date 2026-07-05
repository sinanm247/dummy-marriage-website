import './CoupleDetails.scss'
import flowerLineSage from '../../assets/Vectors/flower-line-sage.png'
import couple1 from '../../assets/Images/Couples-1.png'

function CoupleDetails() {
  return (
    <section className="couples">
      <div className="couples__inner">

        <div className="couples__header">
          <img src={flowerLineSage} className="couples__strip" alt="" aria-hidden="true" />
          <p className="section-kicker couples__kicker">Together With Our Families</p>
          <h2 className="couples__title serif">Two Hearts Joined in Love</h2>
        </div>

        <div className="couples__grid">

          {/* ── Couple — Ibrahim & Mariam ── */}
          <article className="couples__card couples__card--landscape">
            <img src={couple1} alt="Ibrahim & Mariam" className="couples__card-img portrait" />
            <div className="couples__card-overlay" />
            <div className="couples__card-text">
              <p className="section-kicker couples__card-kicker">With Joy &amp; Love</p>
              <h3 className="couples__name serif">Ibrahim Al-Rashid</h3>
              <p className="couples__and serif">&amp;</p>
              <h3 className="couples__name serif">Mariam Zainab</h3>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default CoupleDetails
