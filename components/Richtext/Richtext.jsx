import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import styles from "./RichText.module.scss";

export const RichText = {
  types: {
    image: ({ value }) => (
      <Link
        href={`${urlForImage(value).url()}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={urlForImage(value).url()}
          alt="image"
          width={1000}
          height={500}
        />
      </Link>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
  },
  block: {
    h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
    h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
    h4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
    h5: ({ children }) => <h5 className={styles.h5}>{children}</h5>,
    h6: ({ children }) => <h6 className={styles.h6}>{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className={styles.quote}>{children}</blockquote>
    ),
  },
  marks: {
    Links: ({ children, value }) => {
      const rel = !value.href.startWith("/") ? "noreferrer noopner" : undefined;
      return (
        <Link
          href={value.href}
          target="_blank"
          className={styles.somelink}
          rel={rel}
        >
          {children}
        </Link>
      );
    },
  },
};
