function Home() {
  return (
    <div
      style={{
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        minHeight: '100vh', 
        backgroundImage: 'url("/canchaboca.jpg")',
        backgroundSize: 'cover',   
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <h1 style={{ color: 'white' }}>El más grande del mundo</h1>

      <img
        src="/pngegg (1).png"
        alt="El más grande del mundo <3"
        style={{
          display: 'block',
          width: '300px',
          borderRadius: '10px',
          margin: '20px auto',
        }}
      />
    </div>
  );
}

export default Home;
