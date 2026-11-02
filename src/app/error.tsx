'use client';
import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, log to structured observability tool without exposing raw stack to user
    console.error('Handled application boundary error:', error.message);
  }, [error]);

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
        AN UNEXPECTED MOMENT
      </p>
      <h1 style={{
        fontSize: 'clamp(32px, 4.5vw, 48px)',
        fontWeight: 400,
        letterSpacing: '-1.5px',
        lineHeight: 1.2,
        margin: '0 0 16px 0',
        color: '#2b1015'
      }}>
        Something interrupted the rest.
      </h1>
      <p style={{
        fontSize: '14px',
        color: '#7d4d55',
        maxWidth: '440px',
        lineHeight: 1.8,
        margin: '0 0 28px 0'
      }}>
        We encountered a momentary glitch. No information was lost, and we’re ready to help you continue.
      </p>
      <button
        onClick={() => reset()}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          background: '#c81e36',
          color: '#ffffff',
          padding: '15px 26px',
          fontSize: '12px',
          fontWeight: 500,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(200, 30, 54, 0.25)'
        }}
      >
        <RotateCcw size={15} /> Try again
      </button>
    </div>
  );
}

