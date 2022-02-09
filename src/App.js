import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchData } from './redux/actions/requests'
import Home from './components/Home';

function App() {
  const store = useSelector(store => store.reducer)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchData())
  }, [])




  return (
    <div>
      <Home />
    </div>
  )
}

export default App;
