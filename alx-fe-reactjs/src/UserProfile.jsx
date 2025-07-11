function UserProfile(props) {
  return (
    <div style={{ 
      border: '2px solid #ccc', 
      padding: '1rem', 
      borderRadius: '8px', 
      maxWidth: '300px', 
      margin: '2rem auto',
      backgroundColor: '#f9f9f9' 
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
}

export default UserProfile;
