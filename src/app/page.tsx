import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="card" style={{ textAlign: 'center' }}>
        <h1>Mini RCM Validation Engine</h1>
        <p>A simple tool to validate and analyze claims.</p>
        <Link href="/login" className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>
          Go to Login
        </Link>
      </div>
    </main>
  );
}
