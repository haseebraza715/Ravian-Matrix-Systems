import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ravian Matrix Systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#080A0C', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', color: '#F4EFE3' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ width: '40px', height: '40px', background: '#C9A24D', transform: 'rotate(45deg)' }} />
          <div style={{ fontSize: '48px', fontWeight: 'bold', letterSpacing: '-0.02em' }}>RAVIAN MATRIX SYSTEMS</div>
        </div>
        <div style={{ fontSize: '64px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#C9A24D' }}>
          Geospatial Intelligence &amp; Digital Solutions
        </div>
        <div style={{ fontSize: '32px', color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center' }}>
          Proven geospatial systems, not slideware.
        </div>
      </div>
    ),
    { ...size }
  );
}
