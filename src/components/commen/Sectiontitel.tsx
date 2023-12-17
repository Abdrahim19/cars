import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import React from "react";

type prop = {
  title: string,
  to?: string,
  link?: boolean
}

const SectionTitle: React.FC<prop> = ({ link, title, to }) => {
  return (
    <section className={`${styles.flexBetween} mb-6`}>
      {title && (
        <>
          <h1 className="text-2xl capitalize ">{title}</h1>
          {link && (
            <Link className="cursor-pointer text-sm underline text-blue-600 duration-200 transition-colors hover:text-opacity-70" to={to as string}>
              Voir tout
            </Link>
          )}
        </>
      )}
    </section>
  );
}

export default SectionTitle;