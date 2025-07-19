import React from 'react';

export default function Portraits() {
  return (
    <section style={{ 
      maxWidth: 722.5,
      margin: '0 auto', 
      padding: '0.3rem 1rem 2rem 1rem'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        color: '#1a1a1a',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        Portraits
      </h1>
      
      <p style={{
        fontSize: '0.95rem',
        lineHeight: '1.6',
        color: '#333',
        marginBottom: '1.5rem',
        textAlign: 'left'
      }}>
        To me, the greatest gift of shooting portraits is seeing other people smile. The opportunity to connect with someone and see their superficial smile morph into a genuine one is something I cherish. Below is a collection of graduation photos, family portraits, and individuals portraits that I have taken!
      </p>
      
      <p style={{
        fontSize: '0.95rem',
        lineHeight: '1.6',
        color: '#333',
        marginBottom: '2rem',
        textAlign: 'left'
      }}>
        Also, I cannot thank my friend Kevin enough for taking me under his wing when I was just starting out. He taught me so much and has been so supportive of me as I explore photography. His work is amazing—go check him out!
      </p>
      
      <hr style={{
        border: 'none',
        height: '3.75px',
        backgroundColor: '#e0e0e0',
        margin: '0 -14.4rem 0 -14.4rem'
      }} />
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        marginTop: '3rem',
        maxWidth: '100%'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '100%',
            aspectRatio: '4/5',
            backgroundColor: '#f0f0f0',
            border: '1px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            fontSize: '1rem',
            fontStyle: 'italic',
            marginBottom: '1rem'
          }}>
            Placeholder Image
          </div>
          <div style={{
            textDecoration: 'underline',
            color: '#1a1a1a',
            fontSize: '1.1rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Graduation
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '100%',
            aspectRatio: '4/5',
            backgroundColor: '#f0f0f0',
            border: '1px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            fontSize: '1rem',
            fontStyle: 'italic',
            marginBottom: '1rem'
          }}>
            Placeholder Image
          </div>
          <div style={{
            textDecoration: 'underline',
            color: '#1a1a1a',
            fontSize: '1.1rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Groups
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '100%',
            aspectRatio: '4/5',
            backgroundColor: '#f0f0f0',
            border: '1px dashed #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            fontSize: '1rem',
            fontStyle: 'italic',
            marginBottom: '1rem'
          }}>
            Placeholder Image
          </div>
          <div style={{
            textDecoration: 'underline',
            color: '#1a1a1a',
            fontSize: '1.1rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Singles
          </div>
        </div>
      </div>
    </section>
  );
} 