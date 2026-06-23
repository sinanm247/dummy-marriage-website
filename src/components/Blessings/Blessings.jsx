import './Blessings.scss'
import line2Sage from '../../assets/Vectors/line-2-gold.png'

function Blessings() {
  return (
    <section className="blessings">
      <div className="blessings__inner">
      <img src={line2Sage} className="vec-divider blessings__divider" alt="" aria-hidden="true" />
        <p className="blessings__arabic arabic">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <p className="blessings__translation section-kicker">
          In the Name of Allah, the Most Gracious, the Most Merciful.
        </p>
        <blockquote className="blessings__quote soft-card">
          <p className="blessings__verse serif">
            &ldquo;And among His signs is that He created for you spouses from among
            yourselves so that you may find tranquility in them.&rdquo;<br/> &mdash; Qur&apos;an 30:21
          </p>
        </blockquote>
      </div>
    </section>
  )
}

export default Blessings
