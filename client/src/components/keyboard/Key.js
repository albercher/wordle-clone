function Key({ value, onClick }) {
  return (
    <button
        style={{
            border: '0',
            padding: '15px',
            margin: '0 6px 0 0',
            height: '58px',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#D4D6DA',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
        }}
        onClick={() => onClick(value)}
    >
        {value}
    </button>
  );
}

export default Key;
