import React from 'react';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <main>
      <section className="M_section1">
        <article className="M_section1_a">
          <h2>Little Lemon</h2>
          <h1>Chicago</h1>
          <br />
          <p className="section1_p">
            We are a family owned a Mideterranean restaurant, focudes on
            traditional recipes served with a modern twist.
          </p>
          <button>
            <Link to="/booking" className="button_book">
              Book a Table
            </Link>
          </button>
        </article>
        <img
          src="./media/reserve.png"
          alt="reserve"
          className="m_section1_image"
        />
      </section>
      <section className="M_section2">
        <article className="M_section2_a">This Week Specials!</article>
        <button className="M_section2_b">Order Online</button>
      </section>
      <section className="M_section3">
        <section className="foods">
          <img
            src="./media/greek-salad"
            alt="Greek Salad"
            className="img_foods"
          />
          <h3 className="foodName">
            Greek Salad &nbsp;<span className="priceName">$ 12.99</span>
          </h3>
          <article className="M_section3_a">
            The famous greek salad of crispy lettuse, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </article>
          <button>
            <span>
              <DeliveryDiningOutlinedIcon />
            </span>
          </button>
        </section>
        <section className="foods">
          <img
            src="./media/bruchetta.jpg"
            alt="Bruchetta"
            className="img_foods"
          />
          <h3 className="foodName">
            Bruchetta &nbsp;<span className="priceName">$ 5.99</span>
          </h3>
          <article className="M_section3_a">
            Our Bruchetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </article>
          <button>
            <DeliveryDiningOutlinedIcon />
          </button>
        </section>
        <section className="foods">
          <img
            src="./media/lemon-desert"
            alt="Lemon Desert"
            className="img_foods"
          />
          <h3 className="foodName">
            Lemon Desert &nbsp;<span className="priceName">$ 5.00</span>
          </h3>
          <article className="M_section3_a">
            This comes straight from grandma's recipe book, every lsat ingrdient
            has been sourced and is as authentic as can be imagined.
          </article>
          <button>
            <DeliveryDiningOutlinedIcon />
          </button>
        </section>
      </section>
    </main>
  );
}
