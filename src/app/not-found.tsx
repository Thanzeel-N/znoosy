import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      textAlign: 'center',
      background: '#ffffff',
      color: '#2b1015',
      fontFamily: 'Arial, Helvetica, sans-serif'
    }}>
      <p style={{
        fontSize: '11px',
        letterSpacing: '2.5px',
        fontWeight: 600,
        textTransform: 'uppercase',
        color: '#c81e36',
        marginBottom: '16px'
      }}>
        404 — PAGE NOT FOUND
      </p>
      <h1 style={{
        fontSize: 'clamp(36px, 5vw, 56px)',
        fontWeight: 400,
        letterSpacing: '-2px',
        lineHeight: 1.15,
        margin: '0 0 18px 0',
        color: '#2b1015'
      }}>
        The quiet you’re looking for<br />
        <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: '#c81e36' }}>
          is somewhere else.
        </span>
      </h1>
      <p style={{
        fontSize: '14px',
        color: '#7d4d55',
        maxWidth: '420px',
        lineHeight: 1.8,
        margin: '0 0 32px 0'
      }}>
        We couldn’t find the page you requested. Let’s take you back to the znoosy collection and a softer place to land.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          background: '#c81e36',
          color: '#ffffff',
          padding: '16px 28px',
          fontSize: '12px',
          fontWeight: 500,
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(200, 30, 54, 0.25)',
          transition: 'background 0.2s'
        }}
      >
        <ArrowLeft size={16} /> Return to collection
      </Link>
    </div>
  );
}

