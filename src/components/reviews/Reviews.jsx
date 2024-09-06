import CamperForm from "../camperForm/CamperForm";
import { LiaStarSolid } from "react-icons/lia";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <div className={css.container}>
      <ul>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
          <li key={reviewer_name}>
            <div className={css.title}>
              <h3 className={css.avatar}>{reviewer_name[0]}</h3>
              <h4 className={css.username}>
                <div>{reviewer_name}</div>
                <div>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      style={{
                        fontSise: "16px",
                        color: i < reviewer_rating ? "#ffc531" : "#f2f4f7",
                      }}
                    >
                      <LiaStarSolid />
                    </span>
                  ))}
                </div>
              </h4>
            </div>
            <p className={css.text}>{comment}</p>
          </li>
        ))}
      </ul>
      <CamperForm />
    </div>
  );
};

export default Reviews;
