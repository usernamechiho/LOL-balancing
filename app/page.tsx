import ContentLayout from "@/components/ContentLayout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>
            League of Legends 4v4 Team Balancing
          </code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Chiho
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <ContentLayout />
      </div>
    </main>
  );
}
