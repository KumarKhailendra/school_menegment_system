const StudentPage = ({user}) => {

  return (
    <>
      <h1>Welcome to the Student Dashboard</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.fname} {user.lname}</p><br />
          <p><strong>Standard:</strong>  {user?.standard? user.standard : "1"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default StudentPage;
