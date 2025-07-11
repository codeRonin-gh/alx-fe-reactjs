import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <UserProfile 
        name="Alice Mensah" 
        age="25" 
        bio="Loves hiking, skincare, and photography. Working on launching a natural beauty brand." 
      />
    </>
  );
}


export default App;

